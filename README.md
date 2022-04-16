# pretext-react

A ReactJS version of the Pretext UI

This interface is a prototype to investigate whether React would provide a suitable
replacement for the current jquery-based UI for Pretext books when rendered on the web.

## Development

To get started, make sure you have `nodejs` and `npm` (Node Package Manager; should
be installed by default with Node) installed. Then, in the `pretext-react` director, run

```
git submodule init
npm install
npm run start
```

to make a live dev-server. After this, when you update code, your node will tell your
web browser to automatically reload with the new code. However, this may cause issues with
internally-cached data, so you may have to refresh the web browser.

### Build

To build run

```
npm run build
```

The resulting build will be placed in a `build/` folder. The Javascript output will be located
at `build/static/js/main.js` and the css will be located at `build/static/css/main.css`. These
scripts assume that all of your _Pretext_ `html` files have

```html
<script defer="defer" src="/static/js/bundle.js"></script>
<script defer="defer" src="/static/js/main.js"></script>
<link href="./static/css/main.css" rel="stylesheet" />
```

in their `<header>`. (The reference to `bundle.js` is strictly for development/hot-reloading. It
isn't needed in a production build.)

#### Building Pretext Source for Debugging

If you want to use the React frontend with a specific Pretext source, you need to compile it with the following
`stringparams`

    * `debug.react.local yes`
    * `html-css-shellfile shell_min.css`
    * `html-css-bannerfile banner_min.css`
    * `html-css-tocfile toc_min.css`
    * `html-css-navbarfile navbar_min.css`

Using `xsltproc` this might look something like

```
xsltproc --stringparam debug.react.local yes --stringparam html-css-shellfile shell_min.css --stringparam html-css-bannerfile banner_min.css --stringparam html-css-tocfile toc_min.css --stringparam html-css-navbarfile navbar_min.css -stringparam debug.datedfiles no -xinclude ../tmp/pretext/xsl/pretext-html.xsl ../src/html-testing/source/main.ptx
```

### Code Overview

`pretext-react` is written in [TypeScript](https://www.typescriptlang.org/), specifically the _TSX_ variant of typescript.
_TSX_ allows a mixture of TypeScript code and what appears to be HTML. It is a TypeScript variant of the popular JSX. See [here](https://www.reactenlightenment.com/react-jsx/5.1.html)
for a short introduction to JSX.

`pretext-react` replaces the "shell" around the pretext content. Additionally, it is responsible
for the interactive _knowl_ elements and navigation components.

When the page is loaded, `pretext-react` does the following.

1. Extracts necessary information from the current page (mainly the body content) and fetches `doc-manifest.xml` which contains table of contents information.

2. Renders the "shell" (the TOC and nav buttons).

3. Processes and display the page contents. React likes to "own" the page that it renders. For this reason, we process the source with the [unifiedjs](http://unifiedjs.com/) framework and call the code in `hast-react.ts` to convert the HAST (HTML Abstract Syntax Tree) into a tree of React components. Along the way, certain components are replaced with their full-featured equivalents. For example, links are replaced with `<InternalLink />` elements (provided they are internal links!). These replaces are located in `src/components/replaces`.

Of note, when the user clicks on a _knowl_, it is handled by React components (the ones coming from `replacers/knowls.tsx`).

#### State Management

Redux via [Redux Toolkit](https://redux-toolkit.js.org/) is used to manage global state. It allows several components to access the same
data while staying in sync. It also minimizes re-renders by asking components to re-render only when their data changes.

If you install [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) for
Firefox or Chrome you can inspect the contents of the page's global store.

In the Redux global store, table of contents information/navigation information is stored. In addition, the HTML source of each
cached page is stored. This means the page doesn't need to be re-downloaded when the user returns to it!

#### Code Philosophy/Files

The code is written using React Function-based components (not class-based components). Files aim to be less than 200 lines of code
with each file containing one component (or a couple closely-related components). The TypeScript compiler will combine code
that is imported via `import` statements into a single file in the end, so there is no concern that the end-user will have to load
hundreds of files.

Here's a brief overview of the important files and folders:

-   `index.tsx` - This is the entry point for the App. It sets up only what is required to get the app started (e.g., stuff that needs to
    be done before the app starts).

-   `App.tsx` - This is what renders the app. Every component that you see is a child of a component from here.

-   `app/` - Setup for Redux/global state management.

-   `components/` - This is where the React components go (e.g., buttons, knowl-openers, etc.)

-   `features/` - Global state management. Each "piece" of state is broken off into its own features. For instance, state related to caching
    vs. state related to the TOC, etc.

-   `utils/` - Utilities used by other scripts. This code should be only TypeScript (i.e., no TSX files). Code in this folder can be
    tested independently without a fully-loaded page.

### Testing

Automated testing is done with [Jest](https://jestjs.io/) and the [Puppeteer](https://devdocs.io/puppeteer/) library, which runs a headless
version of Chrome that can be interacted with via Javascript. This allows for full UI tests that measure actual
browser behavior. These tests are called _End to End_ (`e2e`) tests and are located in `tests/*e2e.test.js`.

To run the tests, you first must build the react interface with

```
npm run build
```

To run the tests one time (like is done on the CI server), run

```
npm run test:e2e-with-setup-and-teardown
```

In development it is useful to have tests re-run every time you modify a test file. This can be done via

```
npm run test:serve
npm run test:e2e-watch
```

This will rerun the tests every time a file is changed (though if you change a React file, you will need to rerun `npm run build`).

It is often helpful to run the test server (`npm run test:serve`) and the tests (`npm run test:e2e-watch`) in separate terminals
so their output is not intermixed.

#### The Test Server

The test server run with `npm run test:serve` will serve files by default from `pretext-react-compiled-article/html-testing`
and will fall back to `build/` if the files cannot be found.

#### Testing Tips

Headless testing is hard because you don't really know what the page "looks like" at a particular time.
However, adding

```javascript
await page.screenshot({ path: `test-screenshot.png` });
```

will save a snapshot (image) of the current page state for extra debugging ease!
