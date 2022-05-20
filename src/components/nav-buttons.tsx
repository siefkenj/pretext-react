import React from "react";
import Chevron from "react-chevron";
import { Toolbar, ToolbarItem, useToolbarState } from "reakit";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { navActions, nextPrevParentSelector } from "../features/nav/navSlice";
import { InternalAnchor } from "./links";

export function NavButtons() {
    const toolbar = useToolbarState();
    const navTargets = useAppSelector(nextPrevParentSelector);
    const dispatch = useAppDispatch();

    return (
        <Toolbar
            {...toolbar}
            aria-label="Previous/Next Section"
            className="treebuttons"
        >
            <ToolbarItem
                {...toolbar}
                as={InternalAnchor}
                href={navTargets.prev?.id || "#"}
                className="previous-button button"
                title={
                    navTargets.prev
                        ? `Previous (${navTargets.prev.title})`
                        : "Previous"
                }
                disabled={!navTargets.prev}
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    if (navTargets.prev) {
                        dispatch(
                            navActions.setCurrentPage(
                                navTargets.prev.id || null
                            )
                        );
                    }
                }}
            >
                <span className="icon">&lt;</span>
                <span className="name">Prev</span>
            </ToolbarItem>
            <ToolbarItem
                {...toolbar}
                as={InternalAnchor}
                href={navTargets.up?.id || "#"}
                title={navTargets.up ? `Up (${navTargets.up.title})` : "Up"}
                className="up-button button"
                disabled={!navTargets.up}
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    if (navTargets.up) {
                        dispatch(
                            navActions.setCurrentPage(navTargets.up.id || null)
                        );
                    }
                }}
            >
                <span className="icon">^</span>
                <span className="name">Up</span>
            </ToolbarItem>
            <ToolbarItem
                {...toolbar}
                as={InternalAnchor}
                href={navTargets.next?.id || "#"}
                title={
                    navTargets.next ? `Next (${navTargets.next.title})` : "Next"
                }
                className="next-button button"
                disabled={!navTargets.next}
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    if (navTargets.next) {
                        dispatch(
                            navActions.setCurrentPage(
                                navTargets.next.id || null
                            )
                        );
                    }
                }}
            >
                <span className="name">Next</span>
                <span className="icon">&gt;</span>
            </ToolbarItem>
        </Toolbar>
    );
}
