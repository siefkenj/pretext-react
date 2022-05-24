import * as React from "react";
import classNames from "classnames";
import { useAppSelector } from "../../app/hooks";
import { currentPageIdSelector, tocSelector } from "../../features/nav/navSlice";
import { TocEntryType } from "../../utils/extract-toc";
import { staticallyRenderMathJax } from "../../utils/html-manipulation/static-render";
import { InternalAnchor } from "../links";
import { MathJaxOneTimeRenderer } from "../mathjax";
import Chevron from "react-chevron";
import { Accordion } from "../accordion";
import { Button } from "reakit";

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
    const currentPage = useAppSelector(currentPageIdSelector);
    const toc = useAppSelector(tocSelector);
    const childTocItemIsActive = isTocChild(
        toc,
        entry.id || "",
        currentPage || ""
    );
    const openStatePreference =
        childTocItemIsActive || entry.id === currentPage || entry.level === 2;
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

    const shouldRenderCodeNumber = !!entry.codeNumber && (entry.level || 0) < 3;

    // We never render divisions with empty headers.
    const children = entry.children
        ? entry.children.filter((child) => child.title)
        : [];
    const shouldRenderChildren = children.length > 0;

    const chevron = shouldRenderChildren ? (
        <Button
            as="span"
            className={`toc-chevron-surround ${openState ? "open" : ""}`}
            title="Toggle sections"
            onClick={() => {
                setOpenState((state) => !state);
                setHasHadInteraction(true);
            }}
        >
            <div className="chevron-rotator">
                <Chevron direction="right" />
            </div>
        </Button>
    ) : null;

    return (
        <li
            className={`link ${currentPage === entry.id ? "active" : ""} ${
                entry.type
            }`}
        >
            <MathJaxOneTimeRenderer>
                <div className="toc-item">
                    <InternalAnchor
                        href={entry.href || "#"}
                        pageId={entry.id || undefined}
                        className={classNames({
                            active: currentPage === entry.id,
                            "has-chevron": chevron,
                        })}
                        onClick={() => {
                            // Auto open sections when we click on them, but don't close
                            // them unless we click the "close arrow"
                            if (!openState) {
                                setOpenState((state) => !state);
                                setHasHadInteraction(true);
                            }
                        }}
                    >
                        {shouldRenderCodeNumber && (
                            <span className="codenumber">
                                {entry.codeNumber}
                            </span>
                        )}
                        <span
                            className="title"
                            dangerouslySetInnerHTML={{ __html: innerHtml }}
                        ></span>
                    </InternalAnchor>
                    {chevron}
                </div>
            </MathJaxOneTimeRenderer>
            {shouldRenderChildren && (
                <Accordion open={openState}>
                    <ul
                        className={classNames({
                            [`division-level-${entry.level}`]: entry.level }, "structural"
                        )}
                    >
                        {children.map((entry, i) => (
                            <TocEntry entry={entry} key={entry.id || i} />
                        ))}
                    </ul>
                </Accordion>
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
