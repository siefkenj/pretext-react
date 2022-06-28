import React from "react";
import { ToolbarItem, useToolbarState } from "reakit";
import { useAppDispatch } from "../state-management/hooks";
import { navActions } from "../state-management/redux-slices/nav/nav-slice";

export function IndexButton() {
    const toolbar = useToolbarState();
    const dispatch = useAppDispatch();

    return (
        <ToolbarItem
            {...toolbar}
            as="a"
            href="index-1.html"
            className="index-button button"
            title="Index"
            onClick={() => {
                dispatch(navActions.setCurrentPage("index-1"));
            }}
        >
            <span className="name">Index</span>
        </ToolbarItem>
    );
}
