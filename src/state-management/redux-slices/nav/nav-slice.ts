import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createLoggingAsyncThunk, history } from "../../hooks";
import { RootState } from "../../store";
import { extractPageContent } from "../../../components-for-shell/utils/extract-content";
import {
    extractTocFromXml,
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
import {
    selfSelector,
    pageLoadingStatusSelector,
    historySelector,
    currentPageTopLevelTocInfoSelector,
} from "./selectors";

export type NavigationOrigin = "page" | "toc" | "nav" | "url-change";

export interface NavState {
    currentPageId: string | null;
    currentPageHash: string | null;
    toc: TocEntryType[];
    pageIdToUrlMap: Record<string, string>;
    urlToPageIdMap: Record<string, string>;
    urlCache: Record<string, string>;
    history: {
        current: {
            page: string;
            hash: string;
            // origin is used to compute scroll behavior. If a link was followed from the TOC vs from being clicked
            // in the body text, there should be different scroll behavior.
            origin?: NavigationOrigin;
        };
        previous: { page: string; hash: string; origin?: NavigationOrigin };
    };
    pageLoadingStatus: "loading" | "loaded" | "rendered" | null;
    // Set to an id if the page should have an index button; null otherwise
    indexId: string | null;
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
    indexId: null,
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
        async (
            {
                id: currentPage,
                origin,
            }: { id: string | null; origin?: NavigationOrigin },
            { dispatch, getState }
        ) => {
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
                await dispatch(
                    navThunks.setCurrentPageByUrl({
                        url: pageToUrlMap[currentPage],
                        origin,
                    })
                );
            }
        }
    ),
    setCurrentPageByUrl: createLoggingAsyncThunk(
        "nav/setCurrentPageByUrlThunk",
        async (
            {
                url: targetPageUrl,
                origin,
            }: { url: string | null; origin?: NavigationOrigin },
            { dispatch, getState }
        ) => {
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
                    origin,
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

    /**
     * Fetches all pages from the server and loads them into the cache
     */
    cacheAllPages: createLoggingAsyncThunk(
        "nav/cacheAllPages",
        async (_: void, { dispatch, getState }) => {
            const state = selfSelector(getState() as RootState);
            const { pageIdToUrlMap, urlCache } = state;

            const allUrls = new Set(
                Object.values(pageIdToUrlMap).map((v) => normalizeUrl(v))
            );

            const promises = Array.from(allUrls).map(async (url) => {
                if (urlCache[url]) {
                    // No need to refetch
                    return;
                }
                const resp = await fetch(url);
                const body = extractPageContent(await resp.text()).innerHTML;
                dispatch(
                    navSlice.actions._cacheUrl({
                        url,
                        body,
                    })
                );
            });

            await Promise.all(promises);
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

    fetchAndInitTocFromManifest: createLoggingAsyncThunk(
        "nav/fetchAndInitTocFromManifestThunk",
        async (_: void, { dispatch }) => {
            // Fetch the doc-manifest and convert it to a JSON object
            const resp = await fetch("doc-manifest.xml");
            const content = await resp.text();
            const toc = extractTocFromXml(content);
            dispatch(navActions.setToc(toc));

            // Figure out if there is an index page
            const indices: string[] = [];
            function walk(entries: TocEntryType[]) {
                for (const entry of entries) {
                    if (entry.type === "index") {
                        indices.push(entry.id!);
                    }
                    if (entry.children) {
                        walk(entry.children);
                    }
                }
            }
            walk(toc);
            if (indices.length > 0) {
                if (indices.length > 1) {
                    console.log(
                        "Warning: multiple indices found",
                        indices,
                        "picking the first one."
                    );
                }
                dispatch(navActions._setIndexId(indices[0]));
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
            action: PayloadAction<{
                page: string | null;
                hash: string | null;
                origin?: NavigationOrigin;
            }>
        ) {
            const { page, hash, origin } = action.payload;
            const normalized = normalizePageAndHash({ page, hash });

            // Have we changed history states?
            if (normalizePageAndHash(state.history.current) !== normalized) {
                state.history.previous = state.history.current;
                state.history.current = {
                    page: page || "",
                    hash: hash || "",
                    origin,
                };
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
        _setIndexId(state, action: PayloadAction<string | null>) {
            state.indexId = action.payload;
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
});

export const navActions = {
    ...navSlice.actions,
    ...navThunks,
    ...scrollThunks,
};
