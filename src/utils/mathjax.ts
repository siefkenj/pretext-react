const globalTypesettingMap = new WeakMap<object, boolean>();

function ensureMathJax() {
    if (typeof MathJax === "undefined") {
        throw new Error("MathJax not defined");
    }
}

/**
 * Queue a re-typesetting of the math on a page.
 */
export async function reTypesetMathJax() {
    try {
        ensureMathJax();
    } catch {
        return;
    }
    if ((MathJax as any)?.typesetPromise) {
        return (MathJax as any).typesetPromise();
    }
}

/**
 * Typeset a single html element with MathJax. This function
 * uses `typesetPromise` but ensures that the same element
 * is never concurrently re-typeset.
 */
export function typesetElement(e: Element) {
    try {
        ensureMathJax();
    } catch {
        return;
    }
    if ((MathJax as any)?.typesetPromise) {
        // Check if typesetting is already in progress.
        if (globalTypesettingMap.has(e)) {
            return;
        }
        // MathJax doesn't like being called while it's already running,
        // so we keep a record of whether we are currently typesetting.
        globalTypesettingMap.set(e, true);
        return (MathJax as any).typesetPromise([e]).then(() => {
            globalTypesettingMap.delete(e);
        });
    }
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
        return;
    }
    const clear = (MathJax as any).typesetClear;
    if (clear) {
        clear(nodes);
    }
}

export function fullMathJaxReset() {
    try {
        ensureMathJax();
    } catch {
        return;
    }
    const mj = MathJax as any;
    if (mj?.startup?.document?.state) {
        mj.startup.document.state(0);
        mj.texReset();
    }
}

export function mathJaxDefaultReady() {
    try {
        ensureMathJax();
    } catch {
        return;
    }
    (MathJax as any)?.startup?.defaultReady();
}
