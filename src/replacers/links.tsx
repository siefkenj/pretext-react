import React from "react";
import { ReplacerFunc } from "./html-manipulation/hast-react";
import { InternalAnchor, PermalinkAnchor } from "../components-for-page/links";

/**
 * Replace all internal links with `InternalAnchor` tags.
 */
export const replaceInternalLinks: ReplacerFunc = (
    node,
    processContent,
    { hastDom }
) => {
    if (node.tagName !== "a") {
        return;
    }
    const className = hastDom.getAttribute(node, "className");
    if (className?.includes("internal")) {
        const href = hastDom.getAttribute(node, "href");
        const title = hastDom.getAttribute(node, "title");

        return (
            <InternalAnchor
                href={href || ""}
                className={className}
                title={title}
            >
                {processContent(node.children)}
            </InternalAnchor>
        );
    }

    if (className?.includes("permalink")) {
        const href = hastDom.getAttribute(node, "href");
        const title = hastDom.getAttribute(node, "title");

        return (
            <PermalinkAnchor
                href={href || ""}
                className={className}
                title={title}
            >
                {processContent(node.children)}
            </PermalinkAnchor>
        );
    }
};
