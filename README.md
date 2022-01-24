# pretext-react

A ReactJS version of the Pretext UI

This interface is a prototype to investigate whether React would provide a suitable
replacement for the current jquery-based UI for Pretext books when rendered on the web.

## Development

To get started, make sure you have `nodejs` and `npm` (Node Package Manager; should
be installed by default with Node) installed. Then, in the `pretext-react` director, run

```
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
