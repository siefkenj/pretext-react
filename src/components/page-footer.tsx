import React from "react";
import { ToolbarItem, useToolbarState } from "reakit";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { navActions, nextPrevParentSelector } from "../features/nav/navSlice";

export function PageFooter() {
    const toolbar = useToolbarState();
    const navTargets = useAppSelector(nextPrevParentSelector);
    const dispatch = useAppDispatch();

    return (
        <div className="ptx-content-footer">
            <ToolbarItem
                {...toolbar}
                as="a"
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
                as="a"
                href={"#"}
                title={"Top"}
                className="top-button button"
                onClick={() => {
                        dispatch(
                            navActions.setCurrentPage("#")
                        );
                }}
            >
                <span className="icon">^</span>
                <span className="name">Top</span>
            </ToolbarItem>
            <ToolbarItem
                {...toolbar}
                as="a"
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
        </div>
    );
}
