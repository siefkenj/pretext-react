import React from "react";
import classNames from "classnames";
import ReduxToastr from "react-redux-toastr";
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
import { TocVisibilityToggle } from "./components/toc/toggle";
import { tocIsVisibleSelector } from "./features/toc/tocSlice";
import { CachingSettingsSelect } from "./components/caching-setting-select";

import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

//import "./styles/header.css";
import "./styles/shell.css";
//import "./styles/toc.css";
import "./styles/toc-chevron.css";
import "./styles/knowls.css";
import "./styles/permalink.css";
import "./styles/ptx-fixes.css";
import { globalActions } from "./features/global/globalSlice";

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
                    <div className="ptx-content-footer">
                        Page footer dummy content
                    </div>
                </main>
            </div>
            <div className="ptx-page-footer">Window footer dummy content</div>
            <ReduxToastr
                timeOut={2000}
                newestOnTop={true}
                preventDuplicates
                position="top-center"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                closeOnToastrClick
            />
        </React.Fragment>
    );
}

export default App;
