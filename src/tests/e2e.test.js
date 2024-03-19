/* env jest*/
import { describe, it, expect, beforeAll, afterAll } from "vitest";

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

describe("UI Tests", { timeout: 5000 }, () => {
    let browser;
    /** @type puppeteer.Page */
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

        let knowlsForP = await page.$$("#test-1-4 a.xref");

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

        knowlsForP = await page.$$("#test-1-4 a.xref");
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

        let knowlsForP = await page.$$("#test-1-4 a.xref");

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
    });

    it("test-1: only one copy of knowl content is shown even if the user navigates to a different page and back", async () => {
        await page.goto(`${DEBUG_URL}/test-1.html`);
        await page.waitForSelector("#test-1");

        // Open the knowl. It's the knowl's "Solution" element we're after
        await page.waitForSelector(`a[href="./knowl/xref/test-1-eg.html"]`);
        await page.$eval(`a[href="./knowl/xref/test-1-eg.html"]`, (e) =>
            e.click()
        );

        await page.waitForSelector(`a.solution-knowl`);
        await page.$eval(`a.solution-knowl`, (e) => e.click());
        await page.waitForSelector(
            // Used to be an external know. Now it's inlined via a blob-url.
            // It just happens to be the first such knowl in the document, so it
            // gets the first anonymous id.
            `div#anonymous-knowl`
            //`div[data-for-knowl-url="./knowl/solution-1-hidden.html"]`
        );
        let solutionElms = await page.$$(`div#anonymous-knowl`);

        expect(solutionElms.length).toBe(1);

        await page.$eval(`a.solution-knowl`, (e) => e.click());

        // Navigate to another test and back
        await page.$eval(`a[href^="test-2.html"]`, (e) => e.click());
        await page.waitForSelector("#test-2");
        await page.$eval(`a[href^="test-1.html"]`, (e) => e.click());
        await page.waitForSelector("#test-1");

        // Expand the solution again!
        await page.$eval(`a.solution-knowl`, (e) => e.click());
        await page.waitForSelector(`div#anonymous-knowl`);
        solutionElms = await page.$$(`div#anonymous-knowl`);

        expect(solutionElms.length).toBe(1);

        /*
        await page.evaluate(async ()=> {
            await MathJax.startup.promise;
            await MathJax.typesetPromise()
        })
        await page.waitForSelector(".MathJax")
        */
    });

    it("test-3: knowls in math work", async () => {
        await page.goto(`${DEBUG_URL}/test-3.html`);
        await page.waitForSelector("#test-3");

        // MathJax must be loaded before this test can happen
        await page.evaluate(async () => {
            await window.MathJax.startup.promise;
            await window.MathJax.typesetPromise();
        });
        await page.waitForSelector(".MathJax");

        let knowlsForP = await page.$$("mjx-utext");

        // The clickable knowl should be the second mjx-utext
        const knowlTrigger = knowlsForP[1];
        knowlTrigger.click((e) => e.click());

        const openKnowls = await page.waitForSelector("[data-for-knowl-url]");

        expect(openKnowls).not.toBeNull();
    });

    it("test-8: listings get syntax highlighted", async () => {
        await page.goto(`${DEBUG_URL}/test-8.html`);
        await page.waitForSelector("#test-8");

        // MathJax must be loaded before this test can happen
        await page.evaluate(async () => {
            await window.MathJax.startup.promise;
            await window.MathJax.typesetPromise();
        });
        await page.waitForSelector("#test-8-listing-c");

        // The c-code should be highlighted via a dynamically-loaded plugin
        // There should be exactly one comment in the c code
        let listing1 = await page.$$(
            "#test-8-listing-c code > span.token.comment"
        );
        expect(listing1.length).toBe(1);

        // Get all of the highlighted operators
        let listing2 = await page.$$(
            "pre.program.language-matlab code > span.token.operator"
        );
        expect(listing2.length).toBe(15);
    });

    afterAll(() => browser.close());
});
