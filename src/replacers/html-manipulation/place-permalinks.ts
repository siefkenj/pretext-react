import { Plugin } from "unified";
import { Element as HastElement, Root as HastRoot } from "hast";
import { toHtml } from "hast-util-to-html";
import { HastDom } from "./hast-dom";
import { fromSelector } from "hast-util-from-selector";
import { toText } from "hast-util-to-text";
import { select } from "hast-util-select";
import { VFile } from "vfile";

/**
 * Returns a text-only description of the Hast Element.
 *
 * TODO
 * - Special cases like Exercise, Assemblage, Bibliographic Entry, etc. need to respect:
 *     localization
 *     renames in docinfo from pretext source
 * - What about multiple numbered figures/tables/etc in a sidebyside?
 */
function getNodeDescription(elm: HastElement, hastDom: HastDom): string {
    const classes = hastDom.getAttribute(elm, "className")?.split(" ");

    // Most elements that are assigned permalinks have their type, codenumber,
    // and title in an h* element with class "heading"
    const header = select(".heading", elm);
    if (header) {
        // Drop the trailing period if present
        let descr = toText(header).replace(/\.+$/, "");
        // Avoid doing something like "Exercises 2.1 Exercises"
        const type = select(".type", header);
        const title = select(".title", header);
        if (type && title) {
            let typeText = toText(type);
            if (typeText === toText(title)) {
                const regex = new RegExp(` ${typeText}$`);
                descr = descr.replace(regex, "");
            }
        }
        // Some permalink targets don't have a type embedded in their heading element
        if (!type) {
            let prefix = "";
            if (classes?.includes("exercise")) {
                prefix = "Exercise";
            } else if (classes?.includes("exercisegroup")) {
                prefix = "Exercise Group:";
            } else if (classes?.includes("task")) {
                prefix = "Task";
            }
            return `${prefix} ${descr}`;
        }
        return descr;
    }

    /**
     * Special case: figures/tables/lists/etc have their
     * type, codenumber, and title in a figcaption element
     */
    const caption = select("figure > figcaption", elm);
    if (caption) {
        /**
         * NOTE: this uses the entire caption as the permalink description,
         * which can be quite long --- do we actually want that?
         */
        return toText(caption);
    }

    /**
     * The rest of these special cases are for permalink targets that don't
     * embedded heading info.
     * NOTE: Is it really possible to have an exercisegroup without a title?
     * Maybe all exercisegroup permalinks are already handled by the code above
     */

    if (classes?.includes("assemblage")) {
        return "Assemblage";
    }

    if (classes?.includes("bib")) {
        let descr = "Bibliographic Entry";
        const bibItem = select(".bibitem", elm);
        if (bibItem) {
            let bibnum = toText(bibItem);
            return `${descr} ${bibnum}`;
        }
        return descr;
    }

    if (elm.tagName === "div") {
        if (classes?.includes("para")) {
            return "Paragraph";
        }
        if (classes?.includes("exercisegroup")) {
            return "Exercise Group";
        }
    }

    if (elm.tagName.startsWith("h")) {
        return toText(elm);
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
                file.data.hastDom ||
                new HastDom(ast, (file as any as VFile).data.existingIds);
            const hastDom = (file as any as VFile).data.hastDom!;

            // Full list of elements that get permalinks.
            for (const elm of hastDom.querySelectorAll(
                [
                    "section:not(.introduction)[id]",
                    "section > .para[id]",
                    "section article[id]",
                    "section > figure.table-like[id]",
                    "section > figure.figure-like[id]",
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
