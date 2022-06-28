import React from "react";
import { ReplacerFunc } from "./html-manipulation/hast-react";
import { Aside } from "../components-for-page/asides";

/**
 * Replace all `<aside.aside-like>` links with the appropriate React element(s).
 */
export const replaceAsides: ReplacerFunc = (
    node,
    processContent,
    { hastDom }
) => {
    if (node.tagName !== "aside") {
        return;
    }
    const className = hastDom.getAttribute(node, "className");
    if (className?.includes("aside-like")) {
        const id = hastDom.getAttribute(node, "id") || "";

        return (
            <Aside className={className} id={id}>
                {processContent(node.children)}
            </Aside>
        );
    }
};
