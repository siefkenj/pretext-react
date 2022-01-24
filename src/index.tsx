import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { history } from "./app/hooks";
import { CustomBrowserRouter } from "./app/router";

document.body.innerHTML += `<div id="root"></div>`;

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <CustomBrowserRouter history={history}>
                <App />
            </CustomBrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
