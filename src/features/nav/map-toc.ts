import { TocEntryType } from "../../utils/extract-toc";
import { normalizeUrl, normalizeUrlWithHash } from "../../utils/normalize";

/**
 * Create a map and inverse map between page URLs and page IDs.
 */
export function mapToc(toc: TocEntryType[]): {
    pageToUrlMap: Record<string, string>;
    urlToPageMap: Record<string, string>;
} {
    // We keep an updated map from ids to urls so we
    // don't have to do a deep search on every mouse click.
    const pageToUrlMap: Record<string, string> = {};
    const urlToPageMap: Record<string, string> = {};
    function traverse(toc: TocEntryType[]) {
        for (const item of toc) {
            if (item.id && item.href) {
                pageToUrlMap[item.id] = item.href;
                // We keep many variants of the URL, normalized and not for easy lookup.
                urlToPageMap[item.href] = item.id;
                urlToPageMap[normalizeUrlWithHash(item.href)] = item.id;
                const hashlessUrl = normalizeUrl(item.href);
                urlToPageMap[hashlessUrl] =
                    urlToPageMap[hashlessUrl] || item.id;
            }
            if (item.children) {
                traverse(item.children);
            }
        }
    }
    traverse(toc);

    return { pageToUrlMap, urlToPageMap };
}
