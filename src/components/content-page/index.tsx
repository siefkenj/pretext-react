import HTMLReactParser, {
    Element,
    domToReact,
    DOMNode,
    HTMLReactParserOptions,
} from "html-react-parser";
import React from "react";
import ReactDOM from "react-dom";
import md5 from "crypto-js/md5";
import { CachedComponent } from "../cached-component";
import { replaceKnowlIfNeeded } from "../knowl/knowls";
import { replaceSageKnowlIfNeeded } from "../knowl/sage-knowl";
import { InternalAnchor } from "../links";
import { PreparedParsers } from "./types";
import { MathJaxOneTimeRenderer } from "../mathjax";
import {
    fullMathJaxReset,
    mathJaxDefaultReady,
    reTypesetMathJax,
    typesetClear,
} from "../../utils/mathjax";

export const ParserContext = React.createContext<PreparedParsers>({
    parser: (html) => (
        <div>Default Parser Used. This should have been overridden</div>
    ),
    domToReact: (nodes) => (
        <div>Default Parser Used. This should have been overridden</div>
    ),
});

function hasParentWithClass(
    node: DOMNode & Element,
    className: string
): boolean {
    const parent = node.parentNode;
    if (!parent || !(parent instanceof Element)) {
        return false;
    }
    return (
        parent.attribs["class"]?.includes(className) ||
        hasParentWithClass(parent, className)
    );
}

const options: HTMLReactParserOptions = {
    replace: (domNode) => {
        if (
            domNode instanceof Element &&
            domNode.name === "a" &&
            domNode.attribs.class &&
            (domNode.attribs.class?.includes("internal") ||
                hasParentWithClass(domNode, "summary-links"))
        ) {
            return (
                <InternalAnchor
                    href={domNode.attribs.href}
                    className={domNode.attribs["class"]}
                    title={domNode.attribs.title}
                >
                    {domToReact(domNode.children)}
                </InternalAnchor>
            );
        }

        return (
            replaceKnowlIfNeeded(domNode, parsers) ||
            replaceSageKnowlIfNeeded(domNode, parsers)
        );
    },
};
const parsers: PreparedParsers = {
    parser: (html) => HTMLReactParser(html, options),
    domToReact: (nodes) => domToReact(nodes, options),
};

/**
 * Render a page's content in the content area. This element returns a portal
 * that is automatically rendered in the correct location.
 */
export function ContentPage({ content }: { content: string }) {
    const [haveClearedInnerHtml, setHaveClearedInnerHtml] =
        React.useState(false);

    // Render the content on demand. Since the content is cached, it will not
    // need to be re-rendered when it is asked to be displayed again.
    const childRenderer = React.useCallback(
        () => (
            <MathJaxOneTimeRenderer>
                {HTMLReactParser(content, options)}
            </MathJaxOneTimeRenderer>
        ),
        [content]
    );

    const contentNode = document.querySelector("#content");
    React.useEffect(() => {
        // On the first mount of this component, we want to clear the contents of `contentNode`
        // so that it is take over by the react portal.
        if (!haveClearedInnerHtml && contentNode) {
            contentNode.innerHTML = "";
            setHaveClearedInnerHtml(true);

            // We don't start MathJax until after the original page contents has been cleared.
            // This is because MathJax may be quick and typeset the page before we've cleared it.
            // In that case, MathJax may have typeset an equation with a label twice, in which case
            // it will complain.
            window.setTimeout(mathJaxDefaultReady, 10);
        }
    }, [haveClearedInnerHtml, contentNode]);

    // If we haven't cleared the HTML, we wait until that is done to render anything meaningful
    if (!haveClearedInnerHtml) {
        return null;
    }

    if (!contentNode) {
        console.warn("Could not find content node. Page render failed");
        return null;
    }

    // Since child components may need to render HTML, we pass down the necessary parsers.
    return (
        <ParserContext.Provider value={parsers}>
            {ReactDOM.createPortal(
                <CachedComponent
                    cacheId={"" + md5(content)}
                    childRenderer={childRenderer}
                />,
                contentNode
            )}
        </ParserContext.Provider>
    );
}
