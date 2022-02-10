export interface TocEntryType {
    title?: string | null;
    codeNumber?: string | null;
    href?: string | null;
    id?: string | null;
    children?: TocEntryType[];
    level?: TocEntryLevel;
    type?: string;
}

type TocEntryLevel = number;

const parser = new DOMParser();

/**
 * Extract the table of contents from `doc-manifest.xml`
 */
export function extractTocFromXml(raw: string): TocEntryType[] {
    const xml = parser.parseFromString(raw, "text/xml");
    const tocRoot = xml.querySelector("toc");
    if (!tocRoot) {
        console.warn(
            "Found no table of contents root. There was likely an error somewhere."
        );
        return [];
    }

    return Array.from(tocRoot.querySelectorAll(":scope > division")).map(
        (node) => processTocXml(node, 1)
    );
}

/**
 * Process a single `<division>` node from `doc-manifest.xml`.
 */
function processTocXml(root: Element, level: number): TocEntryType {
    const title = root.querySelector("title")?.innerHTML || "";
    const id = root.getAttribute("id");
    const number = root.getAttribute("number");
    const url = root.getAttribute("url");
    const type = root.getAttribute("type") || "";
    const children = Array.from(root.querySelectorAll(":scope > division")).map(
        (elm) => processTocXml(elm, level + 1)
    );

    return {
        title,
        codeNumber: number,
        href: url,
        id,
        children,
        type,
        level,
    };
}

/**
 * Extract the currently active TOC item from the html of the page.
 */
export function extractActiveTocItem(): string | null {
    const root = document.querySelector("#toc");
    const activeElement = root?.querySelector("li.active");
    const link = activeElement?.querySelector("a[data-scroll]");
    if (!link) {
        return null;
    }
    return link.getAttribute("data-scroll");
}

/**
 * Flatten a TOC in order (parent, followed by children).
 */
export function flattenToc(toc: TocEntryType | TocEntryType[]): TocEntryType[] {
    if (!Array.isArray(toc)) {
        toc = [toc];
    }
    const ret: TocEntryType[] = [];
    for (const entry of toc) {
        ret.push(entry);
        if (entry.children) {
            ret.push(...flattenToc(entry.children));
        }
    }
    return ret;
}

/**
 * Get all the parents of a TOC entry.
 *
 * @export
 * @param {(TocEntryType | TocEntryType[])} toc
 * @param {TocEntryType} entry
 * @returns {TocEntryType[]}
 */
export function getParentsInToc(
    toc: TocEntryType | TocEntryType[],
    entry: TocEntryType
): TocEntryType[] {
    const parentMap: Map<TocEntryType, TocEntryType> = new Map();

    if (!Array.isArray(toc)) {
        toc = [toc];
    }

    function walk(parent: TocEntryType) {
        if (!parent.children) {
            return;
        }
        for (const child of parent.children) {
            parentMap.set(child, parent);
            walk(child);
        }
    }
    toc.forEach(walk);
    const ret: TocEntryType[] = [];
    let curr = entry;
    let parent: TocEntryType | undefined;
    while ((parent = parentMap.get(curr))) {
        ret.push(parent);
        curr = parent;
    }
    return ret;
}

/**
 * Retrieve the TOC entry using the ID of the entry.
 */
export function findTocItemById(
    toc: TocEntryType | TocEntryType[],
    id: string
): TocEntryType | null {
    let ret: TocEntryType | null = null;
    if (!Array.isArray(toc)) {
        toc = [toc];
    }

    function walk(item: TocEntryType) {
        if (ret) {
            return;
        }
        if (item.id === id) {
            ret = item;
            return;
        }
        for (const child of item.children || []) {
            walk(child);
        }
    }
    toc.forEach(walk);

    return ret;
}
