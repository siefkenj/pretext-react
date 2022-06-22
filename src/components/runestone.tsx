import React from "react";

declare const runestoneComponents: {
    renderOneComponent: (node: HTMLElement) => void;
};

/**
 * Render a component and then call Runestone's handler on the children. The
 * children of this component are never manipulated by React.
 */
export function RunestoneRenderer({
    children,
}: React.PropsWithChildren<unknown>) {
    const parentRef = React.useRef(null);

    React.useLayoutEffect(() => {
        (async () => {
            if (parentRef.current) {
                await runestoneComponents.renderOneComponent(parentRef.current);
            }
        })();
    }, []);

    return (
        <div className="runestone" ref={parentRef}>
            {children}
        </div>
    );
}
