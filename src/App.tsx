import React from "react";
import "./App.css";
import { extractActiveTocItem, extractTocFromXml } from "./utils/extract-toc";
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
import { useSelector } from "react-redux";
import { Banner } from "./components/banner";
import { NavButtons } from "./components/nav-buttons";
import { TocVisibilityToggle } from "./components/toc/toggle";
import { tocIsVisibleSelector } from "./features/toc/tocSlice";
import { CachingSettingsSelect } from "./components/caching-setting-select";

function App() {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const [lastUrl, setLastUrl] = React.useState("");
    const currentUrl = normalizeUrlWithHash(location.pathname + location.hash);
    const currentPageContents = useAppSelector(currentPageContentSelector);
    const [tocExtracted, setTocExtracted] = React.useState(false);
    const scrollIntoView = useSelector(scrollIntoViewOnTransitionSelector);
    const [lastScrolledHash, setLastScrolledHash] = React.useState("");
    const tocVisible = useAppSelector(tocIsVisibleSelector);

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
                if (hash !== lastScrolledHash) {
                    const y =
                        elm.getBoundingClientRect().top +
                        window.pageYOffset -
                        50;

                    // Not sure which one of these is better. `window` might not always be the scrollable element,
                    // in which case, this might break...
                    // elm.scrollIntoView({ behavior: "smooth" });
                    window.scrollTo({ behavior: "smooth", top: y });
                    setLastScrolledHash(hash);
                }
            }
        })();
    }, [dispatch, currentUrl, lastUrl, scrollIntoView, lastScrolledHash]);

    React.useEffect(() => {
        (async () => {
            const resp = await fetch("doc-manifest.xml");
            const content = await resp.text();
            const toc = extractTocFromXml(content);
            await dispatch(navActions.setToc(toc));
            await dispatch(navActions.setCurrentPage(extractActiveTocItem()));
            setTocExtracted(true);
        })();
    }, [dispatch]);

    if (!tocExtracted) {
        return null;
    }

    return (
        <React.Fragment>
            <header id="masthead" className="smallbuttons">
                <div className="banner">
                    <Banner />
                </div>
                <div id="primary-navbar-sticky-wrapper" className="navbar">
                    <nav id="primary-navbar" className="navbar">
                        <div className="container">
                            <div className="navbar-top-buttons">
                                <TocVisibilityToggle />
                                <CachingSettingsSelect />
                                <div className="tree-nav toolbar toolbar-divisor-3">
                                    <span className="threebuttons">
                                        <NavButtons />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="page">
                <div
                    id="sidebar-left"
                    className={tocVisible ? "" : "hidden-content"}
                >
                    <nav id="toc">
                        <Toc />
                    </nav>
                </div>
                <main className="main">
                    <div id="content" className="pretext-content">
                        <ContentPage content={currentPageContents} />
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
}

export default App;
