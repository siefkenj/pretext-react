/* env jest*/

import puppeteer from "puppeteer";

const DEBUG_URL = "http://localhost:30001";

function normalizeUrl(url) {
    const fullUrl = new URL(url, DEBUG_URL);
    return fullUrl.href.replace(DEBUG_URL, "");
}

/**
 * Adds listeners that forward a page's `console` messages to
 * stdout.
 *
 * @param {*} page - Puppeteer page object
 */
function pageConsoleToStdout(page) {
    page.on("console", (message) =>
        console.log(
            `${message.type().substr(0, 3).toUpperCase()} ${message.text()}`
        )
    )
        .on("pageerror", ({ message }) => console.log(message))
        .on("response", (response) =>
            console.log(`${response.status()} ${response.url()}`)
        )
        .on("requestfailed", (request) =>
            console.log(`${request.failure().errorText} ${request.url()}`)
        );
}
/**
 * Ensures that any CSS transitions that happen on the page have no delay.
 */
function ensureInstantAnimations(page) {
    page.on("load", () => {
        const content = `
        *,
        *::after,
        *::before {
            transition-delay: 0s !important;
            transition-duration: 0s !important;
            animation-delay: -0.0001s !important;
            animation-duration: 0s !important;
            animation-play-state: paused !important;
            caret-color: transparent !important;
        }`;

        page.addStyleTag({ content });
    });
}

describe("UI Tests", () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        ensureInstantAnimations(page);
        await page.setViewport({ width: 1000, height: 800 });
    });

    it("Can render page (test-1)", async () => {
        await page.goto(`${DEBUG_URL}/test-1.html`);
        await page.waitForSelector("#test-1");
        const text = await page.$eval(
            "#test-1 .heading .title",
            (e) => e.textContent
        );

        expect(text).toEqual("test-1");
    });

    it("test-1: knowls attached to the same paragraph open in the order that they're clicked", async () => {
        await page.goto(`${DEBUG_URL}/test-1.html`);
        await page.waitForSelector("#test-1");

        let knowlsForP = await page.$$("#p-3 a.xref");

        // Click on the links in order
        let orderClicked = [];
        for (const xref of knowlsForP) {
            await xref.click((e) => e.click());
            const knowlContainerId = await xref.evaluate((e) =>
                e.getAttribute("data-knowl-container-id")
            );
            orderClicked.push(knowlContainerId);
        }

        // Make a CSS selector that will select all of our knowl containers
        let selector = orderClicked.map((x) => `#${x}`).join(", ");

        // Check to make sure our knowl containers appear in the correct order
        // $$eval runs a `querySelectorAll` on the page and returns the results as an array.
        let orderShown = await page.$$eval(selector, (elms) =>
            elms.map((e) => e.getAttribute("id"))
        );

        // We expect the last item clicked to show up first (so reverse the click order)
        let expectedOrder = [...orderClicked];
        expectedOrder.reverse();
        expect(orderShown).toEqual(expectedOrder);

        // Now, reload the page and click things in the opposite order!
        await page.goto(`${DEBUG_URL}/test-1.html`);
        await page.waitForSelector("#test-1");

        knowlsForP = await page.$$("#p-3 a.xref");
        knowlsForP.reverse();

        // Click on the links in order
        orderClicked = [];
        for (const xref of knowlsForP) {
            await xref.click((e) => e.click());
            const knowlContainerId = await xref.evaluate((e) =>
                e.getAttribute("data-knowl-container-id")
            );
            orderClicked.push(knowlContainerId);
        }

        // Make a CSS selector that will select all of our knowl containers
        selector = orderClicked.map((x) => `#${x}`).join(", ");

        // Check to make sure our knowl containers appear in the correct order
        // $$eval runs a `querySelectorAll` on the page and returns the results as an array.
        orderShown = await page.$$eval(selector, (elms) =>
            elms.map((e) => e.getAttribute("id"))
        );

        // We expect the last item clicked to show up first (so reverse the click order)
        expectedOrder = [...orderClicked];
        expectedOrder.reverse();
        expect(orderShown).toEqual(expectedOrder);
    });

    it("test-1: in-context links work", async () => {
        await page.goto(`${DEBUG_URL}/test-1.html`);
        await page.waitForSelector("#test-1");

        let knowlsForP = await page.$$("#p-3 a.xref");

        for (const xref of knowlsForP) {
            await xref.click((e) => e.click());
        }

        expect(normalizeUrl(await page.url())).toEqual("/test-1.html");

        await page.waitForSelector(`a[href="test-1.html#test-1-eg"]`);
        await page.$eval(`a[href="test-1.html#test-1-eg"]`, (e) => e.click());
        expect(normalizeUrl(await page.url())).toEqual(
            "/test-1.html#test-1-eg"
        );

        await page.waitForSelector(`a[href="test-1.html#test-1-def"]`);
        await page.$eval(`a[href="test-1.html#test-1-def"]`, (e) => e.click());
        expect(normalizeUrl(await page.url())).toEqual(
            "/test-1.html#test-1-def"
        );

        expect(true).toEqual(false)

        /*
        await page.evaluate(async ()=> {
            await MathJax.startup.promise;
            await MathJax.typesetPromise()
        })
        await page.waitForSelector(".MathJax")
        await page.screenshot({ path: `test-screenshot.png` });
        */
    });

    afterAll(() => browser.close());
});
