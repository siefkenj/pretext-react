import React from "react";
import classNames from "classnames";
import { extractActiveTocItem, extractTocFromXml } from "./utils/extract-toc";
import { Toc } from "./components/toc";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
    currentPageContentSelector,
    navActions,
} from "./features/nav/navSlice";
import { useLocation } from "react-router";
import { normalizeUrlWithHash } from "./utils/normalize";
import { ContentPage } from "./components/content-page";
import { Banner } from "./components/banner";
import { NavButtons } from "./components/nav-buttons";
import { IndexButton } from "./components/index-button";
import { PageFooter } from "./components/page-footer";
import { TocVisibilityToggle } from "./components/toc/toggle";
import { tocIsVisibleSelector } from "./features/toc/tocSlice";
import { CachingSettingsSelect } from "./components/caching-setting-select";

//import "./styles/header.css";
import "./styles/pretext.css";
import "./styles/pretext_add_on.css";
import "./styles/shell_default.css";
import "./styles/banner_default.css";
import "./styles/navbar_default.css";
import "./styles/toc_default.css";
import "./styles/toc-chevron.css";
import "./styles/style_default.css";
import "./styles/colors_blue_red.css";
import "./styles/setcolors.css";
import "./styles/knowls.css";
import "./styles/permalink.css";
import { globalActions } from "./features/global/globalSlice";
import { setMathJaxPreamble } from "./utils/mathjax";

function App() {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const [lastUrl, setLastUrl] = React.useState("");
    const currentUrl = normalizeUrlWithHash(location.pathname + location.hash);
    const currentPageContents = useAppSelector(currentPageContentSelector);
    const [tocExtracted, setTocExtracted] = React.useState(false);
    const tocVisible = useAppSelector(tocIsVisibleSelector);

    React.useLayoutEffect(() => {
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
            await dispatch(navActions.scrollViewportIfNeeded());
        })();
    }, [dispatch, currentUrl, lastUrl]);

    React.useEffect(() => {
        // Fetch the document manifest, which contains an XML version of the table of contents
        (async () => {
            const resp = await fetch("doc-manifest.xml");
            const content = await resp.text();
            const toc = extractTocFromXml(content);
            await dispatch(navActions.setToc(toc));
            await dispatch(navActions.setCurrentPage(extractActiveTocItem()));
            setTocExtracted(true);
        })();

        // Set up media queries to detect if we are in mobile/small-screen mode
        const mediaQuery = window.matchMedia("(max-width: 904px)");
        function mobileModeSwitch(e: Event) {
            const query = e as MediaQueryListEvent;
            dispatch(globalActions.setMobileMode(query.matches));
        }
        dispatch(globalActions.setMobileMode(mediaQuery.matches));
        mediaQuery.addEventListener("change", mobileModeSwitch);

        // Make sure we typeset the LaTeX preamble; this is done only once at page load.
        // MathJax will remember the data set here in all subsequent typesetting calls.
        const preambleElm = document.querySelector(
            "#latex-macros > .process-math"
        );
        if (preambleElm) {
            setMathJaxPreamble(preambleElm);
        } else {
            console.warn(
                'Could not locate the LaTeX preamble element (it should have id="latex-macros"'
            );
        }

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
                <IndexButton />
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
                    <nav id="ptx-toc" className="ptx-toc">
                        <Toc />
                    </nav>
                </div>
                <main className="ptx-main">
                    <div className="ptx-content">
                        <ContentPage content={currentPageContents} />
                    </div>
                    <PageFooter />
                </main>
            </div>
            <div className="ptx-page-footer">Window footer dummy content</div>
        </React.Fragment>
    );
}

export default App;
