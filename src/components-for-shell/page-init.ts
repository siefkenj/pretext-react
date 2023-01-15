export interface InitInfo {
    bannerContent: string | null;
    currentPageContent: string | null;
    latexPreamble: string | null;
}

export const initInfo: InitInfo = {
    bannerContent: null,
    currentPageContent: null,
    latexPreamble: null,
};

function extractBannerContent() {
    let elm = document.querySelector(".ptx-banner");
    if (!elm) {
        throw new Error("Cannot find banner content");
    }
    // Strip away un-needed container divs.
    // XXX This code should be removed when the new HTML structure is finalized 2022-02-15
    const innerElm = elm.querySelector(".container");
    if (innerElm) {
        elm = innerElm;
    }
    // XXX We strip away the "placeholder" for search results, since we will be building that ourself.
    // This should be removed when React is made the default frontend
    const placeholder = elm.querySelector("#searchresultsplaceholder");
    if (placeholder) {
        placeholder.parentElement?.removeChild(placeholder);
    }
    return elm.innerHTML;
}
function extractCurrentPageContent() {
    const elm = document.querySelector(".ptx-content");
    if (!elm) {
        throw new Error("Cannot find current page content");
    }
    return elm.innerHTML;
}

function extractLatexPreamble() {
    const elm = document.querySelector("#latex-macros");
    if (!elm) {
        throw new Error("Cannot find latex macros");
    }
    // NOTE: Runestone's Parsons problems determine their blocks by splitting
    // the content at newlines. If math with a preamble is inserted and that preamble has
    // newlines, this breaks the algorithm. Since blank lines (e.g. `\n\n`) should not be allowed
    // in math anyways, it should be safe to replace all newlines with spaces.
    return (elm.textContent || "").replace(/\n/g, " ");
}

/**
 * Extract needed information from the current page that may be lost
 * after the page is rendered (because elements may be replaced). This function is safe
 * to call multiple times. Info will only be extracted once.
 */
export function extractInitInfo() {
    if (initInfo.bannerContent === null) {
        initInfo.bannerContent = extractBannerContent();
    }
    if (initInfo.currentPageContent === null) {
        initInfo.currentPageContent = extractCurrentPageContent();
    }
    if (initInfo.latexPreamble === null) {
        initInfo.latexPreamble = extractLatexPreamble();
    }
}
