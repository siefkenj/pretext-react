import React from "react";
import Chevron from "react-chevron";
import { Toolbar, ToolbarItem, useToolbarState } from "reakit";
import { useAppSelector } from "../app/hooks";
import { nextPrevParentSelector } from "../features/nav/navSlice";
import { InternalAnchor } from "./links";

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
                className="previous-button toolbar-item button"
                title={
                    navTargets.prev
                        ? `Previous (${navTargets.prev.title})`
                        : "Previous"
                }
                disabled={!navTargets.prev}
            >
                <span className="icon">
                    <Chevron direction="left" />
                </span>
                <span className="name">Prev</span>
            </ToolbarItem>
            <ToolbarItem
                {...toolbar}
                as={InternalAnchor}
                href={navTargets.up?.href || "#"}
                title={navTargets.up ? `Up (${navTargets.up.title})` : "Up"}
                className="up-button toolbar-item button"
                disabled={!navTargets.up}
            >
                <span className="icon">
                    <Chevron direction="up" />
                </span>
                <span className="name">Up</span>
            </ToolbarItem>
            <ToolbarItem
                {...toolbar}
                as={InternalAnchor}
                href={navTargets.next?.href || "#"}
                title={
                    navTargets.next ? `Next (${navTargets.next.title})` : "Next"
                }
                className="next-button toolbar-item button"
                disabled={!navTargets.next}
            >
                <span className="name">Next</span>
                <span className="icon">
                    <Chevron direction="right" />
                </span>
            </ToolbarItem>
        </Toolbar>
    );
}
