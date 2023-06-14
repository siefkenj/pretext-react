import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import {
    findTocItemById,
    flattenToc,
    getParentsInToc,
    TocEntryType,
} from "../../../components-for-shell/utils/extract-toc";
import { normalizeUrl } from "../../../components-for-shell/utils/normalize";

export const selfSelector = (state: RootState) => state.nav;

export const urlCacheSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.urlCache
);

export const urlToPageIdMapSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.urlToPageIdMap
);

export const currentPageIdSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.currentPageId
);

export const currentPageUrlSelector = createDraftSafeSelector(
    selfSelector,
    (state) => normalizeUrl(state.pageIdToUrlMap[state.currentPageId || ""])
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

/**
 * Returns the TOC data structure
 */
export const tocSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.toc
);

/**
 * Returns the recorded browsing history
 */
export const historySelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.history
);

/**
 * The status of the current page: loading, etc.
 */
export const pageLoadingStatusSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.pageLoadingStatus
);

/**
 * Information about the Index page, a special page among other pages.
 */
export const indexSelector = createDraftSafeSelector(selfSelector, (state) => ({
    id: state.indexId,
    url: state.indexId && state.pageIdToUrlMap[state.indexId],
}));
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
 * Return the TocEntry corresponding to the currently active page.
 */
export const currentPageTocInfoSelector = createDraftSafeSelector(
    [currentPageIdSelector, tocSelector],
    (currentPage, toc) => {
        // Recursively search the table of contents for an entry
        // with id matching the currently active page.
        function recursiveFind(toc: TocEntryType[]): TocEntryType | null {
            for (const entry of toc) {
                if (entry.id === currentPage) {
                    return entry;
                }
                if (entry.children) {
                    const info = recursiveFind(entry.children);
                    if (info) {
                        return info;
                    }
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
