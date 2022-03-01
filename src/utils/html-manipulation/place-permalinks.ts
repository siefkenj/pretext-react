import { Plugin } from "unified";
import { Element as HastElement, Root as HastRoot } from "hast";
import { toHtml } from "hast-util-to-html";
import { HastDom } from "./hast-dom";
import { fromSelector } from "hast-util-from-selector";
import { toText } from "hast-util-to-text";
import { select } from "hast-util-select";

/**
 * Returns a text-only description of the Hast Element.
 */
function getNodeDescription(elm: HastElement, hastDom: HastDom): string {
    if (elm.tagName === "p") {
        return "Paragraph";
    }
    if (elm.tagName.startsWith("h")) {
        return toText(elm);
    }
    if (elm.tagName === "section" || elm.tagName === "article") {
        const header = select(".heading", elm);
        if (header) {
            return toText(header);
        }
    }
    return "";
}

/**
 * `unifiedjs` plugin that injects Permalink anchors where needed.
 * This plugin must be called in conjunction with `rehypeParse`
 */
export const rehypeInsertPermalinks: Plugin<void[], HastRoot, HastRoot> =
    function () {
        return (ast, file) => {
            file.data.hastDom =
                file.data.hastDom || new HastDom(ast, file.data.existingIds);
            const hastDom = file.data.hastDom;

            // Full list of elements that get permalinks.
            for (const elm of hastDom.querySelectorAll(
                [
                    "section:not(.introduction)[id]",
                    "section > .para[id]",
                    "section article[id]",
                    "section > figure.table-like[id]",
                    //"section > figure.figure-like > figcaption[id]",
                    "section .exercisegroup article[id]",
                    "section .exercisegroup[id]",
                    "section article.exercise[id]",
                    "section article.paragraphs > .para[id]",
                    "section article.paragraphs > figure.table-like[id]",
                    "section article.paragraphs > figure.figure-like[id]",
                ].join(", ")
            )) {
                const id = hastDom.getAttribute(elm, "id") || "";
                if (!id) {
                    throw new Error(
                        `Permalink element has no id: ${toHtml(elm)}`
                    );
                }
                const permalink = fromSelector(
                    `a[class="permalink"][href="#${id}"]`
                );
                // In the appropriate font, this is a "link" icon
                permalink.children.push({ type: "text", value: "🔗" });
                Object.assign(permalink.properties || {}, {
                    title: getNodeDescription(elm, hastDom),
                });

                // For section/article we actually want the permalink to be inside
                // the item's .header instead of a direct child
                if (elm.tagName === "section" || elm.tagName === "article") {
                    const header = select(".heading", elm);
                    if (
                        header &&
                        // We cannot place an anchor inside another anchor, so make sure we don't
                        !hastDom
                            .allParentsOf(header)
                            .some(
                                (elm) =>
                                    elm.type === "element" &&
                                    elm.tagName === "a"
                            )
                    ) {
                        header.children.unshift(permalink);
                        continue;
                    }
                }

                // Prepend the permalink. React will take care of placing/etc.
                elm.children.unshift(permalink);
            }
        };
    };
