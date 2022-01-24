import React from "react";
import { typesetElement } from "../utils/mathjax";

/**
 * `MathJax.typesetPromise()` is automatically called on the children of this element.
 * This is theoretically efficient because MathJax caches its rendering.
 *
 * This element temporarily inserts a `<span />` into the return nodes in order
 * to grab a reference to the parent. After a reference to the parent is found, the `<span />`
 * is removed.
 */
export function MathJaxRenderer({
    children,
}: React.PropsWithChildren<unknown>) {
    const parentRef = React.useRef<Element | null>(null);

    // We need to grab the parent element so that we can ask MathJax to typeset its contents.
    const refCallback = React.useCallback((node: Element | null) => {
        if (node != null) {
            parentRef.current = node.parentElement || document.body;
        }
    }, []);

    React.useEffect(() => {
        if (parentRef.current) {
            typesetElement(parentRef.current);
        }
    });
    return (
        <React.Fragment>
            {!parentRef.current && (
                <span style={{ display: "none" }} ref={refCallback} />
            )}
            {children}
        </React.Fragment>
    );
}
