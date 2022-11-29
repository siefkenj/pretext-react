import React from "react";
import { Toolbar, ToolbarItem, useToolbarState } from "reakit";
import { useAppSelector } from "../state-management/hooks";
import { nextPrevParentSelector } from "../state-management/redux-slices/nav/selectors";
import { InternalAnchor } from "../components-for-page/links";

export function NavButtons() {
    const toolbar = useToolbarState();
    const navTargets = useAppSelector(nextPrevParentSelector);

    return (
        <Toolbar
            {...toolbar}
            aria-label="Previous/Next Section"
            className="treebuttons"
        >
            <ToolbarItem
                {...toolbar}
                as={InternalAnchor}
                href={navTargets.prev?.href || "#"}
                origin="nav"
                className="previous-button toolbar-item button"
                title={
                    navTargets.prev
                        ? `Previous (${navTargets.prev.title})`
                        : "Previous"
                }
                disabled={!navTargets.prev}
            >
                <span className="icon">&lt;</span>
                <span className="name">Prev</span>
            </ToolbarItem>
            <ToolbarItem
                {...toolbar}
                as={InternalAnchor}
                href={navTargets.up?.href || "#"}
                origin="nav"
                title={navTargets.up ? `Up (${navTargets.up.title})` : "Up"}
                className="up-button button"
                disabled={!navTargets.up}
            >
                <span className="icon">^</span>
                <span className="name">Up</span>
            </ToolbarItem>
            <ToolbarItem
                {...toolbar}
                as={InternalAnchor}
                href={navTargets.next?.href || "#"}
                origin="nav"
                title={
                    navTargets.next ? `Next (${navTargets.next.title})` : "Next"
                }
                className="next-button button"
                disabled={!navTargets.next}
            >
                <span className="name">Next</span>
                <span className="icon">&gt;</span>
            </ToolbarItem>
        </Toolbar>
    );
}
