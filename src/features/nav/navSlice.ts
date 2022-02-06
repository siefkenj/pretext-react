import {
    createDraftSafeSelector,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { createLoggingAsyncThunk, history } from "../../app/hooks";
import { RootState } from "../../app/store";
import { extractPageContent } from "../../utils/extract-content";
import { TocEntryType } from "../../utils/extract-toc";
import { normalizeUrl, normalizeUrlWithHash } from "../../utils/normalize";
import { mapToc } from "./map-toc";

export interface NavState {
    currentPage: string | null;
    currentPageHash: string | null;
    toc: TocEntryType[];
    pageToUrlMap: Record<string, string>;
    urlToPageMap: Record<string, string>;
    urlCache: Record<string, string>;
    scrollIntoViewOnTransition: boolean;
}

const initialState: NavState = {
    currentPage: null,
    currentPageHash: null,
    toc: [],
    pageToUrlMap: {},
    urlToPageMap: {},
    urlCache: {},
    scrollIntoViewOnTransition: true,
};

// We want to be able to delay until the first time the toc is set.
// This global promise allows us to wait. It is resolved when `actions.setToc` is
// called for the first time.
let tocIsSetResolve: (_: void) => void;
let tocIsSet = new Promise((resolve) => {
    tocIsSetResolve = resolve;
});

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
                dispatch(navSlice.actions._setCurrentPage(currentPage));
                await dispatch(navThunks.updateWindowTitleToMatchPage());
                return;
            }

            // Retrieve the page
            const state = selfSelector(getState() as RootState);
            const { pageToUrlMap } = state;

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
        async (currentPageUrl: string | null, { dispatch, getState }) => {
            if (!currentPageUrl) {
                dispatch(navSlice.actions._setCurrentPage(currentPageUrl));
                return;
            }

            await tocIsSet;
            let state = selfSelector(getState() as RootState);
            const { urlToPageMap } = state;
            let currentPage =
                urlToPageMap[normalizeUrlWithHash(currentPageUrl)];
            if (!currentPage) {
                currentPage = urlToPageMap[normalizeUrl(currentPageUrl)];
            }
            if (!currentPage) {
                throw new Error(
                    `Failed to find page "${currentPageUrl}" in urlToPageMap`
                );
            }
            const currentPageHash =
                new URL(currentPageUrl, window.location.href).hash || null;

            // Retrieve the page
            await dispatch(navThunks.ensurePageCached(currentPage));

            state = selfSelector(getState() as RootState);
            const { pageToUrlMap } = state;

            // If we've navigated to a new location, push the change to the history.
            // We used a non-normalized URL because we want to include hashes, etc.
            if (
                window.location.href !==
                new URL(pageToUrlMap[currentPage], window.location.href).href
            ) {
                // The URL we get from `pageToUrlMap` may or may not contain a hash.
                // We take care to preserve the hash if there is one.
                const url = new URL(
                    pageToUrlMap[currentPage],
                    window.location.href
                );
                if (currentPageHash) {
                    url.hash = currentPageHash;
                }
                history.push(url.href);
            }

            dispatch(navSlice.actions._setCurrentPage(currentPage));
            dispatch(navSlice.actions._setCurrentPageHash(currentPageHash));
            await dispatch(navThunks.updateWindowTitleToMatchPage());
        }
    ),

    ensurePageCached: createLoggingAsyncThunk(
        "nav/ensurePageCached",
        async (pageId: string, { dispatch, getState }) => {
            const state = selfSelector(getState() as RootState);
            const { pageToUrlMap, urlCache } = state;
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
        async (_: void, { dispatch, getState }) => {
            const tocEntry = currentPageTopLevelTocInfoSelector(
                getState() as RootState
            );
            if (!tocEntry) {
                return;
            }
            document.title = tocEntry.title || "";
        }
    ),
};

export const navSlice = createSlice({
    name: "nav",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        _setCurrentPage(state, action: PayloadAction<string | null>) {
            state.currentPage = action.payload;
        },
        _setCurrentPageHash(state, action: PayloadAction<string | null>) {
            state.currentPageHash = action.payload;
        },
        _cacheUrl(state, action: PayloadAction<{ url: string; body: string }>) {
            state.urlCache[action.payload.url] = action.payload.body;
        },
        setScrollIntoViewOnTransition(state, action: PayloadAction<boolean>) {
            state.scrollIntoViewOnTransition = action.payload;
        },
        setToc(state, action: PayloadAction<TocEntryType[]>) {
            const toc = action.payload;
            state.toc = toc;

            // We keep an updated map from ids to urls so we
            // don't have to do a deep search on every mouse click.
            const { pageToUrlMap, urlToPageMap } = mapToc(toc);
            state.pageToUrlMap = pageToUrlMap;
            state.urlToPageMap = urlToPageMap;
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

export const navActions = { ...navSlice.actions, ...navThunks };

const selfSelector = (state: RootState) => state.nav;

export const currentPageSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.currentPage
);
/**
 * Return a cached version of the current page, if available. Otherwise an empty
 * string is returned. This cached version contains just the contents of the
 * `<div id="content">...</div>` node.
 */
export const currentPageContentSelector = createDraftSafeSelector(
    [selfSelector, currentPageSelector],
    (state, currentPage) => {
        if (!currentPage) {
            return "";
        }
        return (
            state.urlCache[normalizeUrl(state.pageToUrlMap[currentPage])] || ""
        );
    }
);
export const tocSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.toc
);
export const scrollIntoViewOnTransitionSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.scrollIntoViewOnTransition
);
/**
 * Return the top-level TocEntry corresponding to the currently active page.
 * If the currently active page is a subsection, the parent section's title is returned.
 */
export const currentPageTopLevelTocInfoSelector = createDraftSafeSelector(
    [currentPageSelector, tocSelector],
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
