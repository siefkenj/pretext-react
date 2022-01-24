export interface TocEntryType {
    title?: string | null;
    codeNumber?: string | null;
    href?: string | null;
    id?: string | null;
    children?: TocEntryType[];
    level?: TocEntryLevel;
}

type TocEntryLevel = "part" | "section" | "subsection";

function getLevel(node: Element, defaultLevel: TocEntryLevel): TocEntryLevel {
    return node.classList.contains("part") ? "part" : defaultLevel;
}

/**
 * Extract the table of contents directly from the HTML of the page.
 *
 * @export
 * @returns {TocEntryType[]}
 */
export function extractToc(): TocEntryType[] {
    const root = document.querySelector("#toc");
    const nodes = root?.querySelectorAll(":scope > ul > li");
    return Array.from(nodes || []).map((node) => {
        const subList = node.querySelector(":scope > ul");
        let subsections: TocEntryType[] | null = null;
        if (subList) {
            subsections = Array.from(
                subList.querySelectorAll(":scope > li") || []
            ).map((node) => {
                return {
                    title:
                        node.querySelector(".title")?.textContent ||
                        node.querySelector("a")?.textContent,
                    codeNumber: node.querySelector(".codenumber")?.textContent,
                    href: node.querySelector("a")?.getAttribute("href"),
                    id: node.querySelector("a")?.getAttribute("data-scroll"),
                    level: getLevel(node, "subsection"),
                };
            });
        }
        const base = {
            title: node.querySelector(".title")?.textContent,
            codeNumber: node.querySelector(".codenumber")?.textContent,
            href: node.querySelector("a")?.getAttribute("href"),
            id: node.querySelector("a")?.getAttribute("data-scroll"),
            level: getLevel(node, "section"),
        };
        return subsections ? { ...base, children: subsections } : base;
    });
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
