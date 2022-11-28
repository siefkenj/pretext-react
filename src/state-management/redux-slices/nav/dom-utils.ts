function rafAsync() {
    return new Promise((resolve) => {
        requestAnimationFrame(resolve);
    });
}

const TIMEOUT_MS = 5000;

/**
 * Poll the DOM for an element matching `selector` until one is found or the timeout is reached.
 */
export async function awaitElement(selector: string) {
    const startTime = +new Date();
    let currTime = +new Date();
    while (
        document.querySelector(selector) === null &&
        currTime - startTime < TIMEOUT_MS
    ) {
        await rafAsync();
        currTime = +new Date();
    }
    if (currTime - startTime >= TIMEOUT_MS) {
        console.warn(
            "Timeout while querying for element with selector",
            selector
        );
        return undefined;
    }
    return document.querySelector(selector);
}
