import {
    createDraftSafeSelector,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import MiniSearch, { Options, SearchResult } from "minisearch";
import { segmentPage, segmentToc } from "./page-segmentor";
import {
    normalizeUrl,
    normalizeUrlWithHash,
} from "../../../components-for-shell/utils/normalize";

import { createLoggingAsyncThunk } from "../../hooks";
import { RootState } from "../../store";
import { navActions } from "../nav/nav-slice";
import {
    tocSelector,
    urlCacheSelector,
    urlToPageIdMapSelector,
} from "../nav/selectors";

export type TocSearchResult = SearchResult & {
    html: string;
    codeNumber: string;
};
export type BodyTextSearchResult = SearchResult & {
    html: string;
    pageId: string;
    closestHeadingHtml: string;
    closestHeadingId: string;
};
export type PretextSearchResult = {
    parentDivisionHtml: string;
    parentDivisionHref: string;
    href: string;
    html: string;
    id: string;
    terms: string[];
    score: number;
};

export interface SearchState {
    searchDialogVisible: boolean;
    tocSearchResults: TocSearchResult[];
    bodyTextSearchResults: BodyTextSearchResult[];
    searchString: string;
    indexing: { start: number; end: number };
    searchLimit: number;
}

const initialState: SearchState = {
    searchDialogVisible: false,
    tocSearchResults: [],
    bodyTextSearchResults: [],
    searchString: "",
    indexing: { start: 1, end: 1 },
    searchLimit: 20,
};

const bodyTextSearcher = new MiniSearch({
    fields: ["searchableText"],
    storeFields: [
        "id",
        "html",
        "pageId",
        "closestHeadingHtml",
        "closestHeadingId",
    ],
    searchOptions: { fuzzy: 0.1, prefix: true },
});

const defaultTokenize = MiniSearch.getDefault("tokenize");
/**
 * Split text on whitespace and punctuation, as long as there is space on one side
 * of the punctuation. In particular, this avoids splitting numbers like `4.6` but
 * will split `4. 6`.
 */
export const tokenizeButKeepNumbers = (text: string) =>
    text.split(/\p{P}\s+|\s+\p{P}|\s+/u);
const tocSearcher = new MiniSearch({
    fields: ["searchableText", "codeNumber"],
    storeFields: ["id", "html", "codeNumber"],
    searchOptions: {
        fuzzy: 0.1,
        prefix: true,
        // For searches, only split on space, not on punctuation
        tokenize: (text) => text.split(/\s+/),
    },
    tokenize: tokenizeButKeepNumbers,
});
(window as any).tocSearcher = tocSearcher;

const searchThunks = {
    initSearch: createLoggingAsyncThunk(
        "search/init",
        async (_: void, { dispatch, getState }) => {
            tocSearcher.removeAll();
            let state = getState() as RootState;
            const promises: Promise<any>[] = [];

            // Make sure we can display a spinner while we build the index and download
            // the needed files.
            dispatch(searchActions._setIndexing({ start: Date.now() }));

            const toc = tocSelector(state);
            const indexableToc = segmentToc(toc);

            promises.push(tocSearcher.addAllAsync(indexableToc));
            // We need to fetch the source of all pages before we can think about doing a search
            await dispatch(navActions.cacheAllPages());
            // Index all the pages that are stored in the cache
            state = getState() as RootState;
            const urlCache = urlCacheSelector(state);
            const urlToPageIdMap = urlToPageIdMapSelector(state);
            let indexableBody = Object.entries(urlCache).flatMap(
                ([url, html]) =>
                    segmentPage(html, urlToPageIdMap[normalizeUrl(url)])
            );
            // It is possible in some strange circumstances, that indexableBody contains
            // duplicates. We should make everything unique
            indexableBody = Array.from(
                new Map(indexableBody.map((v) => [v.id, v])).values()
            );
            promises.push(bodyTextSearcher.addAllAsync(indexableBody));

            await Promise.all(promises);
            dispatch(searchActions._setIndexing({ end: Date.now() }));
        }
    ),
    search: createLoggingAsyncThunk(
        "search/search",
        async (query: string, { dispatch, getState }) => {
            const { searchLimit } = selfSelector(getState() as RootState);
            dispatch(searchActions._setSearchString(query));
            const tocSearch = tocSearcher
                .search(query)
                .slice(0, searchLimit) as TocSearchResult[];
            dispatch(searchActions._setTocSearchResults(tocSearch));
            const bodyTextSearch = bodyTextSearcher
                .search(query, {
                    prefix: (term) => term.length > 3,
                    fuzzy: (term) => (term.length > 3 ? 0.2 : false),
                })
                .slice(0, searchLimit) as BodyTextSearchResult[];
            dispatch(searchActions._setBodyTextSearchResults(bodyTextSearch));
        }
    ),
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setSearchDialogVisible(state, action: PayloadAction<boolean>) {
            state.searchDialogVisible = action.payload;
        },
        _setTocSearchResults(state, action: PayloadAction<TocSearchResult[]>) {
            state.tocSearchResults = action.payload;
        },
        _setBodyTextSearchResults(
            state,
            action: PayloadAction<BodyTextSearchResult[]>
        ) {
            state.bodyTextSearchResults = action.payload;
        },
        _setSearchString(state, action: PayloadAction<string>) {
            state.searchString = action.payload;
        },
        _setIndexing(
            state,
            action: PayloadAction<Partial<SearchState["indexing"]>>
        ) {
            Object.assign(state.indexing, action.payload);
        },
    },
});

export const searchActions = {
    ...searchSlice.actions,
    ...searchThunks,
};

export const selfSelector = (state: RootState) => state.search;
export const navSelector = (state: RootState) => state.nav;

export const searchDialogVisibleSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.searchDialogVisible
);
export const searchStringSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.searchString
);
export const tocSearchResultsSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.tocSearchResults
);
export const bodyTextSearchResultsSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.bodyTextSearchResults
);
export const searchIsIndexingSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.indexing.end < state.indexing.start
);
