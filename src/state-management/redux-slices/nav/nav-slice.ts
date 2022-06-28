import {
    createDraftSafeSelector,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { createLoggingAsyncThunk, history } from "../../hooks";
import { RootState } from "../../store";
import { extractPageContent } from "../../../components-for-shell/utils/extract-content";
import {
    findTocItemById,
    flattenToc,
    getParentsInToc,
    TocEntryType,
} from "../../../components-for-shell/utils/extract-toc";
import {
    normalizeUrl,
    normalizeUrlWithHash,
} from "../../../components-for-shell/utils/normalize";
import { inMobileModeSelector } from "../global/global-slice";
import { tocActions } from "../toc/toc-slice";
import { mapToc } from "./map-toc";
import { scrollThunks } from "./scroll-thunks";

export interface NavState {
    currentPageId: string | null;
    currentPageHash: string | null;
    toc: TocEntryType[];
    pageIdToUrlMap: Record<string, string>;
    urlToPageIdMap: Record<string, string>;
    urlCache: Record<string, string>;
    history: {
        current: { page: string; hash: string };
        previous: { page: string; hash: string };
    };
    pageLoadingStatus: "loading" | "loaded" | "rendered" | null;
}

const initialState: NavState = {
    currentPageId: null,
    currentPageHash: null,
    toc: [],
    pageIdToUrlMap: {},
    urlToPageIdMap: {},
    urlCache: {},
    history: {
        current: { page: "", hash: "" },
        previous: { page: "", hash: "" },
    },
    pageLoadingStatus: null,
};

// We want to be able to delay until the first time the toc is set.
// This global promise allows us to wait. It is resolved when `actions.setToc` is
// called for the first time.
let tocIsSetResolve: (_: void) => void;
let tocIsSet = new Promise((resolve) => {
    tocIsSetResolve = resolve;
});

const callbacksDelayedUntilPageRendered: (() => void)[] = [];
/**
 * Add a function to a queue of functions that will be called when the current page has the "rendered" status.
 */
export function queueUntilPageRendered(func: () => void) {
    callbacksDelayedUntilPageRendered.push(func);
}
/**
 * Remove a function to a queue of functions that will be called when the current page has the "rendered" status.
 */
export function queueUntilPageRenderedCancel(func: () => void) {
    const index = callbacksDelayedUntilPageRendered.indexOf(func);
    if (index >= 0) {
        callbacksDelayedUntilPageRendered.splice(index, 1);
    }
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(navThunks.setCurrentPage("..."))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
const navThunks = {
    setCurrentPage: createLoggingAsyncThunk(
        "nav/setCurrentPageThunk",
        async (currentPage: string | null, { dispatch, getState }) => {
            if (!currentPage) {
                dispatch(navSlice.actions._setCurrentPageId(currentPage));
                await dispatch(navThunks.updateWindowTitleToMatchPage());
                return;
            }

            // Retrieve the page
            const state = selfSelector(getState() as RootState);
            const { pageIdToUrlMap: pageToUrlMap } = state;

            // If we've navigated to a new location, push the change to the history.
            // We used a non-normalized URL because we want to include hashes, etc.
            if (
                window.location.href !==
                new URL(pageToUrlMap[currentPage], window.location.href).href
            ) {
                // Pushing to the history will automatically trigger the
                // `setCurrentPageByUrl` thunk, which handles the page loading.
                history.push(pageToUrlMap[currentPage]);
            }
        }
    ),
    setCurrentPageByUrl: createLoggingAsyncThunk(
        "nav/setCurrentPageByUrlThunk",
        async (targetPageUrl: string | null, { dispatch, getState }) => {
            if (!targetPageUrl) {
                dispatch(navSlice.actions._setCurrentPageId(targetPageUrl));
                return;
            }

            await tocIsSet;
            let state = selfSelector(getState() as RootState);
            const { urlToPageIdMap } = state;
            let currentPageId =
                urlToPageIdMap[normalizeUrlWithHash(targetPageUrl)];
            if (!currentPageId) {
                currentPageId = urlToPageIdMap[normalizeUrl(targetPageUrl)];
            }
            if (!currentPageId) {
                throw new Error(
                    `Failed to find page "${targetPageUrl}" in urlToPageMap`
                );
            }

            // Retrieve the page
            dispatch(navActions.setPageLoadingStatus("loading"));
            await dispatch(navThunks.ensurePageCached(currentPageId));

            const targetUrl = new URL(targetPageUrl, window.location.href);
            // If we've navigated to a new location, push the change to the history.
            if (window.location.href !== targetUrl.href) {
                history.push(targetUrl.href);
            }

            dispatch(
                navSlice.actions._setPage({
                    page: targetUrl.pathname,
                    hash: targetUrl.hash,
                })
            );
            await dispatch(navThunks.updateWindowTitleToMatchPage());
            // The page may have rendered very quickly. If it did, don't set the status (backwards) to "loaded"
            if (
                pageLoadingStatusSelector(getState() as RootState) !==
                "rendered"
            ) {
                dispatch(navActions.setPageLoadingStatus("loaded"));
            }
            const pageHistory = historySelector(getState() as RootState);
            if (pageHistory.current.page === pageHistory.previous.page) {
                dispatch(navActions.setPageLoadingStatus("rendered"));
            }

            if (inMobileModeSelector(getState() as RootState)) {
                // In mobile mode, we always hide the TOC after navigating to a new link.
                dispatch(tocActions.setVisible(false));
            }
        }
    ),

    ensurePageCached: createLoggingAsyncThunk(
        "nav/ensurePageCached",
        async (pageId: string, { dispatch, getState }) => {
            const state = selfSelector(getState() as RootState);
            const { pageIdToUrlMap: pageToUrlMap, urlCache } = state;
            if (!pageToUrlMap[pageId]) {
                throw new Error(
                    `Could not fetch page with id "${pageId}"; could not find corresponding URL.`
                );
            }
            // Normalize the URL. For example, `foo.html` and `foo.html#bar` become `/foo.html`
            const url = normalizeUrl(pageToUrlMap[pageId]);
            if (urlCache[url]) {
                console.log(
                    `Fetch of ${url} is not needed; page already in cache`
                );
            } else {
                const resp = await fetch(url);
                const body = extractPageContent(await resp.text()).innerHTML;
                dispatch(
                    navSlice.actions._cacheUrl({
                        url,
                        body,
                    })
                );
            }
        }
    ),

    updateWindowTitleToMatchPage: createLoggingAsyncThunk(
        "nav/updateWindowTitleToMatchPage",
        async (_: void, { getState }) => {
            const tocEntry = currentPageTopLevelTocInfoSelector(
                getState() as RootState
            );
            if (!tocEntry) {
                return;
            }
            document.title = tocEntry.title || "";
        }
    ),

    setPageLoadingStatus: createLoggingAsyncThunk(
        "nav/setPageLoadingStatusThunk",
        (status: "loading" | "loaded" | "rendered" | null, { dispatch }) => {
            dispatch(navSlice.actions._setPageLoadingStatus(status));
            if (status === "rendered") {
                for (const func of callbacksDelayedUntilPageRendered) {
                    func();
                }
                callbacksDelayedUntilPageRendered.length = 0;
            }
        }
    ),
};

/**
 * Turn a `{page, hash}` object into a string, normalized relative to the current
 * `window.location`.
 */
function normalizePageAndHash({
    page = "",
    hash = "",
}: {
    page: string | null;
    hash: string | null;
}): string {
    if (!page && !hash) {
        return "";
    }
    const url = new URL(page || "", window.location.href);
    url.hash = hash || "";
    return url.pathname + url.hash;
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        /**
         * Sets the current page and pushes to the locally-stored transition history.
         * This allows for careful control of scrolling/non-scrolling etc, when moving
         * between pages.
         *
         * This method should be preferred over `_setCurrentPage` and `_setCurrentPageHash`.
         */
        _setPage(
            state,
            action: PayloadAction<{ page: string | null; hash: string | null }>
        ) {
            const { page, hash } = action.payload;
            const normalized = normalizePageAndHash({ page, hash });

            // Have we changed history states?
            if (normalizePageAndHash(state.history.current) !== normalized) {
                state.history.previous = state.history.current;
                state.history.current = { page: page || "", hash: hash || "" };
            }

            const targetUrl = new URL(normalized, window.location.href);
            const targetPageId =
                state.urlToPageIdMap[normalized] ||
                state.urlToPageIdMap[normalizeUrl(normalized)];
            state.currentPageId = targetPageId;
            // The URL object inserts a `#` in front of all hashes (if it's empty, the slice doesn't matter)
            state.currentPageHash = targetUrl.hash.slice(1);
        },
        _setCurrentPageId(state, action: PayloadAction<string | null>) {
            state.currentPageId = action.payload;
        },
        _setCurrentPageHash(state, action: PayloadAction<string | null>) {
            state.currentPageHash = action.payload;
        },
        _setPageLoadingStatus(
            state,
            action: PayloadAction<"loading" | "loaded" | "rendered" | null>
        ) {
            state.pageLoadingStatus = action.payload;
        },
        _cacheUrl(state, action: PayloadAction<{ url: string; body: string }>) {
            state.urlCache[action.payload.url] = action.payload.body;
        },
        setToc(state, action: PayloadAction<TocEntryType[]>) {
            const toc = action.payload;
            state.toc = toc;

            // We keep an updated map from ids to urls so we
            // don't have to do a deep search on every mouse click.
            const { pageToUrlMap, urlToPageMap } = mapToc(toc);
            state.pageIdToUrlMap = pageToUrlMap;
            state.urlToPageIdMap = urlToPageMap;
            // Some thunks might be waiting on the TOC to be set
            // before executing. This allows them to execute.
            tocIsSetResolve();
        },
    },
    /*
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.value += action.payload;
            })
            .addCase(incrementAsync.rejected, (state) => {
                state.status = "failed";
            });
    },
    */
});

