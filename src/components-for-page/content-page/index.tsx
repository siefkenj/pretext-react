import React from "react";
import md5 from "crypto-js/md5";
import { CachedComponent } from "../../components-common/cached-component";
import { PreparedParsers } from "./types";
import { htmlToComponent } from "../../replacers/process-content";
import { useAppSelector } from "../../state-management/hooks";
import { domCachingSelector } from "../../state-management/redux-slices/global/global-slice";

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
    const existingIdsRef = React.useRef<Set<string>>(new Set());
    const domCaching = useAppSelector(domCachingSelector);

    const parseString = React.useCallback(
        (html: string) => {
            const { component, data } = htmlToComponent(
                html,
                existingIdsRef.current,
                "" + md5(html)
            );
            // If DOM caching is enabled, we need to keep a globally-unique list of ids.
            // If we don't we might create an id that is duplicated on a hidden page.
            // With DOM caching disabled, hidden pages are fully removed from the DOM,
            // so they shouldn't cause an issue.
            if (data.hastDom && domCaching) {
                for (const id of Object.keys(
                    (data.hastDom.slugger as any)?.occurrences
                ) || []) {
                    existingIdsRef.current.add(id);
                }
            }
            return component;
        },
        [domCaching]
    );
    // Render the content on demand. Since the content is cached, it will not
    // need to be re-rendered when it is asked to be displayed again.
    const childRenderer = React.useCallback(() => {
        return parseString(content);
    }, [content, parseString]);

    const contentNode = document.querySelector(".ptx-content");
    React.useEffect(() => {
        // On the first mount of this component, we want to clear the contents of `contentNode`
        // so that it is take over by the react portal.
        if (!haveClearedInnerHtml && contentNode) {
            contentNode.innerHTML = "";
            setHaveClearedInnerHtml(true);
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
            <CachedComponent
                cacheId={"" + md5(content)}
                childRenderer={childRenderer}
            />
        </ParserContext.Provider>
    );
}
