import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
    knowlActions,
    visibleKnowlsSelector,
} from "../../features/knowl/knowlSlice";
import { extractKnowlContent } from "../../utils/extract-content";
import { ParserContext } from "../content-page";
import { MathJaxRenderer } from "../mathjax";

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
    ...rest
}: React.PropsWithChildren<
    { url: string; containerId: string } & React.ComponentProps<"a">
>) {
    const visibleKnowls = useAppSelector(visibleKnowlsSelector);
    const contentVisible = visibleKnowls[containerId];
    const dispatch = useAppDispatch();

    return (
        <a
            //    ref={refCallback}
            {...rest}
            href={url}
            onClick={(e) => {
                e.preventDefault();
                console.log("Knowl clicked", url);
                dispatch(
                    knowlActions.setVisible({ [containerId]: !contentVisible })
                );
                // setContentVisible(!contentVisible);
            }}
            data-knowl
            data-knowl-container-id={containerId}
        >
            {children}
        </a>
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
        <div className="knowl-output" style={{ display: "block" }}>
            <div className="knowl">
                <div className="knowl-content">
                    {renderedContent ? (
                        <MathJaxRenderer>{body}</MathJaxRenderer>
                    ) : (
                        body
                    )}
                </div>
            </div>
        </div>
    );
}

export function PreloadedKnowl({
    children,
    className,
    refId,
    ...rest
}: { refId: string } & React.ComponentProps<"a">) {
    const [contentVisible, setContentVisible] = React.useState(false);

    React.useEffect(() => {
        const knowlContainer = document.getElementById(refId);
        if (!knowlContainer) {
            console.log("Could not find knowl with id", refId);
            return;
        }
        if (contentVisible) {
            knowlContainer.style.setProperty("display", "block");
        } else {
            knowlContainer.style.removeProperty("display");
        }
        toggleKnowlContainerTopHiddenValue(knowlContainer, contentVisible);
    }, [contentVisible, refId]);

    const activeClass = contentVisible ? "active" : "";

    return (
        <a
            {...rest}
            onClick={(e) => {
                e.preventDefault();
                console.log("Preloaded Knowl clicked", refId);
                setContentVisible(!contentVisible);
            }}
            onKeyDown={() => {}}
            data-knowl
            role="button"
            tabIndex={0}
            className={className ? `${className} ${activeClass}` : activeClass}
        >
            {children}
        </a>
    );
}
