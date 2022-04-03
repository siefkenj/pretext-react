import { createLoggingAsyncThunk } from "../../app/hooks";
import { RootState } from "../../app/store";
import {
    historySelector,
    pageLoadingStatusSelector,
    queueUntilPageRendered,
    queueUntilPageRenderedCancel,
} from "./navSlice";

let lastScrolledTo = "";

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
};
