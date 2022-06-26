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
    className
}: React.PropsWithChildren<unknown>  & {className?: string|undefined}) {
    const parentRef = React.useRef(null);

    // Ensure `className` has exactly one copy of "runestone" but also includes
    // all its other classes.
    if (!className) {
        className = "";
    }
    className = className.replace(/runestone/g, "");
    className = "runestone " + className;

    React.useLayoutEffect(() => {
        (async () => {
            if (parentRef.current) {
                try {
                    await runestoneComponents.renderOneComponent(
                        parentRef.current
                    );
                } catch (e) {
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
            <div className={className} ref={parentRef}>
                {children}
            </div>
        </div>
    );
}
