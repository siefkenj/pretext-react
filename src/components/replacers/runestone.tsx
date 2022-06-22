import React from "react";
import { ReplacerFunc } from "../../utils/html-manipulation/hast-react";
import { RunestoneRenderer } from "../runestone";

/**
 * Replace all internal links with `InternalAnchor` tags.
 */
export const replaceRunestone: ReplacerFunc = (
    node,
    processContent,
    { hastDom }
) => {
    const className = hastDom.getAttribute(node, "className");
    if (!(className?.includes("runestone"))){return}

    return <RunestoneRenderer>{processContent(node.children)}</RunestoneRenderer>
};
