import React from "react";
import { Button } from "reakit";
import { useAppDispatch, useAppSelector } from "../../state-management/hooks";
import { tocActions, tocIsVisibleSelector } from "../../state-management/redux-slices/toc/toc-slice";

export function TocVisibilityToggle() {
    const visible = useAppSelector(tocIsVisibleSelector);
    const dispatch = useAppDispatch();

    return (
        <Button
            onClick={() => {
                dispatch(tocActions.setVisible(!visible));
            }}
            className={`toc-toggle button ${visible ? "active" : ""}`}
        >
            <span className="icon">☰</span>
            <span className="name">Contents</span>
        </Button>
    );
}
