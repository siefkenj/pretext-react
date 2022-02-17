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
const header = document.body.querySelector("header");
const page = document.body.querySelector(".page");
if (header) {
    document.body.removeChild(header);
} else {
    console.warn("Tried to remove <header /> but could not find it");
}
if (page) {
    document.body.removeChild(page);
} else {
    console.warn('Tried to remove <div class="page" /> but could not find it');
}

// We want to use our own styling for the pretext shell, so we remove existing styles
for (const elm of Array.from(
    document.querySelectorAll('link[href*="pretext.css"]')
)) {
    elm.parentElement?.removeChild(elm);
}
for (const elm of Array.from(
    document.querySelectorAll('link[href*="toc_default.css"]')
)) {
    elm.parentElement?.removeChild(elm);
}
for (const elm of Array.from(
    document.querySelectorAll('link[href*="banner_default.css"]')
)) {
    elm.parentElement?.removeChild(elm);
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
