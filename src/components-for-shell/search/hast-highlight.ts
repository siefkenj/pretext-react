import type {
    Element as HastElement,
    Root as HastRoot,
    Text as HastText,
} from "hast";
import { toHtml } from "hast-util-to-html";
import { toText } from "hast-util-to-text";
import { unified } from "unified";
import { visit, SKIP } from "unist-util-visit";
import { hastFromStringNative } from "../../replacers/html-manipulation/hast-from-string-native";

export type Options = {
    /**
     * The class name to use for highlighted regions. This will be overridden
     * if `search` is an object whose values are class names.
     */
    highlightClassName?: string;
    /**
     * The tag name to use for highlighted regions. This will be overridden
     */
    tagName?: string;
    /**
     * A function that returns true if the contents of `node` should not be highlighted.
     * This can be used to skip highlighting of MathJax blocks, for example, since
     * inserting HTML tags into MathJax blocks will break them.
     */
    skipHighlight?: (node: HastElement) => boolean | undefined;
};

const htmlParser = unified().use(hastFromStringNative);
/**
 * Add `<span class="...">` tags around the strings given in `search`. If
 * `search` is an object, then the keys are the strings to highlight and the
 * values are the classes to use.
 */
export function hastHighlight(
    ast: HastElement | HastRoot | string,
    search: string | string[] | Record<string, string>,
    options?: Options
): HastRoot {
    const {
        highlightClassName = "highlight",
        tagName = "span",
        skipHighlight = () => false,
    } = options || {};
    if (typeof ast === "string") {
        ast = htmlParser.parse(ast) as HastRoot;
    }
    if (ast.type !== "root") {
        ast = { type: "root", children: [ast] };
    }
    if (typeof search === "string") {
        search = [search];
    }
    if (Array.isArray(search)) {
        search = Object.fromEntries(search.map((s) => [s, highlightClassName]));
    }

    // We may need to highlight across element boundaries. We first
    // get the raw text of the document and index each character with
    // which element it belongs to.
    const { text, characterOriginMap, parentMap } =
        toStringWithCharacterOriginMap(ast, skipHighlight);

    const matches = findMatches(text, Object.keys(search));
    for (const match of matches) {
        // See if we're in the same text element
        const startNode = characterOriginMap[match.start];
        const endNode = characterOriginMap[match.end - 1];
        // If we receive null values for `startNode` or `endNode`, it means that
        // the text in this region should not be wrapped in a span. We skip it.
        if (!startNode || !endNode) {
            continue;
        }

        const offsetInStartNode =
            match.start - characterOriginMap.indexOf(startNode);
        if (!(offsetInStartNode >= 0)) {
            throw new Error("Could not find the offset in the start node.");
        }
        const startParent = parentMap.get(startNode);
        const endParent = parentMap.get(endNode);
        if (!startParent || !endParent) {
            throw new Error(
                "Could not find parent of text node." + toHtml(ast)
            );
        }
        if (startNode === endNode) {
            // We are in the same text node, so we can just insert a span
            const parent = startParent;
            wrapRegionInSpan(
                parent,
                characterOriginMap,
                match,
                search[match.match],
                parentMap,
                tagName
            );

            continue;
        }
        if (startParent === endParent) {
            const parent = startParent;

            wrapRegionInSpan(
                parent,
                characterOriginMap,
                match,
                search[match.match],
                parentMap,
                tagName
            );

            continue;
        }
        // If we made it here, we are split across multiple levels of the AST,
        // and we may need to insert multiple spans.
        // We proceed by finding the largest regions that share a parent.
        for (
            let regionStart = match.start;
            regionStart < match.end;
            regionStart++
        ) {
            const parent = parentMap.get(characterOriginMap[regionStart]);
            if (!parent) {
                throw new Error("Could not find parent of text node.");
            }
            let regionEnd = regionStart;
            // Find the largest region that shares a parent.
            for (
                let seekPos = regionStart;
                seekPos < match.end &&
                hasAncestor(characterOriginMap[seekPos], parent, parentMap);
                seekPos++
            ) {
                // If we have the same parent, we can extend the region.
                if (parentMap.get(characterOriginMap[seekPos]) === parent) {
                    regionEnd = seekPos;
                }
            }

            // We have found a region that shares a parent. We can insert a span
            // around it.
            const regionMatch = {
                match: text.slice(regionStart, regionEnd + 1),
                start: regionStart,
                end: regionEnd + 1,
            };

            wrapRegionInSpan(
                parent,
                characterOriginMap,
                regionMatch,
                search[match.match],
                parentMap,
                tagName
            );
            regionStart = regionEnd;
        }
    }

    return ast;
}

/**
 * Convert a hast AST to a string and return a map detailing which
 * element each character of the string came from.
 */
function toStringWithCharacterOriginMap(
    ast: HastRoot,
    skipHighlight: NonNullable<Options["skipHighlight"]>
): {
    text: string;
    characterOriginMap: (HastText | null)[];
    parentMap: Map<HastElement | HastText | null, HastElement | HastRoot>;
} {
    const characterOriginMap: (HastText | null)[] = [];
    let text = "";
    let parentMap: Map<HastElement | HastText, HastElement | HastRoot> =
        new Map();

    visit(ast, (node) => {
        if (node.type === "text") {
            text += node.value;
            characterOriginMap.push(
                ...Array.from({ length: node.value.length }, (_) => node)
            );
        }
        if (node.type === "element" || node.type === "root") {
            for (const n of node.children) {
                if (n.type === "text" || n.type === "element") {
                    parentMap.set(n, node);
                }
            }
        }
        if (node.type === "element" && skipHighlight(node)) {
            // We add the text verbatim and set `characterOriginMap` to `null` to
            // indicate that we should skip this text.
            const newText = toText(node);
            text += newText;
            characterOriginMap.push(
                ...Array.from({ length: newText.length }, (_) => null)
            );

            return SKIP;
        }
    });

    return { text, characterOriginMap, parentMap };
}

