import React from "react";
import { ReplacerFunc } from "../../utils/html-manipulation/hast-react";
import { MathKnowl } from "../knowl/math-knowl";

/**
 * Replace HAST nodes that should trigger knowls with appropriate React elements.
 */
export const replaceMathKnowl: ReplacerFunc = (
    node,
    processContent,
    { hastDom }
) => {
    if (!(node.tagName === "div")) {
        return;
    }

    const className = hastDom.getAttribute(node, "className");
    if (!className?.includes("displaymath")) {
        return;
    }
    const containedKnowlIds = (hastDom.getAttribute(
        node,
        "data-contains-math-knowl-ids"
    ) || []) as { id: string; url: string }[];
    return (
        <MathKnowl
            className={className}
            id={hastDom.getAttribute(node, "id")}
            knowlIds={containedKnowlIds}
        >
            {processContent(node.children)}
        </MathKnowl>
    );
};
