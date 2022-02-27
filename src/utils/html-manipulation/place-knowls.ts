import { Plugin } from "unified";
import { Element as HastElement, Root as HastRoot } from "hast";
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
                `tr.knowl-container-top td.knowl-td[colspan=${numCols}]`
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

/**
 * `unifiedjs` plugin that inputs a `hast` AST and inserts/moves the knowl
 * content areas where needed. This plugin must be called in conjunction with `rehypeParse`
 *
 * @returns
 */
export const rehypeInsertKnowlExpandStubs: Plugin<void[], HastRoot, HastRoot> =
    function () {
        return (ast, file) => {
            const hastDom = new HastDom(ast, file.data.existingIds);
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
                    const knowlContentClassName =
                        knowlContent.properties?.className;
                    if (!Array.isArray(knowlContentClassName)) {
                        throw new Error("Expected className to be a list");
                    }
                    // We handle hiding/showing in react so we remove the hidden-content class
                    const hiddenContentIndex =
                        knowlContentClassName.indexOf("hidden-content");
                    if (hiddenContentIndex >= 0) {
                        knowlContentClassName.splice(hiddenContentIndex, 1);
                    }
                    knowlContentClassName.push("knowl");
                    // This class is what the rest of the react code looks for to wrap
                    // the content in an appropriate react element.
                    knowlContentClassName.push("preloaded-knowl-content");
                    Object.assign(knowlContent.properties, {
                        dataRefid: knowlContent.properties?.id,
                    });
                    positionKnowlContent(elm, knowlContent, hastDom);
                }
            }
            // If the knowl does not have a refid, then its content is fetched from a URL.
            // We pre-insert a container element for this knowl so that the react code
            // Doesn't have to do wild things to the DOM.

            const parentContainersMap: Map<
                HastElement | HastRoot | undefined,
                HastElement
            > = new Map();
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

                // For dynamically-loaded knowls, the interaction behavior is complicated
                // (e.g., the order the knowls are displayed may change based on user interaction).
                // So we create a master parent container that contains several peer children.
                // This container is reused.
                const parent = hastDom.parentOf(elm);
                let masterContainer = parentContainersMap.get(parent);
                if (!masterContainer) {
                    masterContainer = fromSelector(`div.knowl-group-container`);
                    parentContainersMap.set(parent, masterContainer);
                    positionKnowlContent(elm, masterContainer, hastDom);
                }
                const container = fromSelector(`div`);
                container.properties = Object.assign(
                    container.properties || {},
                    {
                        dataForKnowlUrl: url,
                        id,
                    }
                );
                masterContainer.children.push(container);
            }
        };
    };
