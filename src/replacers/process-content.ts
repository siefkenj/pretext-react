import React from "react";
import { unified } from "unified";
import { initInfo } from "../components-for-shell/page-init";
import { hastFromStringNative } from "./html-manipulation/hast-from-string-native";
import { hastReactTransformer } from "./html-manipulation/hast-react";
import { rehypeInsertKnowlExpandStubs } from "./html-manipulation/place-knowls";
import { rehypeInsertPermalinks } from "./html-manipulation/place-permalinks";
import { MathJaxOneTimeRenderer } from "../components-for-page/mathjax";
import { replaceAsides } from "./asides";
import { replaceImages } from "./images";
import { replaceKnowl, replaceKnowlGroupContainers } from "./knowls";
import { replaceInternalLinks } from "./links";
import { replaceMathKnowl } from "./math";
import { replaceRunestone } from "./runestone";
import { replaceSageKnowl } from "./sage-knowls";
import { replaceListings } from "./listing";
import { VFile } from "vfile";

const processHtmlContentViaUnified = unified()
    .use(hastFromStringNative)
    .use(rehypeInsertKnowlExpandStubs)
    .use(rehypeInsertPermalinks)
    .use(hastReactTransformer, {
        replacers: [
            replaceInternalLinks,
            replaceKnowl,
            replaceSageKnowl,
            replaceMathKnowl,
            // Must come after `replaceKnowl`
            replaceKnowlGroupContainers,
            replaceImages,
            replaceAsides,
            replaceRunestone,
            replaceListings,
        ],
    })
    .freeze();

/**
 * Process `content` and turn it into react components with the necessary replacements (e.g.,
 * internal links get replaced with `InternalAnchor`, etc.).
 *
 * @param {string} content - html string
 */
export function htmlToComponent(
    content: string,
    existingIds: Set<string> = new Set(),
    currentPageId = ""
): {
    component: React.ReactElement;
    data: VFile["data"];
} {
    const file = processHtmlContentViaUnified.processSync({
        value: content,
        data: {
            existingIds,
            currentPageId,
            latexPreamble: initInfo.latexPreamble,
        },
    });

    return {
        component: React.createElement(
            MathJaxOneTimeRenderer,
            null,
            file.result
        ),
        data: file.data as any,
    };
}
