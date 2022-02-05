import { ReplacerFunc } from "../../utils/html-manipulation/hast-react";
import { Knowl, PreloadedKnowl } from "../knowl/knowls";
import { SageKnowl } from "../knowl/sage-knowl";

/**
 * Replace HAST nodes that should trigger knowls with appropriate React elements.
 */
export const replaceKnowl: ReplacerFunc = (node, processContent, hastDom) => {
    if (!(node.tagName === "a")) {
        return;
    }

    const knowlLoc = hastDom.getAttribute(node, "data-knowl");
    const refId = hastDom.getAttribute(node, "data-refid");

    if (!knowlLoc && !refId) {
        return;
    }

    const className = hastDom.getAttribute(node, "className");
    const title = hastDom.getAttribute(node, "title");

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
 */
export const replaceSageKnowl: ReplacerFunc = (
    node,
    processContent,
    hastDom
) => {
    if (!(node.tagName === "div")) {
        return;
    }
    const className = hastDom.getAttribute(node, "className");
    const id = hastDom.getAttribute(node, "id");
    if (className?.includes("sagecell-sage")) {
        return (
            <SageKnowl id={id} className={className}>
                {processContent(node.children)}
            </SageKnowl>
        );
    }
    if (className?.includes("sagecell-practice")) {
        return (
            <SageKnowl id={id} className={className}>
                {processContent(node.children)}
            </SageKnowl>
        );
    }
};
