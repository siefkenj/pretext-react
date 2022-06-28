import * as React from "react";
import classNames from "classnames";
import { useAppSelector } from "../../state-management/hooks";
import {
    currentPageIdSelector,
    tocSelector,
} from "../../state-management/redux-slices/nav/nav-slice";
import { TocEntryType } from "../utils/extract-toc";
import { InternalAnchor } from "../../components-for-page/links";
import { MathJaxOneTimeRenderer } from "../../components-for-page/mathjax";
import Chevron from "react-chevron";
import { Accordion } from "../../components-common/accordion";
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
    let [openState, setOpenState] = React.useState(openStatePreference);
    const [hasHadInteraction, setHasHadInteraction] = React.useState(false);

    // Until the user clicks something, we should force the nav to be open/closed
    // depending on whether the child's contents are displayed.
    if (!hasHadInteraction) {
        openState = openStatePreference;
    }

    const shouldRenderCodeNumber =
        (!!entry.codeNumber && (entry.level || 0) < 3) || true;

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
                            dangerouslySetInnerHTML={{
                                __html: entry.title || "",
                            }}
                        ></span>
                    </InternalAnchor>
                    {chevron}
                </div>
            </MathJaxOneTimeRenderer>
            {shouldRenderChildren && (
                <Accordion open={openState}>
                    <ul
                        className={classNames(
                            {
                                [`division-level-${entry.level}`]: entry.level,
                            },
                            "structural"
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
    let toc = useAppSelector(tocSelector);
    if (toc.length === 1) {
        // If the root TOC consists of exactly one item, assume that its children are what
        // we really want to render.
        toc = toc[0].children || [];
    }

    return (
        <ul>
            {toc.map((entry, i) => (
                <TocEntry entry={entry} key={entry.id || i} />
            ))}
        </ul>
    );
}
