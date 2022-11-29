import { createLoggingAsyncThunk } from "../../hooks";
import { RootState } from "../../store";
import { awaitElement } from "./dom-utils";
import {
    queueUntilPageRendered,
    queueUntilPageRenderedCancel,
} from "./nav-slice";
import {
    currentPageIdSelector,
    currentPageTocInfoSelector,
    historySelector,
    pageLoadingStatusSelector,
} from "./selectors";

let lastScrolledTo = "";
let lastTocScrolledTo = "";

/**
 * Returns the space occupied at the top of the page by header elements + some padding.
 */
function getHeaderHeight() {
    const PADDING = 15;
    const header = document.getElementById("ptx-navbar");
    if (!header) {
        return 50;
    }
    const headerBounds = header.getBoundingClientRect();
    // If the header is not at the top of the screen, it is probably
    // glued to the bottom of the screen. If it's at the bottom, there is no
    // need to scroll past it.
    if (headerBounds.y > window.innerHeight / 2) {
        return PADDING;
    }
    return headerBounds.bottom + PADDING;
}

const previouslyQueued: (() => void)[] = [];
const previouslyQueuedForToc: (() => void)[] = [];

export const scrollThunks = {
    /**
     * Scrolls the viewport as needed. E.g., if the page
     * has changed, the viewport is scrolled to the focused element.
     * If the page is the same, the viewport is smooth-scrolled to the
     * desired element. This function may also do some "smart" scrolling in
     * cases where the back button was clicked.
     */
    scrollViewportIfNeeded: createLoggingAsyncThunk(
        "nav/scrollViewportIfNeededThunk",
        async (_: void, { dispatch, getState }) => {
            function doScroll() {
                const history = historySelector(getState() as RootState);

                // Debounce the scroll action if needed.
                if (
                    lastScrolledTo ===
                    history.current.page + history.current.hash
                ) {
                    return;
                }
                lastScrolledTo = history.current.page + history.current.hash;

                // We smooth scroll if we are switching between elements on the same page.
                const smoothScroll =
                    history.current.page === history.previous.page;

                // `hash` starts with "#", but we don't actually want that character included.
                const hash = history.current.hash.slice(1);

                const elm =
                    (hash ? document.getElementById(hash) : null) ||
                    document.querySelector(".ptx-content") ||
                    document.body;
                const y =
                    elm.getBoundingClientRect().top +
                    window.scrollY -
                    getHeaderHeight();

                // XXX If `window` is not scrollable element, this might break...
                window.scrollTo({
                    behavior: smoothScroll ? "smooth" : "auto",
                    top: y,
                });
            }
            const pageLoadingStatus = pageLoadingStatusSelector(
                getState() as RootState
            );

            // If we have made it here, we'd better un-queue any previous scroll requests
            for (const func of previouslyQueued) {
                queueUntilPageRenderedCancel(func);
            }
            previouslyQueued.length = 0;

            if (pageLoadingStatus !== "rendered") {
                previouslyQueued.push(doScroll);
                queueUntilPageRendered(doScroll);
            } else {
                doScroll();
            }
        }
    ),
    /**
     * Scrolls the TOC viewport as needed so the active TOC item is
     * always in view.
     */
    scrollTocIfNeeded: createLoggingAsyncThunk(
        "nav/scrollTocIfNeededThunk",
        async (_: void, { dispatch, getState }) => {
            async function doScroll() {
                const sidebarRoot = await awaitElement("#ptx-sidebar");
                if (!sidebarRoot) {
                    console.warn(
                        "Trying to scroll TOC, but cannot find `nav#ptx-sidebar`"
                    );
                    return;
                }
                const state = getState() as RootState;
                const history = historySelector(state);
                const origin = history.current.origin;

                if (origin === "toc") {
                    // If the page change happened because we clicked an entry in the
                    // TOC, then no scrolling should occur.
                    return;
                }

                const tocItemInfo = currentPageTocInfoSelector(state);
                if (!tocItemInfo || !tocItemInfo.id) {
                    console.warn(
                        "Could not find TOC item info for current page with id",
                        currentPageIdSelector(state)
                    );
                    return;
                }

                // Debounce the scroll action if needed.
                if (lastTocScrolledTo === tocItemInfo.id) {
                    return;
                }
                lastTocScrolledTo = tocItemInfo.id;

                // Find the TOC DOM node we want to scroll into view.
                const query = `a[href^="${tocItemInfo.href}"]`;
                const tocNode = sidebarRoot.querySelector(query);
                if (!tocNode) {
                    console.warn(
                        "Cannot scroll current TOC item into view because the corresponding DOM node cannot be found matching query",
                        query
                    );
                    return;
                }

                const behavior =
                    origin === "page" || origin === "nav" ? "smooth" : "auto";
                tocNode.scrollIntoView({ behavior, block: "nearest" });
            }
            const pageLoadingStatus = pageLoadingStatusSelector(
                getState() as RootState
            );

            // If we have made it here, we'd better un-queue any previous scroll requests
            for (const func of previouslyQueuedForToc) {
                queueUntilPageRenderedCancel(func);
            }
            previouslyQueuedForToc.length = 0;

            if (pageLoadingStatus !== "rendered") {
                previouslyQueuedForToc.push(doScroll);
                queueUntilPageRendered(doScroll);
            } else {
                doScroll();
            }
        }
    ),
};
