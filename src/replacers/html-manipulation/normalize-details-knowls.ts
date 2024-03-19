import { Plugin } from "unified";
import { Element as HastElement, Root as HastRoot } from "hast";
import { select } from "hast-util-select";
import { toHtml } from "hast-util-to-html";
import { HastDom } from "./hast-dom";
import { fromSelector } from "hast-util-from-selector";
import { VFile } from "vfile";
import classNames from "classnames";

/**
 * Pretext changed the way many knowls are provided.
 *
 * In the old format, a knowl would look like
 * ```html
 * <a href="" data-knowl="" class="fn-knowl" data-refid="some-id" id="some-other-id">Opener</a>
 * <div class="hidden-content" id="some-id">Content</div>
 * ```
 *
 * Now, knowls are provided using html `<details>` elements, like
 * ```html
 * <details class="ptx-footnote" id="section-introduction-2-4">
 *   <summary class="ptx-footnote__number" title="Footnote 1.1">Opener</summary>
 *   <div class="ptx-footnote__contents" id="section-introduction-2-4">
 *     Content
 *   </div>
 * </details>
 * ```
 *
 * This plugin normalizes the new knowl format to the old format.
 */
export const rehypeNormalizeDetailsKnowls: Plugin<void[], HastRoot, HastRoot> =
    function () {
        return (ast, file) => {
            if (!file.data.existingIds) {
                throw new Error(
                    "Missing `existingIds` attribute on `file.data`"
                );
            }
            const hastDom = new HastDom(
                ast,
                (file as any as VFile).data.existingIds
            );

            // If the knowl has a refid, find it's hidden content and move it to the correct place.
            for (const elm of hastDom.querySelectorAll("details")) {
                let id = elm.properties?.id;
                if (!id) {
                    id = hastDom.uniqueSlug("anonymous-knowl");
                }

                let elmClassNames = elm.properties?.className;
                if (!Array.isArray(elmClassNames)) {
                    elmClassNames =
                        typeof elmClassNames === "string"
                            ? elmClassNames.split(/\s+/)
                            : [];
                }

                const summary: HastElement = select("summary", elm) || {
                    type: "element",
                    tagName: "summary",
                    properties: {},
                    children: [],
                };
                const openerContent = summary.children;
                const contentDiv: HastElement = select("div", elm) || {
                    type: "element",
                    tagName: "div",
                    properties: {},
                    children: [],
                };

                const opener = fromSelector("a");
                opener.properties = Object.assign(opener.properties || {}, {
                    href: "",
                    dataKnowl: "",
                    dataRefid: id,
                    id: id + "-opener",
                    className: classNames("id-ref", "original", {
                        "fn-knowl": elmClassNames.includes("ptx-footnote"),
                        "solution-knowl": elmClassNames.includes("solution-like")
                    }),
                });
                opener.children = openerContent;

                const content = fromSelector("div");
                content.properties = Object.assign(content.properties || {}, {
                    className: "hidden-content",
                    id,
                });
                content.children = contentDiv.children;

                // Replace the `<details>` element with the opener and content
                hastDom.insertAfter(content, elm);
                hastDom.insertAfter(opener, elm);
                hastDom.remove(elm);
            }

            return hastDom.ast as HastRoot;
        };
    };
