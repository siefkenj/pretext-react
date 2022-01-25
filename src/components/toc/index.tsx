import * as React from "react";
import { useAppSelector } from "../../app/hooks";
import { currentPageSelector, tocSelector } from "../../features/nav/navSlice";
import { TocEntryType } from "../../utils/extract-toc";
import { InternalAnchor } from "../links";
import { MathJaxOneTimeRenderer } from "../mathjax";

function TocEntry({ entry }: { entry: TocEntryType }) {
    const currentPage = useAppSelector(currentPageSelector);

    return (
        <li
            className={`link ${currentPage === entry.id ? "active" : ""} ${
                entry.level === "part" ? entry.level : ""
            }`}
        >
            <MathJaxOneTimeRenderer>
                <InternalAnchor
                    href={entry.href || "#"}
                    pageId={entry.id || undefined}
                    className={currentPage === entry.id ? "active" : ""}
                >
                    {entry.codeNumber && (
                        <span className="codenumber">{entry.codeNumber}</span>
                    )}
                    <span className="title">{entry.title}</span>
                </InternalAnchor>
            </MathJaxOneTimeRenderer>
            {entry.children && (
                <ul>
                    {entry.children.map((entry, i) => (
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
