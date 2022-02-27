import React from "react";
import classNames from "classnames";
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


//import "./styles/header.css";
import "./styles/shell.css";
//import "./styles/toc.css";
import "./styles/toc-chevron.css";
import "./styles/knowls.css";
import { globalActions } from "./features/global/globalSlice";

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
                    document.querySelector(".ptx-content") ||
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

        const mediaQuery = window.matchMedia("(max-width: 600px)");
        function mobileModeSwitch(e: Event) {
            const query = e as MediaQueryListEvent;
            dispatch(globalActions.setMobileMode(query.matches));
        }
        dispatch(globalActions.setMobileMode(mediaQuery.matches));
        mediaQuery.addEventListener("change", mobileModeSwitch);
        return () => {
            mediaQuery.removeEventListener("change", mobileModeSwitch);
        };
    }, [dispatch]);

    if (!tocExtracted) {
        return null;
    }

    return (
        <React.Fragment>
            <header id="ptx-masthead">
                <div className="ptx-banner">
                    <Banner />
                </div>
            </header>
            <nav id="ptx-navbar" className="navbar">
                <TocVisibilityToggle />
                <CachingSettingsSelect />
                <NavButtons />
            </nav>
            <div className="ptx-page">
                <div
                    id="ptx-sidebar"
                    className={
                        // We use a special class `sidebar-hidden` instead of
                        // `hidden-content` because on a small screen, a "hidden"
                        // sidebar actually appears at the bottom of the screen.
                        classNames({ "sidebar-hidden": !tocVisible })
                    }
                >
                    <nav id="ptx-toc">
                        <Toc />
                    </nav>
                </div>
                <main className="main">
                    <div className="ptx-content">
                        <ContentPage content={currentPageContents} />
                    </div>
                    <div className="ptx-content-footer">Page footer dummy content</div>
                </main>
            </div>
            <div className="ptx-page-footer">Window footer dummy content</div>
        </React.Fragment>
    );
}

export default App;
