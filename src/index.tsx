import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { history } from "./app/hooks";
import { CustomBrowserRouter } from "./app/router";
import { extractInitInfo } from "./page-init";

// Must be called before the app renders.
extractInitInfo();

// Various scripts and other tags that shouldn't be changed may
// be in the body, so we need to manually clean up and prepare a spot for the main app.
document.body.innerHTML += `<div id="root"></div>`;
const elmsToRemove = document.body.querySelectorAll(
    "body > header, body > nav, body > .ptx-page, body > .ptx-page-footer"
);
for (const elm of Array.from(elmsToRemove)) {
    try {
        document.body.removeChild(elm);
    } catch (e) {
        console.warn("Tried to remove", elm, "but couldn't");
    }
}

for (const elm of Array.from(
    document.querySelectorAll(`link[href*="knowls_default.css"],
    link[href*="pretext.css"],
    link[href*="pretext_add_on.css"],
    link[href*="shell_min.css"],
    link[href*="banner_min.css"],
    link[href*="navbar_min.css"],
    link[href*="toc_min.css"],
    link[href*="colors_blue_red.css"],
    link[href*="setcolors.css"],
    link[href*="style_default.css"]`)
)) {
    try {
        document.head.removeChild(elm);
    } catch (e) {
        console.warn("Tried to remove", elm, "but couldn't");
    }
}

const renderTarget = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <CustomBrowserRouter history={history}>
                <App />
            </CustomBrowserRouter>
        </Provider>
    </React.StrictMode>,
    renderTarget
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
