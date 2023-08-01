import { toHtml } from "hast-util-to-html";
import { it, expect, describe } from "vitest";
import {
    findMatches,
    hastHighlight,
} from "../components-for-shell/search/hast-highlight";

describe("hast-highlight", () => {
    it("Can find matches in a string", () => {
        expect(findMatches("hello world", ["hello"])).toEqual([
            { start: 0, match: "hello", end: 5 },
        ]);

        expect(findMatches("aaabbbaaabbb", ["aa", "aab"])).toEqual([
            { start: 0, match: "aa", end: 2 },
            { start: 6, match: "aa", end: 8 },
        ]);
        expect(findMatches("aaaabbbaaabbb", ["aaa", "ab"])).toEqual([
            { start: 0, match: "aaa", end: 3 },
            { start: 3, match: "ab", end: 5 },
            { start: 7, match: "aaa", end: 10 },
        ]);
        expect(findMatches("a|b", ["|"])).toEqual([
            { start: 1, match: "|", end: 2 },
        ]);
    });
    it("Can highlight expressions in an html tree in a single string", () => {
        let source: string;

        source = "<p>hello world</p>";
        expect(toHtml(hastHighlight(source, "hello"))).toEqual(
            `<p><span class="highlight">hello</span> world</p>`
        );

        source = "<p>hello hello world</p>";
        expect(toHtml(hastHighlight(source, "hello"))).toEqual(
            `<p><span class="highlight">hello</span> <span class="highlight">hello</span> world</p>`
        );
    });
    it("Can highlight expressions in an html tree across multiple strings with a single parent", () => {
        let source: string;

        source = "<p>he<b>ll</b>o world</p>";
        expect(toHtml(hastHighlight(source, "hello"))).toEqual(
            `<p><span class="highlight">he<b>ll</b>o</span> world</p>`
        );
    });
    it("Can highlight expressions in an html tree across multiple strings with multiple parents", () => {
        let source: string;

        source = "<p>he<b>llo wor</b>ld</p>";
        expect(toHtml(hastHighlight(source, "hello"))).toEqual(
            `<p><span class="highlight">he</span><b><span class="highlight">llo</span> wor</b>ld</p>`
        );

        source = "<p>he<b>ll</b>o world</p>";
        expect(toHtml(hastHighlight(source, "hello"))).toEqual(
            `<p><span class="highlight">he<b>ll</b>o</span> world</p>`
        );
    });
    it("Can highlight multiple expressions", () => {
        let source: string;

        source = "<p>hello world</p>";
        expect(toHtml(hastHighlight(source, ["hello", "world"]))).toEqual(
            `<p><span class="highlight">hello</span> <span class="highlight">world</span></p>`
        );
    });
    it("Can highlight source without a parent node", () => {
        let source: string;

        source = `sin x`;
        expect(toHtml(hastHighlight(source, "x"))).toEqual(
            `sin <span class="highlight">x</span>`
        );
    });
    it("Can avoid highlighting expressions in specific nodes", () => {
        let source:string;

        source = `<p><a>hello world</a><b>hello world</b></p>`;
        // With no special argument, all instances of "hello" are highlighted
        expect(toHtml(hastHighlight(source, "hello"))).toEqual(
            `<p><a><span class="highlight">hello</span> world</a><b><span class="highlight">hello</span> world</b></p>`
        );
        
        expect(toHtml(hastHighlight(source, "hello", {skipHighlight: (node) => node.tagName === "b"}))).toEqual(
            `<p><a><span class="highlight">hello</span> world</a><b>hello world</b></p>`
        );
    })
});
