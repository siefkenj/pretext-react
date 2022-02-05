import { Plugin, unified } from "unified";
import { Element as HastElement, Root as HastRoot } from "hast";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import { select } from "hast-util-select";
import { toHtml } from "hast-util-to-html";
import { HastDom } from "./hast-dom";
import { fromSelector } from "hast-util-from-selector";

/**
 * Place the `knowlContentNode` in the correct position in hastDom based on
 * the position of `knowlContentNode`.
 */
function positionKnowlContent(
    knowlTriggerNode: HastElement,
    knowlContentNode: HastElement,
    hastDom: HastDom
) {
    const parent = hastDom.parentOf(knowlTriggerNode);
    if (parent?.type === "element") {
        // If the parent is an article, we insert the knowl content right
        // after the knowl button.
        if (parent.tagName === "article") {
            hastDom.insertAfter(knowlContentNode, knowlTriggerNode);
        }
        // Inserting a knowl into a table
        else if (hastDom.insideTable(knowlTriggerNode)) {
            const parents = hastDom.allParentsOf(knowlTriggerNode);
            const surroundingTr = parents.find(
                (elm) => elm.type === "element" && elm.tagName === "tr"
            );
            if (!surroundingTr || surroundingTr.type !== "element") {
                throw new Error(
                    "Knowl contained in a table, but could not find a surrounding <tr>"
                );
            }
            const numCols = surroundingTr.children.filter(
                (elm) => elm.type === "element" && elm.tagName === "td"
            ).length;
            // We need to create a table row that spans the width of the table so the content isn't squished.
            const surround = fromSelector(
                `tr.hidden-content.knowl-container-top td.knowl-td[colspan=${numCols}]`
            );
            const leaf = hastDom.getElementLeaves(surround)[0];
            if (!leaf) {
                throw new Error("Error when find leaf to insert into.");
            }
            // The content node goes inside our newly-created row.
            leaf.children.push(knowlContentNode);

            hastDom.insertAfter(surround, surroundingTr);
        }
        // In all other cases, we insert right after the knowl button's parent.
        else {
            hastDom.insertAfter(
                knowlContentNode,
                (hastDom.parentOf(knowlTriggerNode) as HastElement) ||
                    knowlTriggerNode
            );
        }
    }
}

export function insertKnowlExpandStubs(domStr: string) {
    const file = unified()
        .use(rehypeParse, { fragment: true })
        .use(() => (ast, file) => {
            const hastDom = new HastDom(ast);
            file.data.hastDom = hastDom;
            // If the knowl has a refid, find it's hidden content and move it to the correct place.
            for (const elm of hastDom.querySelectorAll(
                "[data-knowl][data-refid]"
            )) {
                const parent = hastDom.parentOf(elm);
                if (parent?.type === "element") {
                    const knowlContent = select(
                        `#${elm.properties?.dataRefid}`,
                        ast
                    );
                    if (!knowlContent) {
                        throw new Error(
                            `Couldn't find knowl content for element ${toHtml(
                                elm
                            )}`
                        );
                    }
                    positionKnowlContent(elm, knowlContent, hastDom);
                }
            }
            // If the knowl does not have a refid, then its content is fetched from a URL.
            // We pre-insert a container element for this knowl so that the react code
            // Doesn't have to do wild things to the DOM.
            for (const elm of hastDom.querySelectorAll(
                "[data-knowl]:not([data-refid])"
            )) {
                const url = "" + (elm.properties?.dataKnowl || "");
                if (!url) {
                    console.warn(`Could not find data url for ${toHtml(elm)}`);
                }
                const id = hastDom.uniqueSlug(`knowl-ref-${url}`);
                elm.properties = Object.assign(elm.properties || {}, {
                    dataKnowlContainerId: id,
                });
                const container = fromSelector(`div.hidden-content`);
                container.properties = Object.assign(
                    container.properties || {},
                    { dataForKnowlUrl: url, id }
                );
                positionKnowlContent(elm, container, hastDom);
            }
        })
        .use(rehypeStringify)
        .processSync(domStr);

    return String(file);
}

/**
 * `unifiedjs` plugin that inputs a `hast` AST and inserts/moves the knowl
 * content areas where needed. This plugin must be called in conjunction with `rehypeParse`
 *
 * @returns
 */
export const rehypeInsertKnowlExpandStubs: Plugin<void[], HastRoot, HastRoot> =
    function () {
        return (ast, file) => {
            const hastDom = new HastDom(ast);
            file.data.hastDom = hastDom;
            // If the knowl has a refid, find it's hidden content and move it to the correct place.
            for (const elm of hastDom.querySelectorAll(
                "[data-knowl][data-refid]"
            )) {
                const parent = hastDom.parentOf(elm);
                if (parent?.type === "element") {
                    const knowlContent = select(
                        `#${elm.properties?.dataRefid}`,
                        ast
                    );
                    if (!knowlContent) {
                        throw new Error(
                            `Couldn't find knowl content for element ${toHtml(
                                elm
                            )}`
                        );
                    }
                    positionKnowlContent(elm, knowlContent, hastDom);
                }
            }
            // If the knowl does not have a refid, then its content is fetched from a URL.
            // We pre-insert a container element for this knowl so that the react code
            // Doesn't have to do wild things to the DOM.
            for (const elm of hastDom.querySelectorAll(
                "[data-knowl]:not([data-refid])"
            )) {
                const url = "" + (elm.properties?.dataKnowl || "");
                if (!url) {
                    console.warn(`Could not find data url for ${toHtml(elm)}`);
                }
                const id = hastDom.uniqueSlug(`knowl-ref-${url}`);
                elm.properties = Object.assign(elm.properties || {}, {
                    dataKnowlContainerId: id,
                });
                const container = fromSelector(`div.hidden-content`);
                container.properties = Object.assign(
                    container.properties || {},
                    {
                        dataForKnowlUrl: url,
                        id,
                    }
                );
                positionKnowlContent(elm, container, hastDom);
            }
        };
    };
