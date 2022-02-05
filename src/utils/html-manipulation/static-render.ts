import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeMathjax from "rehype-mathjax/chtml";
import rehypeStringify from "rehype-stringify";
import { selectAll } from "hast-util-select";

/**
 * Uses MathJax to statically render Math.
 */
export async function staticallyRenderMathJax(domStr: string) {
    const file = await unified()
        .use(rehypeParse, { fragment: true })
        .use(() => (ast, file) => {
            // To process math, the rehypeMathjax plugin requires an `inline-math` or `display-math`
            // class. Pretext outputs a `process-math` class. So, we add the required classes.
            for (const elm of selectAll(".process-math", ast)) {
                const className = elm.properties?.className;
                if (!Array.isArray(className)) {
                    continue;
                }
                className.includes("displaymath")
                    ? className.push("math-display")
                    : className.push("math-inline");
                // We need to trim any braces \( and \) from the start and end of the string.
                const child = elm.children[0];
                if (child?.type === "text") {
                    let innerText = child.value.trim();
                    if (innerText.startsWith("\\(")) {
                        innerText = innerText.slice(2);
                    }
                    if (innerText.endsWith("\\)")) {
                        innerText = innerText.slice(0, innerText.length - 2);
                    }
                    child.value = innerText;
                }
            }
            return;
        })
        .use(rehypeMathjax, {
            chtml: {
                fontURL:
                    "https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2",
                mtextInheritFont: true,
                scale: 0.88,
            },
        })
        .use(rehypeStringify)
        .process(domStr);

    return String(file);
}
