import { unified } from "unified";
import { visit, SKIP } from "unist-util-visit";
import { Element as HastElement } from "hast";
import { toText } from "hast-util-to-text";
import { toHtml } from "hast-util-to-html";
import { hastFromStringNative } from "../../../replacers/html-manipulation/hast-from-string-native";
import { TocEntryType } from "../../../components-for-shell/utils/extract-toc";
import { HastDom } from "../../../replacers/html-manipulation/hast-dom";

export type SearchablePageSegment = {
    id: string;
    pageId: string;
    html: string;
    searchableText: string;
    closestHeadingHtml: string;
    closestHeadingId: string;
};
export type SearchableTocSegment = {
    id: string;
    searchableText: string;
    html: string;
    codeNumber: string;
};

function isElement(node: any): node is HastElement {
    return node && node.type === "element";
}

const htmlParser = unified().use(hastFromStringNative);

/**
 * Takes the raw HTML for a page and segments it into paragraphs. These paragraphs are suitable
 * for indexing for search.
 */
export function segmentPage(
    pageHtml: string,
    pageId: string
): SearchablePageSegment[] {
    const root = htmlParser.parse(pageHtml);
    const ret: SearchablePageSegment[] = [];

    // <a> tags should not be rendered as part of search results,
    // so we first walk the tree and change and <a> tags to neutral <span> tags.
    visit(root, isElement, (node: HastElement) => {
        if (node.tagName === "a") {
            node.tagName = "span";
            node.properties = {};
            // If we have valid HTML, there should be no <a> descendants of an <a> tag.
            // So it's safe to ignore any children.
            return SKIP;
        }
    });

    const hastDom = new HastDom(root);

    let closestHeadingHtml = "";
    let closestHeadingId = "";
    visit(root, isElement, (node: HastElement) => {
        const id = node.properties?.id || "";
        const className = node.properties?.className;
        if (Array.isArray(className) && className.includes("heading")) {
            closestHeadingHtml = toHtml(node);
            closestHeadingId = "";
            // We also need to find the id of the container of this heading.
            // It may be an article or a section or something else, so we search all the parents.
            for (const parent of hastDom.allParentsOf(node)) {
                if (parent.type === "element" && parent.properties?.id) {
                    closestHeadingId = parent.properties?.id as string;
                    break;
                }
            }
        }
        if (id && Array.isArray(className) && className.includes("para")) {
            ret.push({
                id: String(id),
                pageId,
                html: toHtml(node.children),
                searchableText: toText(node),
                closestHeadingHtml,
                closestHeadingId,
            });
            return SKIP;
        }
    });

    return ret;
}

/**
 * Create a searchable index for the TOC
 */
export function segmentToc(
    toc: TocEntryType | TocEntryType[]
): SearchableTocSegment[] {
    if (Array.isArray(toc)) {
        return toc.flatMap((item) => segmentToc(item));
    }
    const root = htmlParser.parse(toc.title || "");
    const searchableText = toText(root);

    return [
        {
            id: toc.id || "",
            searchableText,
            html: `<span class="codenumber">${
                toc.codeNumber || ""
            }</span><span class="title">${toc.title || ""}</span>`,
            codeNumber: toc.codeNumber || "",
        },
    ].concat(segmentToc(toc.children || []));
}
