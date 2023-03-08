import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./state-management/store";
import { history } from "./state-management/hooks";
import { CustomBrowserRouter } from "./components-for-shell/router";
import { extractInitInfo } from "./components-for-shell/page-init";

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
import { Shell } from "./components-for-shell/shell";

// Must be called before the app renders.
extractInitInfo();

// XXX: Temporary workaround; Runestone CSS messes us up
{
    const elmsToRemove = document.head.querySelectorAll(
        `link[href*="runestone"]`
    );
    for (const elm of Array.from(elmsToRemove)) {
        try {
            document.head.removeChild(elm);
        } catch (e) {
            console.warn("Tried to remove", elm, "but couldn't");
        }
    }
}
// XXX: Temporary workaround; Pretext upstream CSS messes us up
{
    const elmsToRemove = document.head.querySelectorAll(
        `link[href*="pretext"]`
    );
    for (const elm of Array.from(elmsToRemove)) {
        try {
            document.head.removeChild(elm);
        } catch (e) {
            console.warn("Tried to remove", elm, "but couldn't");
        }
    }
}
// XXX: Temporary workaround; Pretext upstream CSS messes us up
{
    const elmsToRemove = document.head.querySelectorAll(
        `link[href*="developer.css"]`
    );
    for (const elm of Array.from(elmsToRemove)) {
        try {
            document.head.removeChild(elm);
        } catch (e) {
            console.warn("Tried to remove", elm, "but couldn't");
        }
    }
}

// Various scripts and other tags that shouldn't be changed may
// be in the body, so we need to manually clean up and prepare a spot for the main app.
document.body.innerHTML += `<div id="root"></div>`;
const elmsToRemove = document.body.querySelectorAll(
    "body > header, body > nav, body > .ptx-page, body > .ptx-page-footer, body > #ptx-page-footer"
);
for (const elm of Array.from(elmsToRemove)) {
    try {
        document.body.removeChild(elm);
    } catch (e) {
        console.warn("Tried to remove", elm, "but couldn't");
    }
}

const renderTarget = document.getElementById("root");
const root = createRoot(renderTarget!);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <CustomBrowserRouter history={history}>
                <Shell />
            </CustomBrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
