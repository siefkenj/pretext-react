import React from "react";
import classNames from "classnames";
import Prism from "prismjs";
import "prismjs/plugins/autoloader/prism-autoloader";
import "prismjs/themes/prism.css";

// Setting the plugin url for Prismjs is complicated because the path is different
// depending on if we are in dev mode or production mode. Also, we want to be able
// to serve from relative URLs
const prismUrlPromise = new Promise(async (resolve, reject) => {
    let prismUrl =
        "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/";
    try {
        // Attempt to find the location of the `prismjs` files
        let relativeUrl = "/static/prismjs/";
        if ("hot" in import.meta) {
            // We are in development mode with hot module reloading
        } else {
            relativeUrl = "../prismjs/";
        }
        prismUrl = (await import.meta.resolve?.(relativeUrl)) || prismUrl;
    } catch (e) {
        console.warn(
            "Failed to set Prismjs url. Falling back to CDN",
            prismUrl,
            e
        );
    }
    console.log("Prismjs URL configured to be", prismUrl);
    resolve(prismUrl);
});

/**
 * Create a `<pre class="program">...</pre>` tag that appropriately
 * syntax-highlights its content with Prismjs.
 */
export function Listing({
    className,
    languageClass,
    code,
}: React.ComponentProps<"pre"> & { languageClass: string; code: string }) {
    const preRef = React.useRef(null);

    React.useEffect(() => {
        if (preRef.current != null) {
            (async () => {
                const prismUrl = await prismUrlPromise;
                Prism.plugins.autoloader.languages_path = prismUrl;
                Prism.highlightElement(preRef.current!);
            })();
        }
    }, [preRef]);

    // Note: the `width` on the `img` tag must be set for `Zoom` to work.
    return (
        <pre className={classNames(className, "program")}>
            <code className={classNames(languageClass)} ref={preRef}>
                {code}
            </code>
        </pre>
    );
}
