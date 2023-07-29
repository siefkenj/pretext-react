import { Plugin } from "unified";
import { Element as HastElement, Root as HastRoot } from "hast";
import { select } from "hast-util-select";
import { toHtml } from "hast-util-to-html";
import { HastDom } from "./hast-dom";
import { fromSelector } from "hast-util-from-selector";
import { VFile } from "vfile";

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
            if (!file.data.existingIds) {
                throw new Error(
                    "Missing `existingIds` attribute on `file.data`"
                );
            }
            const hastDom = new HastDom(
                ast,
                (file as any as VFile).data.existingIds
            );
            file.data.hastDom = hastDom;

            const knowlContainersMap: Map<
                HastElement | HastRoot | undefined,
                HastElement
            > = new Map();
            /**
             * Get the container element corresponding to the knowl trigger element `elm`.
             */
            function getKnowlContainer(elm: HastElement) {
                // For dynamically-loaded knowls, the interaction behavior is complicated
                // (e.g., the order the knowls are displayed may change based on user interaction).
                // So we create a master parent container that contains several peer children.
                // This container is reused.
                const parent = hastDom.parentOf(elm);
                let masterContainer = knowlContainersMap.get(parent);
                if (!masterContainer) {
                    masterContainer = fromSelector(`div.knowl-group-container`);
                    knowlContainersMap.set(parent, masterContainer);
                    positionKnowlContent(elm, masterContainer, hastDom);
                }
                return masterContainer;
            }

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
                        // We may have failed to find the knowl's content because
                        // the content is part of a nested knowl. In that case, the content
                        // may have been turned into a blob URL and removed from the tree.
                        // Since we don't control the traversal order, we may still run across the
                        // "knowl trigger". It is safe to do nothing and continue in this case.
                        continue;
                    }

                    // Preloaded knowl content and fetched knowl content are treated identically
                    // in terms of behavior, so we combine both of them. However, we need
                    // to create synthetic URLs for the data of the preloaded content.
                    const html = toHtml(knowlContent.children);
                    const blobUrl = URL.createObjectURL(
                        new Blob([html], { type: "text/html" })
                    );
                    hastDom.remove(knowlContent);

                    const id = elm.properties?.dataRefid || "";
                    elm.properties = Object.assign(elm.properties || {}, {
                        dataKnowlContainerId: id,
                    });

                    const container = fromSelector(`div`);
                    container.properties = Object.assign(
                        container.properties || {},
                        {
                            dataForKnowlUrl: blobUrl,
                            dataIsPreloadedKnowl: true,
                            id,
                        }
                    );
                    const masterContainer = getKnowlContainer(elm);
                    masterContainer.children.push(container);
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

                const container = fromSelector(`div`);
                container.properties = Object.assign(
                    container.properties || {},
                    {
                        dataForKnowlUrl: url,
                        id,
                    }
                );
                const masterContainer = getKnowlContainer(elm);
                masterContainer.children.push(container);
            }

            // Handle Math Knowls as a special case

            for (const elm of hastDom.querySelectorAll(
                "[data-contains-math-knowls]"
            )) {
                if (!elm.properties) {
                    throw new Error("Missing `properties` attribute");
                }
                const rawUrls =
                    "" + (elm.properties?.dataContainsMathKnowls || "");
                if (!rawUrls) {
                    console.warn(`Could not find data url for ${toHtml(elm)}`);
                }
                const urls = rawUrls.split(/\s/).filter((s) => s);
                const dataContainsMathKnowlIds: { id: string; url: string }[] =
                    (elm.properties.dataContainsMathKnowlIds = []);
                const masterContainer = getKnowlContainer(elm);
                for (const url of urls) {
                    const id = hastDom.uniqueSlug(`knowl-ref-${url}`);
                    dataContainsMathKnowlIds.push({ id, url });

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
            }
        };
    };
