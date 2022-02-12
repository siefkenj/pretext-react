import { select, selectAll } from "hast-util-select";
import { Element as HastElement, Root as HastRoot } from "hast";
import Slugger from "github-slugger";
import { html, find } from "property-information";
import { addAttribute } from "./hast-react";

type ParentMap = WeakMap<HastElement, HastElement | HastRoot>;

/**
 * Make a map from elements to their parent so we can do efficient lookups.
 * If an existing `parentMap` is passed, it will be added to.
 */
function makeParentMap(
    ast: HastElement | HastRoot,
    parentMap: ParentMap = new WeakMap()
) {
    function mapChildren(parent: HastElement | HastRoot) {
        for (const elm of parent.children) {
            if (elm.type === "element") {
                parentMap.set(elm, parent);
                mapChildren(elm);
            }
        }
    }
    mapChildren(ast);
    return parentMap;
}

export class HastDom {
    parentMap: ParentMap;
    ast: HastElement | HastRoot;
    slugger: Slugger;
    sluggerInitialized: boolean;

    constructor(ast: HastElement | HastRoot, existingIds?: Set<string>) {
        this.ast = ast;
        this.parentMap = makeParentMap(ast);
        this.slugger = new Slugger();
        this.sluggerInitialized = false;

        if (existingIds) {
            // Inserting existing IDs doesn't count as initializing, so we
            // don't set `sluggerInitialized=true`.
            existingIds.forEach((id) => this.slugger.slug(id));
        }
    }

    /**
     * Generate a globally-unique html id. `prefix` can be any string;
     * invalid characters are always turned into `"-"`.
     */
    uniqueSlug(prefix = "ident") {
        if (!this.sluggerInitialized) {
            this.sluggerInitialized = true;
            for (const elm of selectAll("[id]", this.ast)) {
                const id = elm.properties?.id;
                if (typeof id === "string") {
                    this.slugger.slug(id, true);
                }
            }
        }
        return this.slugger.slug(prefix);
    }

    /**
     * Wrapper around `hast-util-select` `select` function.
     */
    querySelector(selector: string) {
        return select(selector, this.ast);
    }
    /**
     * Wrapper around `hast-util-select` `selectAll` function.
     */
    querySelectorAll(selector: string) {
        return selectAll(selector, this.ast);
    }
    /**
     * Return the parent of `elm`.
     */
    parentOf(elm: HastElement) {
        return this.parentMap.get(elm);
    }
    /**
     * Returns an array of all parent nodes. The array starts
     * with the immediate parent and ends with the "highest up"
     * parent.
     */
    allParentsOf(elm: HastElement) {
        const ret: (HastElement | HastRoot)[] = [];
        let parent = this.parentOf(elm);
        while (parent) {
            ret.push(parent);
            if (parent.type !== "element") {
                break;
            }
            parent = this.parentOf(parent);
        }
        return ret;
    }
    /**
     * Inserts `elmToInsert` immediately after `target` in the HAST tree.
     */
    insertAfter(elmToInsert: HastElement, target: HastElement) {
        const parent = this.parentMap.get(target);
        if (!parent) {
            throw new Error("Cannot find parent of target element");
        }
        // Remove from current position (if any)
        const elmToInsertParent = this.parentMap.get(elmToInsert);
        if (elmToInsertParent) {
            elmToInsertParent.children = elmToInsertParent.children.filter(
                (elm) => elm !== elmToInsert
            );
        } else {
            // If this element doesn't exist in the parent map, it's children
            // won't either. We need to add them so they don't get lost.
            makeParentMap(elmToInsert, this.parentMap);
        }
        // Insert into the child list
        parent.children = parent.children.flatMap((elm) => {
            if (elm === target) {
                return [elm, elmToInsert];
            }
            return elm;
        });
        this.parentMap.set(elmToInsert, parent);
    }
    /**
     * Returns whether the element is currently inside a table.
     */
    insideTable(elm: HastElement) {
        return this.allParentsOf(elm).some(
            (x) => x.type === "element" && x.tagName === "table"
        );
    }
    /**
     * Get all the type="element" leaves of the element `elm`. `elm`
     * does not need to be inserted into the tree.
     */
    getElementLeaves(elm: HastElement) {
        let ret: HastElement[] = [];
        if (elm.children.length === 0) {
            return [elm];
        }
        for (const child of elm.children) {
            if (child.type !== "element") {
                continue;
            }
            ret = ret.concat(this.getElementLeaves(child));
        }
        return ret;
    }
    /**
     * Retrieve the value of the specified attribute as a string.
     * HAST has complex rules for whether a specific property is a string,
     * list, or object. This function simplifies attribute retrieval.
     */
    getAttribute<T extends "style" | string>(
        node: HastElement,
        attrName: T
    ): T extends "style" ? Record<string, string> : string | undefined {
        if (attrName === "style") {
            return ((node.properties as any) || { style: {} })["style"];
        }
        // HAST makes a distinction between "attributes" and "properties".
        // The HTML attributes (e.g., `data-for-xxx`) are mapped to camelCase
        // properties (e.g. `dataForXxx`). The `find` utility maps between these.
        const info = find(html, attrName);
        const attrs: Record<string, string> = {};
        const props = node.properties || {};
        addAttribute(
            attrs,
            info.property,
            props[info.property],
            { schema: html, key: 0, prefix: "" },
            node.tagName
        );
        // @ts-ignore
        return attrs[info.property] ?? props[info.property];
    }
}