export const navActions = {
    ...navSlice.actions,
    ...navThunks,
    ...scrollThunks,
};

const selfSelector = (state: RootState) => state.nav;

export const currentPageIdSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.currentPageId
);
/**
 * Return a cached version of the current page, if available. Otherwise an empty
 * string is returned. This cached version contains just the contents of the
 * `<div id="content">...</div>` node.
 */
export const currentPageContentSelector = createDraftSafeSelector(
    [selfSelector, currentPageIdSelector],
    (state, currentPage) => {
        if (!currentPage) {
            return "";
        }
        return (
            state.urlCache[normalizeUrl(state.pageIdToUrlMap[currentPage])] ||
            ""
        );
    }
);
export const tocSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.toc
);
export const historySelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.history
);
export const pageLoadingStatusSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.pageLoadingStatus
);
/**
 * Return the top-level TocEntry corresponding to the currently active page.
 * If the currently active page is a subsection, the parent section's title is returned.
 */
export const currentPageTopLevelTocInfoSelector = createDraftSafeSelector(
    [currentPageIdSelector, tocSelector],
    (currentPage, toc) => {
        // Recursively search the table of contents for an entry
        // with id matching the currently active page.
        function recursiveFind(toc: TocEntryType[]): TocEntryType | null {
            for (const entry of toc) {
                if (
                    entry.id === currentPage ||
                    (entry.children && recursiveFind(entry.children))
                ) {
                    return entry;
                }
            }
            return null;
        }
        return recursiveFind(toc);
    }
);

