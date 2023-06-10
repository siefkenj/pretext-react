import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { toText } from "hast-util-to-text";
import { unified } from "unified";
import { normalizeUrl } from "../../../components-for-shell/utils/normalize";
import { hastFromStringNative } from "../../../replacers/html-manipulation/hast-from-string-native";
import {
    selfSelector,
    navSelector,
    PretextSearchResult,
    tokenizeButKeepNumbers,
} from "./search-slice";

const htmlParser = unified().use(hastFromStringNative);

/**
 * Combine search results from the TOC and the body text into one list
 * that is appropriately sorted.
 */
export const searchResultsSelector = createDraftSafeSelector(
    [selfSelector, navSelector],
    (searchState, navState) => {
        const tocSearchResults = searchState.tocSearchResults;
        const bodyTextSearchResults = searchState.bodyTextSearchResults;
        const pageIdToUrlMap = navState.pageIdToUrlMap;
        let ret: PretextSearchResult[] = [];

        // Utilities for mapping terms back to what the user actually typed.
        const userTypedTerms = tokenizeButKeepNumbers(
            searchState.searchString
        ).filter((x) => x);
        userTypedTerms.sort((a, b) => a.length - b.length);
        const highlightableCache: Record<string, string> = {};
        /**
         * The `terms` returned by MiniSearch are actual sub-words that
         * have appeared. Highlighting these sub-words could be confusing. Instead,
         * we want to figure out which things that the user _actually typed_ and highlight
         * only that.
         */
        function termToHighlightableTerm(term: string) {
            let ret = highlightableCache[term];
            if (ret) {
                return ret;
            }
            // Search though to see if any words we typed are a prefix
            for (const word of userTypedTerms) {
                if (term.startsWith(word)) {
                    highlightableCache[term] = word;
                    return word;
                }
            }
            // If we cannot find a match, it might be a fuzzy search. Just give up
            // and return the term.
            highlightableCache[term] = term;
            return term;
        }

        // We need to lookup the url for all the search results
        const returnableTocResults: PretextSearchResult[] =
            tocSearchResults.map((r) => ({
                id: r.id,
                parentDivisionHtml: r.html,
                parentDivisionHref: pageIdToUrlMap[r.id],
                href: "",
                html: "",
                terms: r.terms.map(termToHighlightableTerm),
                score: r.score,
            }));
        ret.push(...returnableTocResults);
        const returnableBodyTextResults: PretextSearchResult[] =
            bodyTextSearchResults.map((r) => {
                // We need to compute the url to this item
                const pageUrl = `${normalizeUrl(pageIdToUrlMap[r.pageId])}#${
                    r.id
                }`;
                const parentDivisionHref = `${normalizeUrl(
                    pageIdToUrlMap[r.pageId]
                )}#${r.closestHeadingId}`;

                return {
                    id: r.id,
                    parentDivisionHtml: r.closestHeadingHtml,
                    parentDivisionHref,
                    href: pageUrl,
                    html: r.html,
                    terms: r.terms.map(termToHighlightableTerm),
                    score: r.score,
                };
            });
        ret.push(...returnableBodyTextResults);

        ret.sort((a, b) => {
            // We want higher scores on top
            const scoreDiff = b.score - a.score;
            if (Math.abs(scoreDiff) > 0.01) {
                return scoreDiff;
            }
            // If two items have the same score, we want to list them alphabetically
            return Number(a.parentDivisionHtml > b.parentDivisionHtml) - 0.5;
        });
        ret = ret.slice(0, searchState.searchLimit);

        // Now that we have the search results, we want to group things that appear
        // in the same division, with each division heading only occurring once.
        const groupedRet: Map<
            string,
            { score: number; items: PretextSearchResult[] }
        > = new Map();
        for (const match of ret) {
            const divisionText = toText(
                htmlParser.parse(match.parentDivisionHtml)
            );
            const group = groupedRet.get(divisionText);
            if (group) {
                if (match.html) {
                    // We only add the body content since the parent division info has already been added.
                    group.items.push({
                        ...match,
                        parentDivisionHref: "",
                        parentDivisionHtml: "",
                    });
                }
            } else {
                const items: PretextSearchResult[] = [
                    { ...match, html: "", href: "" },
                ];
                if (match.html) {
                    items.push({
                        ...match,
                        parentDivisionHref: "",
                        parentDivisionHtml: "",
                    });
                }
                groupedRet.set(divisionText, { score: match.score, items });
            }
        }
        // Maps preserve the order of insertion, so we can create our sorted match list from here
        // with everything grouped appropriately
        ret = Array.from(groupedRet.values()).flatMap((x) => x.items);

        return ret;
    }
);
