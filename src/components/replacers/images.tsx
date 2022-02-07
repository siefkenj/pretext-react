import React from "react";
import { ReplacerFunc } from "../../utils/html-manipulation/hast-react";
import { ZoomableImage } from "../images/zoomable-image";

/**
 * Replace all internal links with `InternalAnchor` tags.
 */
export const replaceImages: ReplacerFunc = (node, processContent, hastDom) => {
    if (node.tagName !== "img") {
        return;
    }
    const className = hastDom.getAttribute(node, "className");
    const src = hastDom.getAttribute(node, "src");
    const alt = hastDom.getAttribute(node, "alt");
    return <ZoomableImage className={className} src={src} alt={alt} />;
};
