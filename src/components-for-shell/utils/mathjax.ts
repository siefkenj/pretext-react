import type { MathJaxObject } from "mathjax-full/ts/components/startup";

// MathJax is loaded globally and should be available when React starts.
declare const MathJax: MathJaxObject;

const globalCurrentlyTypesetting = new WeakMap<object, boolean>();
let resolvePreamblePromise: Function;
const preambleHasBeenTypeset = new Promise((resolve, _) => {
    resolvePreamblePromise = resolve;
});

function ensureMathJax() {
    if (typeof MathJax === "undefined") {
        throw new Error("MathJax not defined");
    }
}

/**
 * Typeset an element containing preamble code. This preamble code
 * will be typeset by MathJax *before* any other elements are typeset.
 */
export async function setMathJaxPreamble(e?: Element) {
    try {
        ensureMathJax();
    } catch {
        console.warn("Tried to typeset math, but MathJax was not loaded");
        return;
    }
    if (!e) {
        // Even if we don't need to typeset any preamble,
        // we don't want to resolve the preamble promise until MathJax has fully loaded.
        await MathJax.startup.promise;
        resolvePreamblePromise();
    }
    await MathJax.startup.promise;
    await MathJax.typesetPromise([e]);
    resolvePreamblePromise();
}

/**
 * Typeset a single html element with MathJax. This function
 * uses `typesetPromise` but ensures that the same element
 * is never concurrently re-typeset.
 *
 * WARNING: This function blocks until `setMathJaxPreamble` has been called on
 * an element containing a preamble (or called without an argument). This ensures
 * that code in the preamble is available to all subsequent calls to MathJax.
 */
export async function typesetElement(e: Element) {
    try {
        ensureMathJax();
    } catch {
        console.warn("Tried to typeset math, but MathJax was not loaded");
        return;
    }
    const timeoutId = window.setTimeout(() => {
        console.warn(
            "Waited for over 10 seconds for the LaTeX preamble to be typeset by MathJax; maybe `setMathJaxPreamble` was never called"
        );
    }, 10000);
    await preambleHasBeenTypeset;
    window.clearTimeout(timeoutId);

    // Check if typesetting is already in progress.
    if (globalCurrentlyTypesetting.has(e)) {
        return;
    }
    // MathJax doesn't like being called while it's already running,
    // so we keep a record of whether we are currently typesetting.
    globalCurrentlyTypesetting.set(e, true);
    await MathJax.typesetPromise([e]);
    globalCurrentlyTypesetting.delete(e);
}

/**
 * Re-export of `MathJax.typesetClear()`. Used for resetting the
 * MathJax cache (useful for labeled equations to make sure that
 * MathJax doesn't crash on a non-unique label.)
 */
export function typesetClear(nodes: Element[]) {
    try {
        ensureMathJax();
    } catch {
        console.warn("Tried to typeset math, but MathJax was not loaded");
        return;
    }
    const clear = MathJax.typesetClear;
    if (clear) {
        clear(nodes);
    }
}

/**
 * Clear all typesetting and typesetting context for the entire document.
 */
export function fullMathJaxReset() {
    try {
        ensureMathJax();
    } catch {
        console.warn("Tried to typeset math, but MathJax was not loaded");
        return;
    }
    const mj = MathJax;
    if (mj?.startup?.document?.state) {
        mj.startup.document.state(0);
        mj.texReset();
    }
}
