import { ReplacerFunc } from "../../utils/html-manipulation/hast-react";
import { KnowlContainer } from "../knowl/knowl-container";
import { Knowl, PreloadedKnowl, PreloadedKnowlContent } from "../knowl/knowls";

/**
 * Replace HAST nodes that should trigger knowls with appropriate React elements.
 */
export const replaceKnowl: ReplacerFunc = (node, processContent, hastDom) => {
    if (!(node.tagName === "a" || node.tagName === "div")) {
        return;
    }

    const knowlLoc = hastDom.getAttribute(node, "data-knowl");
    const refId = hastDom.getAttribute(node, "data-refid");

    if (!knowlLoc && !refId) {
        return;
    }

    const className = hastDom.getAttribute(node, "className");
    const title = hastDom.getAttribute(node, "title");

    // Wrap the preloaded knowl content, if needed
    if (className?.includes("preloaded-knowl-content")) {
        const id = hastDom.getAttribute(node, "id");
        return (
            <PreloadedKnowlContent id={id || ""} className={className}>
                {processContent(node.children)}
            </PreloadedKnowlContent>
        );
    }

    // Everything past this point should be a `div`.
    if (!(node.tagName === "a")) {
        return;
    }

    if (refId) {
        return (
            <PreloadedKnowl refId={refId} className={className} title={title}>
                {processContent(node.children)}
            </PreloadedKnowl>
        );
    }
    const containerId = hastDom.getAttribute(node, "data-knowl-container-id");
    return (
        <Knowl
            url={knowlLoc || ""}
            containerId={containerId || ""}
            className={className}
            title={title}
        >
            {processContent(node.children)}
        </Knowl>
    );
};

/**
 * Replace HAST nodes that should trigger knowls with appropriate React elements.
 *
 * A knowl group container controls the visibility of several knowls associated with the
 * same block (e.g., the same paragraph). The display order of these knowls can depend on the
 * order of button presses, etc., so they are handled specially
 */
export const replaceKnowlGroupContainers: ReplacerFunc = (
    node,
    processContent,
    hastDom
) => {
    if (!(node.tagName === "div")) {
        return;
    }
    if (
        !hastDom
            .getAttribute(node, "className")
            ?.includes("knowl-group-container")
    ) {
        return;
    }

    const data: { id: string; forKnowlUrl: string }[] = [];

    // Direct children of a knowl-group-container have unique ids that we want to collect.
    for (const elm of node.children) {
        if (!(elm.type === "element")) {
            continue;
        }
        const id = hastDom.getAttribute(elm, "id") || "";
        const forKnowlUrl =
            hastDom.getAttribute(elm, "data-for-knowl-url") || "";
        data.push({ id, forKnowlUrl });
    }

    return <KnowlContainer knowlData={data} />;
};
