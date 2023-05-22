import React from "react";
import classNames from "classnames";
import { Button } from "@ariakit/react";
import { useAppDispatch, useAppSelector } from "../../state-management/hooks";
import {
    knowlActions,
    visibleKnowlsSelector,
} from "../../state-management/redux-slices/knowl/knowl-slice";
import { extractKnowlContent } from "../../components-for-shell/utils/extract-content";
import { Accordion } from "../../components-common/accordion";
import { ParserContext } from "../content-page";
import { MathJaxOneTimeRenderer, MathJaxRenderer } from "../mathjax";

/**
 * Returns the closest ancestor that has the class `className`.
 */
function getParentWithClass(
    elm: Element | null | undefined,
    className: string
) {
    if (!elm) {
        return null;
    }
    let base = elm.parentElement;
    while (base) {
        if (base.classList.contains(className)) {
            return base;
        }
        base = base.parentElement;
    }
    return null;
}

/**
 * Looks for a parent with the `knowl-container-top` class and toggles the class `hidden-content`
 * on that element. If no such parent exists, the function exists.
 */
export function toggleKnowlContainerTopHiddenValue(
    knowlContainer: Element | null,
    contentVisible: boolean
) {
    if (knowlContainer) {
        const containerTop = getParentWithClass(
            knowlContainer,
            "knowl-container-top"
        );
        if (containerTop && contentVisible) {
            containerTop.classList.remove("hidden-content");
        } else if (containerTop && !contentVisible) {
            containerTop.classList.add("hidden-content");
        }
    }
}

/**
 * A link that, when pressed, triggers a knowl's content to be displayed. This component
 * isn't responsible for actually displaying the content. That is handled by `KnowlContainer`.
 */
export function Knowl({
    children,
    url,
    containerId,
    className,
    ...rest
}: React.PropsWithChildren<
    { url: string; containerId: string } & Pick<
        React.ComponentProps<"a">,
        "title" | "className" | "id"
    >
>) {
    const visibleKnowls = useAppSelector(visibleKnowlsSelector);
    const contentVisible = visibleKnowls[containerId];
    const dispatch = useAppDispatch();

    return (
        <Button
            as="a"
            className={classNames(className, { active: contentVisible })}
            {...rest}
            href={url}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                console.log("Knowl clicked", url);
                dispatch(
                    knowlActions.setVisible({ [containerId]: !contentVisible })
                );
            }}
            data-knowl
            data-knowl-container-id={containerId}
        >
            {children}
        </Button>
    );
}

export function KnowlContent({ show, url }: { show: boolean; url: string }) {
    const parser = React.useContext(ParserContext);
    const fetchingRef = React.useRef(false);
    const [fetchedData, setFetchedData] = React.useState<string | null>(null);
    const [renderedContent, setRenderedContent] =
        React.useState<React.ReactNode>(null);

    React.useEffect(() => {
        if (
            show === true &&
            fetchedData == null &&
            fetchingRef.current === false
        ) {
            // If we're here, we have not yet fetched the knowl's content.
            fetchingRef.current = true;
            fetch(url)
                .then(async (resp) => {
                    const data = await resp.text();
                    // We only want to store the knowl's content, so we strip
                    // away the header, etc.
                    setFetchedData(extractKnowlContent(data).innerHTML);
                })
                .finally(() => {
                    fetchingRef.current = false;
                });
        }
    }, [show, fetchedData, url]);

    React.useEffect(() => {
        if (!fetchedData) {
            return;
        }
        setRenderedContent(parser.parseString(fetchedData));
    }, [fetchedData, parser]);

    if (!show) {
        return null;
    }

    const body = renderedContent || "Content not yet loaded...";

    return (
        <div className="knowl">
            {renderedContent ? <MathJaxRenderer>{body}</MathJaxRenderer> : body}
        </div>
    );
}

export function PreloadedKnowl({
    children,
    className,
    refId,
    ...rest
}: { refId: string } & Pick<
    React.ComponentProps<"a">,
    "title" | "className" | "id" | "children"
>) {
    const visibleKnowls = useAppSelector(visibleKnowlsSelector);
    const contentVisible = visibleKnowls[refId];
    const dispatch = useAppDispatch();

    React.useEffect(() => {}, [contentVisible, refId]);

    const activeClass = contentVisible ? "active" : "";

    return (
        <Button
            as="a"
            href="#"
            {...rest}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                console.log("Preloaded Knowl clicked", refId);
                dispatch(knowlActions.setVisible({ [refId]: !contentVisible }));
            }}
            data-knowl
            tabIndex={0}
            className={className ? `${className} ${activeClass}` : activeClass}
        >
            {children}
        </Button>
    );
}

export function PreloadedKnowlContent({
    children,
    id,
    className,
}: React.PropsWithChildren<{
    id: string | undefined;
    className: string;
}>) {
    const visibleKnowls = useAppSelector(visibleKnowlsSelector);
    const contentVisible = visibleKnowls[id || ""];
    return (
        <Accordion open={contentVisible}>
            {
                // We need to completely suppress the rendering of children here,
                // otherwise they will be invisible but still have a tab-index set
                // and thus could steal focus.
                contentVisible && (
                    <MathJaxOneTimeRenderer>
                        <div id={id} className={className}>
                            {children}
                        </div>
                    </MathJaxOneTimeRenderer>
                )
            }
        </Accordion>
    );
}
