import React from "react";
import ReactDOM from "react-dom";
import md5 from "crypto-js/md5";
import { CachedComponent } from "../cached-component";
import { PreparedParsers } from "./types";
import { mathJaxDefaultReady } from "../../utils/mathjax";
import { htmlToComponent } from "./process-content";

export const ParserContext = React.createContext<PreparedParsers>({
    parseString: (html) => (
        <div>Default Parser Used. This should have been overridden</div>
    ),
});

/**
 * Render a page's content in the content area. This element returns a portal
 * that is automatically rendered in the correct location.
 */
export function ContentPage({ content }: { content: string }) {
    const [haveClearedInnerHtml, setHaveClearedInnerHtml] =
        React.useState(false);
    const existingIdsRef = React.useRef<string[]>([]);

    const parseString = React.useCallback((html: string) => {
        const { component, data } = htmlToComponent(
            html,
            existingIdsRef.current
        );
        if (data.hastDom) {
            for (const id of Object.keys(
                (data.hastDom.slugger as any)?.occurrences
            ) || []) {
                existingIdsRef.current.push(id);
            }
        }
        return component;
    }, []);
    // Render the content on demand. Since the content is cached, it will not
    // need to be re-rendered when it is asked to be displayed again.
    const childRenderer = React.useCallback(() => {
        return parseString(content);
    }, [content, parseString]);

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

    // Since child components may need to render HTML, we pass down a `parseString` function.
    return (
        <ParserContext.Provider value={{ parseString }}>
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
