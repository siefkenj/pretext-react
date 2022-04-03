import React from "react";
import { Plugin } from "unified";
import { Root as HastRoot } from "hast";
import { ReplacerFunc } from "../../utils/html-manipulation/hast-react";
import { MathKnowl } from "../knowl/math-knowl";
import { selectAll } from "hast-util-select";

/**
 * `unifiedjs` plugin that injects `data.latexPreamble` at the start of any `.process-math` elements.
 */
export const rehypeInsertMathPreambles: Plugin<void[], HastRoot, HastRoot> =
    function () {
        return (ast, file) => {
            const preamble = file.data.latexPreamble || "";
            if (!preamble) {
                return;
            }
            for (const node of selectAll(".process-math", ast)) {
                if (node.children.length > 1 || node.children.length === 0) {
                    continue;
                }
                const child = node.children[0];
                if (child.type !== "text") {
                    continue;
                }
                child.value = preamble + child.value;
            }
        };
    };

/**
 * Replace HAST nodes that should trigger knowls with appropriate React elements.
 */
export const replaceMathKnowl: ReplacerFunc = (
    node,
    processContent,
    { hastDom }
) => {
    if (!(node.tagName === "div")) {
        return;
    }

    const className = hastDom.getAttribute(node, "className");
    if (!className?.includes("displaymath")) {
        return;
    }
    return (
        <MathKnowl className={className} id={hastDom.getAttribute(node, "id")}>
            {processContent(node.children)}
        </MathKnowl>
    );
};
