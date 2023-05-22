import React from "react";
import { ReplacerFunc } from "./html-manipulation/hast-react";
import { toText } from "hast-util-to-text";
import { toHtml } from "hast-util-to-html";
import { Listing } from "../components-for-page/listing";
/**
 * Replace all internal links with `InternalAnchor` tags.
 */
export const replaceListings: ReplacerFunc = (
    node,
    processContent,
    { hastDom }
) => {
    if (node.tagName !== "pre") {
        return;
    }
    const classes: string[] = (node.properties?.className as string[]) || [];
    if (!classes.includes("program")) {
        return;
    }

    // Extract the code and language. They should be in a <code> element that serves as
    // the immediate child.
    const codeElm = node.children[0];
    if (!codeElm || codeElm.type !== "element" || codeElm.tagName !== "code") {
        console.warn(
            'Found a class="program" element without a <code> element as an immediate child',
            node
        );
        return;
    }
    const languageClass = (
        (codeElm.properties?.className as string[]) || []
    ).find((n) => n.startsWith("language"));
    if (!languageClass) {
        console.warn(
            "Found a <code> element but could not determine it's languageClass",
            codeElm
        );
        return;
    }

    const textElm = codeElm.children.find((e) => e.type === "text");
    // We check again the type just so Typescript knows it's a TEXT node.
    if (!textElm || textElm.type !== "text") {
        return;
    }
    const code = textElm.value;

    return <Listing languageClass={languageClass} code={code} />;
};
