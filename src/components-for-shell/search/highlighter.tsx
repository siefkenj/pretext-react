import React from "react";
import { unified } from "unified";
import { toHtml } from "hast-util-to-html";
import { hastFromStringNative } from "../../replacers/html-manipulation/hast-from-string-native";
import { htmlToComponent } from "../../replacers/process-content";
import { hastHighlight } from "./hast-highlight";

export interface HighlighterProps {
    highlightClassName?: string;
    search: string[];
    htmlString: string;
}

const htmlParser = unified().use(hastFromStringNative);

/**
 * Highlight the strings appearing in the `search` array in the given `htmlString`.
 * The process works by first parsing the `htmlString` and then inserting valid HTML
 * markup around the search terms. The resulting HTML is then converted to a React.
 */
export const Highlighter = ({
    htmlString,
    highlightClassName = "rbt-highlight-text",
    search,
}: HighlighterProps) => {
    if (!search || !htmlString) {
        return <>{htmlString}</>;
    }

    const parsedHtml = htmlParser.parse(htmlString);

    // Surround the search terms with <mark> tags
    hastHighlight(parsedHtml, search, {
        highlightClassName,
        tagName: "mark",
        skipHighlight: (node) =>
            Array.isArray(node.properties?.className) &&
            node.properties?.className.includes("process-math"),
    });

    const processedHtml = toHtml(parsedHtml);
    const ret = htmlToComponent(processedHtml);

    return <>{ret.component}</>;
};
