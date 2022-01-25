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

/**
 * Like `MathJaxRenderer`, but won't re-render math when the child component updates.
 *
 * If you pass a `React.ref` to `forceUpdateRef`, the `.current` value on the ref
 * will be set to a function that when called will force a re-render of the component.
 * This is an escape hatch that allows a parent to control when MathJax is called.
 *
 * This wrapper is used for performance-critical components that are re-rendered often.
 */
export function MathJaxOneTimeRenderer({
    children,
    forceUpdateRef,
}: React.PropsWithChildren<{
    forceUpdateRef?: React.MutableRefObject<(() => any) | null | undefined>;
}>) {
    // It's sometimes nice to allow the parent to force this component to re-render.
    // We use a trick from https://blog.logrocket.com/how-when-to-force-react-component-re-render/
    // We pass back an update function in a ref which sets a new state of `{}`. Since
    // objects are compared by reference, this will force a re-run of MathJax
    const [updateObj, setUpdateObj] = React.useState({});
    const parentRef = React.useRef<Element | null>(null);

    const forceUpdate = React.useCallback(() => setUpdateObj({}), []);

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
    }, [updateObj]);

    if (forceUpdateRef) {
        forceUpdateRef.current = forceUpdate;
    }

    return (
        <React.Fragment>
            {!parentRef.current && (
                <span style={{ display: "none" }} ref={refCallback} />
            )}
            {children}
        </React.Fragment>
    );
}
