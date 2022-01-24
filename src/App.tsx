import React from "react";
import "./App.css";
import { extractActiveTocItem, extractToc } from "./utils/extract-toc";
import { Toc } from "./components/toc";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
    currentPageContentSelector,
    navActions,
    scrollIntoViewOnTransitionSelector,
} from "./features/nav/navSlice";
import { useLocation } from "react-router";
import { normalizeUrlWithHash } from "./utils/normalize";
import { ContentPage } from "./components/content-page";
import { ReplacingPortal } from "./components/replacing-portal";
import { useSelector } from "react-redux";

function App() {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const [lastUrl, setLastUrl] = React.useState("");
    const currentUrl = normalizeUrlWithHash(location.pathname + location.hash);
    const currentPageContents = useAppSelector(currentPageContentSelector);
    const [tocExtracted, setTocExtracted] = React.useState(false);
    const tocContainer = document.querySelector("#toc");
    const scrollIntoView = useSelector(scrollIntoViewOnTransitionSelector);

    React.useEffect(() => {
        (async () => {
            // This effect is called when the URL changes, but also when `scrollIntoView` changes.
            // Sometimes, `scrollIntoView` will change even if the url hasn't. In these cases, we don't
            // want to do a re-render.
            if (lastUrl !== currentUrl) {
                setLastUrl(currentUrl);
                // By dispatching a page set every time the URL changes, we are able to keep in sync with
                // the browser's forward/back button without needing a page reload
                await dispatch(navActions.setCurrentPageByUrl(currentUrl));
            }
            if (scrollIntoView) {
                // The `.hash` on a URL always starts with `#`. We want to trim that off.
                const hash = new URL(
                    currentUrl,
                    window.location.href
                ).hash.slice(1);
                const elm =
                    (hash ? document.getElementById(hash) : null) ||
                    document.getElementById("content") ||
                    document.body;
                if (elm.getBoundingClientRect().y < 0) {
                    elm.scrollIntoView(true);
                }
            }
        })();
    }, [dispatch, currentUrl, lastUrl, scrollIntoView]);

    React.useEffect(() => {
        dispatch(navActions.setToc(extractToc()));
        dispatch(navActions.setCurrentPage(extractActiveTocItem()));
        setTocExtracted(true);
    }, [dispatch]);

    if (!tocExtracted || !tocContainer) {
        return null;
    }

    return (
        <div className="App">
            <ReplacingPortal target={tocContainer}>
                <Toc />
            </ReplacingPortal>
            <ContentPage content={currentPageContents} />
        </div>
    );
}

export default App;
