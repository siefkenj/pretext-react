import React from "react";
import { unified } from "unified";
import { hastFromStringNative } from "../../utils/html-manipulation/hast-from-string-native";
import { hastReactTransformer } from "../../utils/html-manipulation/hast-react";
import { rehypeInsertKnowlExpandStubs } from "../../utils/html-manipulation/place-knowls";
import { MathJaxOneTimeRenderer } from "../mathjax";
import { replaceImages } from "../replacers/images";
import { replaceKnowl, replaceSageKnowl } from "../replacers/knowls";
import { replaceInternalLinks } from "../replacers/links";

const processHtmlContentViaUnified = unified()
    .use(hastFromStringNative)
    .use(rehypeInsertKnowlExpandStubs)
    .use(hastReactTransformer, {
        replacers: [
            replaceInternalLinks,
            replaceKnowl,
            replaceSageKnowl,
            replaceImages,
        ],
    })
    .freeze();

/**
 * Process `content` and turn it into react components with the necessary replacements (e.g.,
 * internal links get replaced with `InternalAnchor`, etc.).
 *
 * @param {string} content - html string
 */
export function htmlToComponent(content: string, existingIds: string[] = []) {
    const file = processHtmlContentViaUnified.processSync({
        value: content,
        data: { existingIds },
    });

    return {
        component: (
            <MathJaxOneTimeRenderer>{file.result}</MathJaxOneTimeRenderer>
        ),
        data: file.data,
    };
}
