import React from "react";
import { ReplacerFunc } from "./html-manipulation/hast-react";
import { ZoomableImage } from "../components-for-page/zoomable-image";

/**
 * Replace all internal links with `InternalAnchor` tags.
 */
export const replaceImages: ReplacerFunc = (
    node,
    processContent,
    { hastDom }
) => {
    if (node.tagName !== "img") {
        return;
    }

    // If an image is contained in an anchor, we don't replace it.
    const parents = hastDom.allParentsOf(node);
    if (parents.some((elm) => elm.type === "element" && elm.tagName === "a")) {
        return;
    }

    const className = hastDom.getAttribute(node, "className");
    const src = hastDom.getAttribute(node, "src");
    const alt = hastDom.getAttribute(node, "alt");
    return <ZoomableImage className={className} src={src} alt={alt} />;
};
