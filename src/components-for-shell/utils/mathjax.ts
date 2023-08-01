// @ts-ignore
import type { MathJaxObject } from "mathjax-full/components/startup";

// MathJax is loaded globally and should be available when React starts.
declare const MathJax: MathJaxObject;

const globalCurrentlyTypesetting = new WeakMap<object, boolean>();
let resolvePreamblePromise: Function;
const preambleHasBeenTypeset: Promise<void> & {
    setMathJaxPreambleWasCalled?: boolean;
} = new Promise((resolve, _) => {
    resolvePreamblePromise = resolve;
});
preambleHasBeenTypeset.setMathJaxPreambleWasCalled = false;
export let globalNumberItemsBeingTypeset = 0;

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

    // This function cannot be called concurrently, so wait for the last call to finish
    if (preambleHasBeenTypeset.setMathJaxPreambleWasCalled) {
        await preambleHasBeenTypeset;
    }
    preambleHasBeenTypeset.setMathJaxPreambleWasCalled = true;

    if (!e) {
        // Even if we don't need to typeset any preamble,
        // we don't want to resolve the preamble promise until MathJax has fully loaded.
        await MathJax.startup.promise;
        resolvePreamblePromise();
    }
    await MathJax.startup.promise;
    // When we typeset the preamble we want to reset MathJax
    // so that any old preamble code is unloaded for future typesetting.
    MathJax.texReset();
    MathJax.typesetClear();
    await MathJax.typesetPromise([e]);
    resolvePreamblePromise();
    // If Runestone is active, there is a `rsMathReady` global resolve function
    // Call this if it exists.
    // @ts-ignore
    if (typeof window.rsMathReady !== "undefined") {
        // @ts-ignore
        window.rsMathReady();
    }
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
    globalNumberItemsBeingTypeset += 1;
    await MathJax.typesetPromise([e]);
    globalNumberItemsBeingTypeset -= 1;
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
