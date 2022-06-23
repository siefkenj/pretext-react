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
                try {
                    await runestoneComponents.renderOneComponent(
                        parentRef.current
                    );
                } catch (e) {
                    console.log(
                        "calling runestone on",
                        parentRef.current,
                        (parentRef.current as any).innerHTML, "xx"
                    );
                    console.error(
                        "Enountered error when rendering Runestone component",
                        parentRef.current
                    );
                    throw e;
                }
            }
        })();
    }, []);

    return (
        <div className="ptx-runestone-container">
            <div className="runestone" ref={parentRef}>
                {children}
            </div>
        </div>
    );
}
