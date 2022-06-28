import { toHtml } from "hast-util-to-html";
import React from "react";
import { ReplacerFunc } from "./html-manipulation/hast-react";
import { RunestoneRenderer } from "../components-for-page/runestone";

/**
 * Replace all internal links with `InternalAnchor` tags.
 */
export const replaceRunestone: ReplacerFunc = (
    node,
    processContent,
    { hastDom }
) => {
    const className = hastDom.getAttribute(node, "className");
    if (!className?.includes("ptx-runestone-container")) {
        return;
    }
    // .ptx-runestone-container is expected to contian exactly *one*
    // child which is what we should pass to RunestoneRenderer
    const runestoneElm = node.children.find((n) => n.type === "element");
    if (!runestoneElm || !(runestoneElm.type === "element")) {
        // FIXME: I am not sure how to type `ReplacerFunc` correct so that these functions can return strings
        return "!!!Runestone Element Not Found!!!" as unknown as React.ReactElement;
    }

    const runestoneClassName = hastDom.getAttribute(runestoneElm, "class");
    return (
        <RunestoneRenderer className={runestoneClassName}>
            {processContent(runestoneElm.children)}
        </RunestoneRenderer>
    );
};
