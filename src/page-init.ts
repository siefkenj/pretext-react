export interface InitInfo {
    bannerContent: string | null;
    currentPageContent: string | null;
}

export const initInfo: InitInfo = {
    bannerContent: null,
    currentPageContent: null,
};

function extractBannerContent() {
    let elm = document.querySelector(".ptx-banner");
    if (!elm) {
        throw new Error("Cannot find banner content");
    }
    // Strip away un-needed container divs.
    // XXX This code should be removed when the new HTML structure is finalized 2022-02-15
    const innerElm = elm.querySelector(".container")
    if (innerElm) {
        elm = innerElm;
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
}
