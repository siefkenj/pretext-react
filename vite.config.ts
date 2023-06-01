import { defineConfig } from "vitest/config";
import type { PluginOption, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import { JSDOM } from "jsdom";
import { directoryPlugin } from "vite-plugin-list-directory-contents";
import { viteStaticCopy } from "vite-plugin-static-copy";
import checker from "vite-plugin-checker";

/**
 * The main configuration for Vite. This config includes
 * a custom plugin to pre-process `html` files when run in development mode.
 */
export default defineConfig(({ command, mode }) => {
    // In "serve" mode, we want to run all html files through our preprocessor.
    let additionalConfig: UserConfig = { publicDir: false };
    let additionalPlugins: PluginOption[] = [];

    // When building, we don't want to preprocess any files, but we still want to copy them
    // over so we can get a "preview".
    if (command === "build") {
        additionalConfig = { publicDir: "public" };
    }

    return {
        ...additionalConfig,
        plugins: [
            pretextTransformPlugin(),
            checker({ typescript: true }),
            react(),
            viteTsconfigPaths(),
            svgrPlugin(),
            directoryPlugin({ baseDir: __dirname }),
            viteStaticCopy({
                targets: [
                    {
                        src: "node_modules/prismjs/components/*.min.js",
                        dest: "static/prismjs",
                    },
                ],
            }),
            ...additionalPlugins,
        ],
        base: "./",
        css: { devSourcemap: true },
        server: {
            // The file that automatically opens when running `vite`.
            open: "public/index.html",
        },
        build: {
            // Mimic create-react-app's directory structure
            outDir: "build",
            assetsDir: "static",
            sourcemap: true,
            assetsInlineLimit: 0,
            rollupOptions: {
                // We need an entry point to force vite to build all the dependencies.
                input: { app: "./__vite_entry_point.html" },
                output: {
                    // Disable all name mangling so that the output can be used for production builds.
                    chunkFileNames: "static/js/[name].js",
                    assetFileNames: (asset) => {
                        if (asset.name === "__vite_entry_point.css") {
                            // Override the name of `index.css`, the main CSS entry point
                            return "static/css/main.css";
                        }
                        return "static/[ext]/[name][extname]";
                    },
                    entryFileNames: "static/js/main.js",
                },
            },
        },
        test: { globals: true },
    };
});

/**
 * A Vite plugin factory that pre-processes html during dev mode and injects
 * a reference to `src/index.tsx`. By doing so, Vite will perform hot module
 * reloading when run in development mode.
 */
function pretextTransformPlugin(): PluginOption {
    return {
        name: "vite-plugin-pretext-transform",
        transformIndexHtml: {
            order: "pre",
            handler: (html, ctx) => {
                const prefix = Array.from({ length: subDirDepth(ctx.path) })
                    .map(() => "..")
                    .join("/");
                const injectSrc = `${prefix}/src/index.tsx`;

                const dom = new JSDOM(html);
                const shouldInjectTag = stripStaticJavascript(dom);
                if (shouldInjectTag) {
                    // If we are serving a page where we should inject the React javascript
                    // then we should also clean up the dom a little bit.
                    stripLegacyTags(dom);
                }
                html = dom.window.document.documentElement.outerHTML;

                return {
                    html,
                    tags: shouldInjectTag
                        ? [
                              {
                                  tag: "script",
                                  attrs: { src: injectSrc, type: "module" },
                                  injectTo: "head",
                              },
                          ]
                        : [],
                };
            },
        },
    };
}

/**
 * Returns the number of subdirectories that `path` contains.
 * E.g. `/foo/bar/baz.txt` has 2.
 */
function subDirDepth(path: string): number {
    const normalized = new URL(path, "file://").pathname;
    return (normalized.match(/\//g)?.length || 1) - 1;
}

/**
 * In development mode, references to `/static/js/main.(js|css)` are removed
 * and replaced with a link to `index.tsx`. This tricks Vite into dynamically compiling
 * and injecting all dependencies.
 *
 * @returns boolean - whether any tags were removed.
 */
function stripStaticJavascript(dom: JSDOM): boolean {
    let ret = false;
    const document = dom.window.document;
    document
        .querySelectorAll(
            `
            script[src^="./static/js/"],
            link[href^="./static/css/"]
        `
        )
        .forEach((e) => {
            e.remove();
            ret = true;
        });

    return ret;
}

/**
 * Pretext includes some tags that mess up processing by the React frontend.
 * We strip these tags.
 *
 * XXX: this function should only be needed temporarily! All of these changes should
 * be made in Pretext before React leaves beta.
 */
function stripLegacyTags(dom: JSDOM) {
    const document = dom.window.document;
    // XXX: Temporary workaround; Runestone CSS messes us up
    {
        const elmsToRemove = document.head.querySelectorAll(
            `link[href*="pretext"],
             link[href*="developer.css"],
             noscript
            `
        );
        for (const elm of Array.from(elmsToRemove)) {
            try {
                document.head.removeChild(elm);
            } catch (e) {
                console.warn("Tried to remove", elm, "but couldn't");
            }
        }
    }
}
