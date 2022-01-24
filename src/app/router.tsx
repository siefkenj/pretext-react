import React from "react";
import { Router } from "react-router";
import type { BrowserHistory } from "history";

/**
 * A version of BrowserRouter that accepts a custom history object.
 * https://github.com/remix-run/react-router/blob/df1f77a2cb95f8884576e9abaa8357a3077326cf/packages/react-router-dom/index.tsx#L135
 */
export function CustomBrowserRouter({
    children,
    history,
}: {
    children?: React.ReactNode;
    history: BrowserHistory;
}) {
    let [state, setState] = React.useState({
        action: history.action,
        location: history.location,
    });

    React.useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <Router
            children={children}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        />
    );
}
