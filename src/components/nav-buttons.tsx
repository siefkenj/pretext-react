import React from "react";
import { Button, Toolbar, ToolbarItem, useToolbarState } from "reakit";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { navActions, nextPrevParentSelector } from "../features/nav/navSlice";

export function NavButtons() {
    const toolbar = useToolbarState();
    const navTargets = useAppSelector(nextPrevParentSelector);
    const dispatch = useAppDispatch();

    return (
        <Toolbar {...toolbar} aria-label="Previous/Next Section">
            <ToolbarItem
                {...toolbar}
                as={Button}
                className="previous-button toolbar-item button"
                title={
                    navTargets.prev
                        ? `Previous (${navTargets.prev.title})`
                        : "Previous"
                }
                disabled={!navTargets.prev}
                onClick={() => {
                    if (navTargets.prev) {
                        dispatch(
                            navActions.setCurrentPage(
                                navTargets.prev.id || null
                            )
                        );
                    }
                }}
            >
                Prev
            </ToolbarItem>
            <ToolbarItem
                {...toolbar}
                as={Button}
                title={navTargets.up ? `Up (${navTargets.up.title})` : "Up"}
                className="up-button toolbar-item button"
                disabled={!navTargets.up}
                onClick={() => {
                    if (navTargets.up) {
                        dispatch(
                            navActions.setCurrentPage(navTargets.up.id || null)
                        );
                    }
                }}
            >
                Up
            </ToolbarItem>
            <ToolbarItem
                {...toolbar}
                as={Button}
                title={
                    navTargets.next ? `Next (${navTargets.next.title})` : "Next"
                }
                className="next-button toolbar-item button"
                disabled={!navTargets.next}
                onClick={() => {
                    if (navTargets.next) {
                        dispatch(
                            navActions.setCurrentPage(
                                navTargets.next.id || null
                            )
                        );
                    }
                }}
            >
                Next
            </ToolbarItem>
        </Toolbar>
    );
}