// Export for testing.
export function escapeStringRegexp(str: string): string {
    // Escape characters with special meaning either inside or outside character
    // sets. Use a simple backslash escape when it’s always valid, and a \unnnn
    // escape when the simpler form would be disallowed by Unicode patterns’
    // stricter grammar.
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

/**
 * Find the location (in order) of all matches in `text` of strings appearing in `search`.
 */
export function findMatches(
    text: string,
    search: string[]
): { match: string; start: number; end: number }[] {
    const ret: { match: string; start: number; end: number }[] = [];
    // Construct a regex that matches any of the search strings.
    const regex = new RegExp(search.map(escapeStringRegexp).join("|"), "gi");
    let match: RegExpExecArray | null;
    while ((match = regex.exec(text))) {
        ret.push({
            match: match[0],
            start: match.index,
            end: match.index + match[0].length,
        });
    }
    return ret;
}

/**
 * Wraps `match` in a span. The entirety of `match` is assumed to be a child of `parent`.
 *
 * Returns the text node that follows the match (i.e., the text node that might contain further matches)
 */
function wrapRegionInSpan(
    parent: HastElement | HastRoot,
    characterOriginMap: (HastText | null)[],
    match: { match: string; start: number; end: number },
    className: string,
    parentMap: Map<
        HastElement | HastText | null,
        HastElement | HastRoot
    > = new Map(),
    tagName: string
) {
    const startNode = characterOriginMap[match.start];
    const endNode = characterOriginMap[match.end - 1];
    if (!startNode || !endNode) {
        return;
    }

    const offsetInStartNode =
        match.start - characterOriginMap.indexOf(startNode);
    if (!(offsetInStartNode >= 0)) {
        throw new Error("Could not find the offset in the start node.");
    }
    let afterNode: HastText;

    // If the full match is contained in a single text node, we behave differently.
    if (startNode === endNode) {
        const beforeText = startNode.value.slice(0, offsetInStartNode);
        const afterText = startNode.value.slice(
            offsetInStartNode + match.match.length
        );
        const beforeNode: HastText = {
            type: "text",
            value: beforeText,
        };
        afterNode = {
            type: "text",
            value: afterText,
        };
        const highlightedNode: HastElement = {
            type: "element",
            tagName,
            properties: { className },
            children: [{ type: "text", value: match.match }],
        };

        // Remove the original text node.
        const textNodePosition = parent.children.indexOf(startNode);
        if (textNodePosition === -1) {
            console.log(
                "startNode",
                startNode,
                "PARENT CHILDREN",
                ...parent.children
            );
            throw new Error("Could not find text node in parent.");
        }
        const nodesToInsert = [
            beforeNode.value !== "" ? beforeNode : [],
            highlightedNode,
            afterNode.value !== "" ? afterNode : [],
        ].flat();
        // Add the highlighted content. Empty text nodes can be omitted.
        parent.children.splice(textNodePosition, 1, ...nodesToInsert);
    } else {
        // If we have the same parent, we insert a span containing the boundary text and
        // everything between.
        const offsetInEndNode = match.end - characterOriginMap.indexOf(endNode);
        const beforeText = startNode.value.slice(0, offsetInStartNode);
        const beforeNode: HastText = {
            type: "text",
            value: beforeText,
        };
        const afterText = endNode.value.slice(offsetInEndNode);
        afterNode = {
            type: "text",
            value: afterText,
        };

        // Construct the new highlighted node's contents
        const highlightedStartText = startNode.value.slice(offsetInStartNode);
        const highlightedStartTextNode: HastText = {
            type: "text",
            value: highlightedStartText,
        };
        const highlightedEndText = endNode.value.slice(0, offsetInEndNode);
        const highlightedEndTextNode: HastText = {
            type: "text",
            value: highlightedEndText,
        };
        const highlightedMiddleNodes = parent.children.slice(
            parent.children.indexOf(startNode) + 1,
            parent.children.indexOf(endNode)
        );
        const highlightedNode: HastElement = {
            type: "element",
            tagName,
            properties: { className },
            children: [
                highlightedStartText !== "" ? highlightedStartTextNode : [],
                highlightedMiddleNodes as HastElement["children"],
                highlightedEndText !== "" ? highlightedEndTextNode : [],
            ].flat(),
        };
        const nodesToInsert = [
            beforeNode.value !== "" ? beforeNode : [],
            highlightedNode,
            afterNode.value !== "" ? afterNode : [],
        ].flat();
        // Add the highlighted content. Empty text nodes can be omitted.
        const startNodePos = parent.children.indexOf(startNode);
        const endNodePos = parent.children.indexOf(endNode);
        parent.children.splice(
            startNodePos,
            endNodePos - startNodePos + 1,
            ...nodesToInsert
        );
    }

    // We have manipulated the children in the tree, so we need to
    // update the characterOriginMap and parentMap.
    // Because our matches will never be overlapping, we can just update
    // things after the end of the match.
    for (let i = match.end; characterOriginMap[i] === startNode; i++) {
        characterOriginMap[i] = afterNode;
        parentMap.set(afterNode, parent);
    }
}

/**
 * Returns whether `elm` is a descendant of `parent`.
 */
function hasAncestor(
    elm: HastElement | HastText | null,
    parent: HastElement | HastRoot,
    parentMap: Map<HastElement | HastText | null, HastElement | HastRoot>
): boolean {
    while (elm !== parent) {
        elm = parentMap.get(elm) as HastElement;
        if (!elm) {
            return false;
        }
    }
    return true;
}
