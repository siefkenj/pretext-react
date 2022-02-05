import { whitespace } from "hast-util-whitespace";
import React from "react";
import {
    Root as HastRoot,
    Element as HastElement,
    Text as HastText,
    Comment as HastComment,
    DocType as HastDocType,
    ElementContent as HastElementContent,
} from "hast";
import { CompilerFunction, Plugin } from "unified";
// No types for hast-util-table-cell-style, so we tell TS to ignore.
// @ts-ignore
import { HastDom } from "./hast-dom";
import { html, find, hastToReact, Schema } from "property-information";
import { stringify as spaces } from "space-separated-tokens";
import { stringify as commas } from "comma-separated-tokens";
import style from "style-to-object";
import { Properties } from "property-information/lib/util/schema";
import { VFile } from "vfile";

const toReact = hastToReact as Record<string, string>;
type Context = { schema: Schema; prefix: string | null; key: number };

/**
 * Function that can be called to process remaining HAST AST nodes
 * when converting an AST to React.
 */
export type ProcessContentFunc = (
    nodes:
        | HastElement
        | HastElementContent[]
        | HastElement[]
        | HastElementContent
) => React.ReactNode;

/**
 * Function that can be called on a `HastElement` to (optionally)
 * replace it with a React node.
 */
export type ReplacerFunc = (
    node: HastElement,
    processContent: ProcessContentFunc,
    hastDom: HastDom
) => React.ReactElement | undefined | void;

const tableElements = new Set([
    "table",
    "thead",
    "tbody",
    "tfoot",
    "tr",
    "th",
    "td",
]);

/**
 * A version of `rehype-react` that allows an `html-react-parser`-style interface.
 *
 * `replacers` is a list of `ReplacerFunc` functions. A `ReplacerFunc` is called on each
 * element. If `ReplacerFunc` returns a react component, that component is used. If
 * `undefined` is returned, a the HTML node is converted naively into a react element
 * and the process continues to recurse.
 *
 */
export const hastReactTransformer: Plugin<
    [{ replacers?: ReplacerFunc[] }],
    HastRoot,
    React.ReactElement
> = function (options) {
    /**
     * Do the actual work of converting a node into a ReactElement.
     */
    function h(node: HastElement, key: number, file: VFile): [React.ReactNode] {
        // We first test every replacer function to see if it constructed an element.
        // If it did, we use that element and short-circuit any further computations.
        for (const replacer of options.replacers || []) {
            if (typeof replacer !== "function") {
                throw new Error("replacer must be a function");
            }
            const hastDom = file.data.hastDom;
            if (!(hastDom instanceof HastDom)) {
                throw new Error(
                    `Expected HastDom object but found "${hastDom}"`
                );
            }
            const result = replacer(
                node,
                (n) =>
                    Array.isArray(n)
                        ? n.flatMap((n, i) => process(n, i, file))
                        : process(n, 0, file),
                hastDom
            );
            if (typeof result !== "undefined") {
                // We need to make sure that we have a key, since we might be in the middle of
                // a list of children.
                return [React.cloneElement(result, { key: result.key || key })];
            }
        }

        // No replacer applied, so we want to turn this node into a regular react object.
        const tagName = node.tagName;
        const origProps = node.properties || {};
        const props: Properties = {};
        Object.entries(origProps).forEach(([propName, val]) => {
            addAttribute(
                props,
                propName,
                val,
                { schema: html, key: key || 0, prefix: "h-" },
                tagName
            );
        });
        // Make sure that every element has a unique key; Otherwise React will complain.
        (props as any).key = `h-${key}`;
        // Currently, a warning is triggered by react for *any* white space in
        // tables.
        // So we remove the pretty lines for now.
        // See: <https://github.com/facebook/react/pull/7081>.
        // See: <https://github.com/facebook/react/pull/7515>.
        // See: <https://github.com/remarkjs/remark-react/issues/64>.
        let children = node.children;
        if (children && tableElements.has(tagName)) {
            children = children.filter((child) => !whitespace(child));
        }
        // React complains if elements that aren't supposed to have children get passed children (e.g., <br />).
        // React counts even empty lists as children, so we need to special case this behavior.
        if (children.length === 0) {
            return [React.createElement(tagName, props)];
        }
        return [
            React.createElement(
                tagName,
                props,
                children.flatMap((n, i) => process(n, i, file))
            ),
        ];
    }

    function process(
        node: HastRoot | HastElement | HastText | HastComment | HastDocType,
        key: number = 0,
        file: VFile
    ): React.ReactNode[] {
        if (node.type === "comment" || node.type === "doctype") {
            return [];
        }
        if (node.type === "text") {
            return [node.value];
        }
        if (node.type === "root") {
            return [
                React.createElement(
                    React.Fragment,
                    { key },
                    node.children.flatMap((n, i) => process(n, i, file))
                ),
            ];
        }
        if (node.type === "element") {
            return h(node, key, file);
        }
        console.warn(`Cannot process node "${JSON.stringify(node)}"`);
        return [];
    }

    const compiler: CompilerFunction<HastRoot, React.ReactNode> =
        function compiler(node, file) {
            return process(node, 0, file);
        };

    Object.assign(this, { Compiler: compiler });
};

/**
 * Adds `[prop]: value` to `attributes` with appropriate name mangling. For example,
 * attributes in camel case are converted to kebab-case and style attributes/className lists are
 * converted to strings appropriately.
 *
 * Modified from https://github.com/syntax-tree/hast-to-hyperscript
 * MIT License
 */
export function addAttribute(
    attributes: Record<string, unknown>,
    prop: string,
    value: unknown,
    ctx: Context,
    name: string
) {
    const info = find(ctx.schema, prop);

    // Ignore nullish and `NaN` values.
    // Ignore `false` and falsey known booleans for hyperlike DSLs.
    if (
        value === undefined ||
        value === null ||
        (typeof value === "number" && Number.isNaN(value))
    ) {
        return;
    }

    if (Array.isArray(value)) {
        // Accept `array`.
        // Most props are space-separated.
        value = info.commaSeparated ? commas(value) : spaces(value);
    }

    // accept `style` as object.
    if (info.property === "style" && typeof value === "string") {
        value = parseStyle(value, name);
    }

    if (info.space) {
        attributes[toReact[info.property] || info.property] = value;
    } else {
        attributes[info.attribute] = value;
    }
}

/**
 * `parseStyle` function from https://github.com/syntax-tree/hast-to-hyperscript/
 * MIT License.
 */
function parseStyle(value: string, tagName: string): Record<string, string> {
    const result: Record<string, string> = {};

    try {
        style(value, (name, value) => {
            if (name.slice(0, 4) === "-ms-") name = "ms-" + name.slice(4);

            result[
                name.replace(
                    /-([a-z])/g,
                    /**
                     * @param {string} _
                     * @param {string} $1
                     * @returns {string}
                     */ (_, $1) => $1.toUpperCase()
                )
            ] = value;
        });
    } catch (e) {
        const error = e as Error;
        error.message =
            tagName + "[style]" + error.message.slice("undefined".length);
        throw error;
    }

    return result;
}
