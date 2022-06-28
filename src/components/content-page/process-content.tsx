import React from "react";
import { unified } from "unified";
import { initInfo } from "../../page-init";
import { hastFromStringNative } from "../../utils/html-manipulation/hast-from-string-native";
import { hastReactTransformer } from "../../utils/html-manipulation/hast-react";
import { rehypeInsertKnowlExpandStubs } from "../../utils/html-manipulation/place-knowls";
import { rehypeInsertPermalinks } from "../../utils/html-manipulation/place-permalinks";
import { MathJaxOneTimeRenderer } from "../mathjax";
import { replaceAsides } from "../replacers/asides";
import { replaceImages } from "../replacers/images";
import { replaceKnowl, replaceKnowlGroupContainers } from "../replacers/knowls";
import { replaceInternalLinks } from "../replacers/links";
import { replaceMathKnowl } from "../replacers/math";
import { replaceRunestone } from "../replacers/runestone";
import { replaceSageKnowl } from "../replacers/sage-knowls";

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
) {
    const file = processHtmlContentViaUnified.processSync({
        value: content,
        data: {
            existingIds,
            currentPageId,
            latexPreamble: initInfo.latexPreamble,
        },
    });

    return {
        component: (
            <MathJaxOneTimeRenderer>{file.result}</MathJaxOneTimeRenderer>
        ),
        data: file.data,
    };
}