/**
 * Return the TOC entries for the next/prev/up navigation directions
 * relative to the current page.
 */
export const nextPrevParentSelector = createDraftSafeSelector(
    [currentPageIdSelector, tocSelector],
    (currentPage, toc) => {
        let prev: TocEntryType | null = null,
            next: TocEntryType | null = null,
            up: TocEntryType | null = null;
        if (!currentPage) {
            return { prev, next, up };
        }
        const currentTocEntry = findTocItemById(toc, currentPage);
        if (!currentTocEntry) {
            return { prev, next, up };
        }
        const currentBaseUrl = normalizeUrl(currentTocEntry.href || "");
        // We only care about the items with a different URL.
        const flatToc = flattenToc(toc).filter(
            (entry) =>
                normalizeUrl(entry.href || "") !== currentBaseUrl ||
                entry === currentTocEntry
        );
        const currentPageIndex = flatToc.findIndex(
            (entry) => entry === currentTocEntry
        );

        prev = flatToc[currentPageIndex - 1] || null;
        next = flatToc[currentPageIndex + 1] || null;

        // Now for the parent
        const parents = getParentsInToc(toc, currentTocEntry).filter(
            (item) => normalizeUrl(item.href || "") !== currentBaseUrl
        );
        up = parents[parents.length - 1] || null;

        return { prev, next, up };
    }
);
