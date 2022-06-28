import { Root as HastRoot } from "hast";
import { fromDom } from "hast-util-from-dom";
import { Parser, Plugin } from "unified";

function strToFrag(html: string) {
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content;
}
/**
 * Use the native DOM parser to parse the dom into a `hast` AST. This
 * is orders of magnitude faster than using `rehype` (which uses the parser5
 * html parser).
 */
export const hastFromStringNative: Plugin<void[], string, HastRoot> =
    function hastFromStringNative() {
        const parser: Parser<HastRoot> = (str) => {
            const dom = strToFrag(str);
            return fromDom(dom);
        };

        Object.assign(this, { Parser: parser });
    };
