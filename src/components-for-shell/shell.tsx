import React from "react";
import classNames from "classnames";
import { extractActiveTocItem, extractTocFromXml } from "./utils/extract-toc";
import { Toc } from "./toc";
import { useAppDispatch, useAppSelector } from "../state-management/hooks";
import { navActions } from "../state-management/redux-slices/nav/nav-slice";
import { currentPageContentSelector } from "../state-management/redux-slices/nav/selectors";
import { useLocation } from "react-router";
import { normalizeUrlWithHash } from "./utils/normalize";
import { ContentPage } from "../components-for-page/content-page";
import { Banner } from "./banner";
import { NavButtons } from "./nav-buttons";
import { IndexButton } from "./index-button";
import { ContentFooter } from "./content-footer";
import { TocVisibilityToggle } from "./toc/toggle";
import { tocIsVisibleSelector } from "../state-management/redux-slices/toc/toc-slice";

import { globalActions } from "../state-management/redux-slices/global/global-slice";
import { setMathJaxPreamble } from "./utils/mathjax";
import { PageFooter } from "./page-footer";
import { SettingsButton } from "./settings/settings-button";
import { InfoDialog } from "./settings/info-dialog";
import { RunestoneHeaderButtons } from "./runestone/nav-buttons";
import { runestoneActions } from "../state-management/redux-slices/runestone/runestone-slice";
import { ScratchActiveCodeDialog } from "./runestone/scratch-active-code-dialog";

function Shell() {
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
                await dispatch(
                    navActions.setCurrentPageByUrl({
                        url: currentUrl,
                        origin: "url-change",
                    })
                );
            }
            await Promise.all([
                dispatch(navActions.scrollTocIfNeeded()),
                dispatch(navActions.scrollViewportIfNeeded()),
            ]);
        })();
    }, [dispatch, currentUrl, lastUrl]);

    React.useEffect(() => {
        // Fetch the document manifest, which contains an XML version of the table of contents
        (async () => {
            await dispatch(navActions.fetchAndInitTocFromManifest());
            await dispatch(
                navActions.setCurrentPage({
                    id: extractActiveTocItem(),
                    origin: "url-change",
                })
            );
            setTocExtracted(true);
        })();

        // Initialize Runestone if present
        dispatch(runestoneActions.runestoneInit());

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
            <InfoDialog />
            <ScratchActiveCodeDialog />
            <nav id="ptx-navbar" className="navbar">
                <TocVisibilityToggle />
                <IndexButton />
                <RunestoneHeaderButtons />
                <NavButtons />
                <SettingsButton />
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
                    <ContentFooter />
                </main>
            </div>
            <PageFooter />
        </React.Fragment>
    );
}

export { Shell };
