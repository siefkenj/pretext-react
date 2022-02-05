import * as React from "react";
import { useAppSelector } from "../../app/hooks";
import { currentPageSelector, tocSelector } from "../../features/nav/navSlice";
import { TocEntryType } from "../../utils/extract-toc";
import { staticallyRenderMathJax } from "../../utils/html-manipulation/static-render";
import { InternalAnchor } from "../links";
import { MathJaxOneTimeRenderer } from "../mathjax";

function TocEntry({ entry }: { entry: TocEntryType }) {
    const currentPage = useAppSelector(currentPageSelector);
    const [innerHtml, setInnerHtml] = React.useState(entry.title || "");

    React.useEffect(() => {
        if ((entry.title || "").includes("process-math")) {
            staticallyRenderMathJax(entry.title || "").then((rendered) =>
                setInnerHtml(rendered)
            );
        }
    }, [entry.title]);

    const shouldRenderCodeNumber = !!entry.codeNumber && (entry.level || 0) < 3;

    // We never render divisions with empty headers.
    const children = entry.children
        ? entry.children.filter((child) => child.title)
        : [];
    const shouldRenderChildren = children.length > 0;

    return (
        <li
            className={`link ${currentPage === entry.id ? "active" : ""} ${
                entry.type
            }`}
        >
            <MathJaxOneTimeRenderer>
                <InternalAnchor
                    href={entry.href || "#"}
                    pageId={entry.id || undefined}
                    className={currentPage === entry.id ? "active" : ""}
                >
                    {shouldRenderCodeNumber && (
                        <span className="codenumber">{entry.codeNumber}</span>
                    )}
                    <span
                        className="title"
                        dangerouslySetInnerHTML={{ __html: innerHtml }}
                    ></span>
                </InternalAnchor>
            </MathJaxOneTimeRenderer>
            {shouldRenderChildren && (
                <ul
                    className={
                        entry.level
                            ? `division-level-${entry.level}`
                            : undefined
                    }
                >
                    {children.map((entry, i) => (
                        <TocEntry entry={entry} key={entry.id || i} />
                    ))}
                </ul>
            )}
        </li>
    );
}

export function Toc() {
    const toc = useAppSelector(tocSelector);
    return (
        <ul>
            {toc.map((entry, i) => (
                <TocEntry entry={entry} key={entry.id || i} />
            ))}
        </ul>
    );
}
