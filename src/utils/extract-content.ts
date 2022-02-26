const parser = new DOMParser();

/**
 * Extracts the content portion of a page. Useful if a page was loaded asynchronously.
 */
export function extractPageContent(page: string) {
    const ret = parser
        .parseFromString(page, "text/html")
        .querySelector(".ptx-content");
    if (ret == null) {
        throw new Error("Cannot extract the content block from page");
    }
    return ret;
}

/**
 * Extracts the content portion of a knowl. This returns the `<body>` element,
 * the innerHTML of which forms the content.
 */
export function extractKnowlContent(page: string) {
    const ret = parser
        .parseFromString(page, "text/html")
        .querySelector("body");
    if (ret == null) {
        throw new Error("Cannot extract the content block from page");
    }
    return ret;
}