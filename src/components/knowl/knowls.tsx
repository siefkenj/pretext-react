import { DOMNode, Element as HtmlReactParserElement } from "html-react-parser";
import React from "react";
import ReactDOM from "react-dom";
import { extractKnowlContent } from "../../utils/extract-content";
import { ParserContext } from "../content-page";
import { PreparedParsers } from "../content-page/types";
import { MathJaxRenderer } from "../mathjax";

export function replaceKnowlIfNeeded(node: DOMNode, parsers: PreparedParsers) {
    if (!(node instanceof HtmlReactParserElement) || !(node.name === "a")) {
        return;
    }
    const knowlLoc = node.attribs["data-knowl"];
    const refId = node.attribs["data-refid"];
    if (!knowlLoc && !refId) {
        return;
    }
    if (refId) {
        return (
            <PreloadedKnowl
                refId={refId}
                className={node.attribs["class"]}
                title={node.attribs.title}
            >
                {parsers.domToReact(node.children)}
            </PreloadedKnowl>
        );
    }
    return (
        <Knowl
            url={knowlLoc}
            className={node.attribs["class"]}
            title={node.attribs.title}
        >
            {parsers.domToReact(node.children)}
        </Knowl>
    );
}

export function Knowl({
    children,
    url,
    ...rest
}: React.PropsWithChildren<{ url: string } & React.ComponentProps<"a">>) {
    const knowlContentContainerRef = React.useRef<HTMLElement | null>(null);
    const [contentVisible, setContentVisible] = React.useState(false);

    const refCallback = React.useCallback((node: Element | null) => {
        if (node != null) {
            const parent = node.parentElement || document.body;
            const container = document.createElement("div");
            container.classList.add("knowl-portal");
            parent.insertAdjacentElement("afterend", container);
            knowlContentContainerRef.current = container;
        }
    }, []);

    // Knowl elements are rendered on anchors inside of paragraphs (often with punctuation following). Since
    // they expand, we don't want to insert them immediately after the anchor, so we use a portal.

    return (
        <React.Fragment>
            <a
                ref={refCallback}
                {...rest}
                href={url}
                onClick={(e) => {
                    e.preventDefault();
                    console.log("Knowl clicked", url);
                    setContentVisible(!contentVisible);
                }}
                data-knowl
            >
                {children}
            </a>
            {knowlContentContainerRef.current &&
                ReactDOM.createPortal(
                    <KnowlContent show={contentVisible} url={url} />,
                    knowlContentContainerRef.current
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
        setRenderedContent(parser.parser(fetchedData));
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

function PreloadedKnowl({
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
