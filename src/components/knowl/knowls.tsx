import React from "react";
import ReactDOM from "react-dom";
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

export function Knowl({
    children,
    url,
    containerId,
    ...rest
}: React.PropsWithChildren<
    { url: string; containerId: string } & React.ComponentProps<"a">
>) {
    const knowlContentContainerRef = React.useRef<HTMLElement | null>(null);
    const [contentVisible, setContentVisible] = React.useState(false);
    const [knowlContainer, setKnowlContainer] = React.useState(() =>
        document.getElementById(containerId)
    );

    React.useEffect(() => {
        if (!knowlContainer) {
            const container = document.getElementById(containerId);
            setKnowlContainer(container);
            if (container) {
                container.classList.remove("hidden-content");
            }
        }
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
    }, [knowlContainer, contentVisible, containerId]);

    // const refCallback = React.useCallback((node: Element | null) => {
    //     if (node != null) {
    //         const parent = node.parentElement || document.body;
    //         const container = document.createElement("div");
    //         container.classList.add("knowl-portal");
    //         parent.insertAdjacentElement("afterend", container);
    //         knowlContentContainerRef.current = container;
    //     }
    // }, []);

    // Knowl elements are rendered on anchors inside of paragraphs (often with punctuation following). Since
    // they expand, we don't want to insert them immediately after the anchor, so we use a portal.

    return (
        <React.Fragment>
            <a
                //    ref={refCallback}
                {...rest}
                href={url}
                onClick={(e) => {
                    e.preventDefault();
                    console.log("Knowl clicked", url);
                    setContentVisible(!contentVisible);
                }}
                data-knowl
                data-knowl-container-id={containerId}
            >
                {children}
            </a>
            {knowlContainer &&
                ReactDOM.createPortal(
                    <KnowlContent show={contentVisible} url={url} />,
                    knowlContainer
                )}
        </React.Fragment>
    );
}

function KnowlContent({ show, url }: { show: boolean; url: string }) {
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
        const knowlContent = document.getElementById(refId);
        if (!knowlContent) {
            console.log("Could not find knowl with id", refId);
            return;
        }
        if (contentVisible) {
            knowlContent.style.setProperty("display", "block");
        } else {
            knowlContent.style.removeProperty("display");
        }
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
