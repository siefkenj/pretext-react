import React from "react";
import Chevron from "react-chevron";
import { Toolbar, ToolbarItem, useToolbarState } from "reakit";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { navActions, nextPrevParentSelector } from "../features/nav/navSlice";

export function IndexButton() {
    const toolbar = useToolbarState();
    const navTargets = useAppSelector(nextPrevParentSelector);
    const dispatch = useAppDispatch();

    return (
            <ToolbarItem
                {...toolbar}
                as="a"
                href="index-1.html"
                className="index-button button"
                title="Index"
                onClick={() => {
                        dispatch(
                            navActions.setCurrentPage("index-1")
                        );
                    }
                }
            >
                <span className="name">Index</span>
            </ToolbarItem>
           
    );
}
