import React from "react";
import ReactDOM from "react-dom";

/**
 * Renders into `target` via a react portal, replacing the contents of `target`.
 */
export function ReplacingPortal({
    target,
    children,
}: React.PropsWithChildren<{ target: Element }>) {
    const [haveClearedInnerHtml, setHaveClearedInnerHtml] =
        React.useState(false);

    React.useEffect(() => {
        // On the first mount of this component, we want to clear the contents of `target`
        // so that it is take over by the react portal.
        if (!haveClearedInnerHtml && target) {
            target.innerHTML = "";
            setHaveClearedInnerHtml(true);
        }
    }, [haveClearedInnerHtml, target]);

    if (!haveClearedInnerHtml) {
        return null;
    }

    if (!target) {
        console.warn("Could not find target node to render into");
        return null;
    }

    return ReactDOM.createPortal(children, target);
}
