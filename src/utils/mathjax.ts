const globalTypesettingMap = new WeakMap<object, boolean>();

/**
 * Queue a re-typesetting of the math on a page.
 */
export async function reTypesetMathJax() {
    if ((MathJax as any).typesetPromise) {
        return (MathJax as any).typesetPromise();
    }
}

export function typesetElement(e: Element) {
    if ((MathJax as any).typesetPromise) {
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
