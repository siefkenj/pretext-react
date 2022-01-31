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
    const title = root.querySelector("title")?.textContent || "";
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
