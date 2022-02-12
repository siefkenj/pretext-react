import React from "react";
import { useAppSelector } from "../app/hooks";
import { domCachingSelector } from "../features/global/globalSlice";

type ChildCache = Record<string, React.ReactNode>;

/**
 * A component that caches the dom nodes of everything it is asked to render.
 *
 * `cacheId` should be a unique id associated with the content. If the content with `cacheId`
 * has never been rendered before, `childRenderer` will be called to generate the content.
 * If the content has been rendered before, the previous copy of the content will be used
 * instead of it being re-rendered.
 *
 * All content is kept in the DOM tree but hidden. Only the content corresponding to `cacheId`
 * is displayed.
 */
export function CachedComponent({
    cacheId,
    childRenderer,
}: {
    cacheId: string;
    childRenderer: () => React.ReactNode;
}) {
    const cacheRef = React.useRef<ChildCache>({});
    const cache = cacheRef.current;
    const domCaching = useAppSelector(domCachingSelector);

    if (!domCaching) {
        return (
            <HidableElement hidden={false} cacheId={cacheId} key={cacheId}>
                {childRenderer()}
            </HidableElement>
        );
    }

    // Strict check for undefined, since `null` is a valid react element.
    if (typeof cache[cacheId] === "undefined") {
        cache[cacheId] = childRenderer();
    }

    // DOM caching is the most aggressive form of caching where we render the tree and then hide it if
    // the page shouldn't be shown. It comes with side-effects. For example, videos on a hidden page
    // still exist and might keep playing even when the page is hidden. Further, plugins that scan for
    // content across the whole DOM may try to process too much, or process content they've already
    // processed.
    const children = Object.entries(cache).map(([id, content]) => (
        <HidableElement
            hidden={id !== cacheId}
            key={id}
            cacheId={id}
            children={content}
        />
    ));

    return <React.Fragment>{children}</React.Fragment>;
}

/**
 * Element whose content can be hidden but which is not removed from the DOM.
 */
const HidableElement = React.memo(function HidableElement({
    hidden,
    cacheId,
    children,
}: {
    hidden: boolean;
    cacheId: string;
    children: React.ReactNode;
}) {
    return (
        <div
            className={`component-cache ${hidden ? "hidden" : ""}`}
            id={`component-cache-${cacheId}`}
            aria-hidden={hidden}
            style={{ display: hidden ? "none" : "block" }}
        >
            <StaticChildren children={children} />
        </div>
    );
});

/**
 * A component which always reports to React that it does not need to be rerendered.
 * This should generally not be used, but can give a performance boost.
 */
const StaticChildren = React.memo(
    function StaticChildren({ children }: { children: React.ReactNode }) {
        return <React.Fragment>{children}</React.Fragment>;
    },
    () => true
);
