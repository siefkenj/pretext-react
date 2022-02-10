import React from "react";
import { Button } from "reakit";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { tocActions, tocIsVisibleSelector } from "../../features/toc/tocSlice";

export function TocVisibilityToggle() {
    const visible = useAppSelector(tocIsVisibleSelector);
    const dispatch = useAppDispatch();

    return (
        <Button
            onClick={() => {
                dispatch(tocActions.setVisible(!visible));
            }}
            className={`sidebar-left-toggle-button button ${
                visible ? "active" : ""
            }`}
        >
            Contents
        </Button>
    );
}
