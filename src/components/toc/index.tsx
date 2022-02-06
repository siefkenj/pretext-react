import * as React from "react";
import { useAppSelector } from "../../app/hooks";
import { currentPageSelector, tocSelector } from "../../features/nav/navSlice";
import { TocEntryType } from "../../utils/extract-toc";
import { staticallyRenderMathJax } from "../../utils/html-manipulation/static-render";
import { InternalAnchor } from "../links";
import { MathJaxOneTimeRenderer } from "../mathjax";
import Chevron from "react-chevron";

/**
 * Returns whether or not there is a TOC item with id `childId` that is a child of the
 * TOC item with id `selfId`.
 */
function isTocChild(toc: TocEntryType[], selfId: string, childId: string) {
    function search(
        items: TocEntryType[],
        targetId: string
    ): TocEntryType | undefined {
        for (const item of items) {
            if (item.id === targetId) {
                return item;
            }
            if (item.children) {
                const found = search(item.children, targetId);
                if (found) {
                    return found;
                }
            }
        }
    }
    const self = search(toc, selfId);
    if (!self) {
        throw new Error(`Could not find item with id "${selfId}" in TOC`);
    }
    return !!search(self.children || [], childId);
}

function TocEntry({ entry }: { entry: TocEntryType }) {
    const currentPage = useAppSelector(currentPageSelector);
    const toc = useAppSelector(tocSelector);
    const childTocItemIsActive = isTocChild(
        toc,
        entry.id || "",
        currentPage || ""
    );
    const openStatePreference =
        childTocItemIsActive || entry.id === currentPage;
    const [innerHtml, setInnerHtml] = React.useState(entry.title || "");
    let [openState, setOpenState] = React.useState(openStatePreference);
    const [hasHadInteraction, setHasHadInteraction] = React.useState(false);

    // Until the user clicks something, we should force the nav to be open/closed
    // depending on whether the child's contents are displayed.
    if (!hasHadInteraction) {
        openState = openStatePreference;
    }

    React.useEffect(() => {
        if ((entry.title || "").includes("process-math")) {
            staticallyRenderMathJax(entry.title || "").then((rendered) =>
                setInnerHtml(rendered)
            );
        }
    }, [entry.title]);

    const shouldRenderCodeNumber = !!entry.codeNumber && (entry.level || 0) < 2;

    // We never render divisions with empty headers.
    const children = entry.children
        ? entry.children.filter((child) => child.title)
        : [];
    const shouldRenderChildren = children.length > 0;

    const chevron = shouldRenderChildren ? (
        <span className={`toc-chevron-surround ${openState ? "open" : ""}`}>
            <Chevron direction="right" />
        </span>
    ) : null;

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
                    onClick={() => {
                        setOpenState((state) => !state);
                        setHasHadInteraction(true);
                    }}
                >
                    {shouldRenderCodeNumber && (
                        <span className="codenumber">{entry.codeNumber}</span>
                    )}
                    <span
                        className="title"
                        dangerouslySetInnerHTML={{ __html: innerHtml }}
                    ></span>
                    {chevron}
                </InternalAnchor>
            </MathJaxOneTimeRenderer>
            {shouldRenderChildren && (
                <ul
                    className={`${
                        entry.level ? `division-level-${entry.level}` : ""
                    } ${openState ? "" : "hidden-content"}`}
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
