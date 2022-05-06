import React from "react";
import { Button } from "reakit";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { inMobileModeSelector } from "../../features/global/globalSlice";
import { tocActions, tocIsVisibleSelector } from "../../features/toc/tocSlice";

export function TocVisibilityToggle() {
    const visible = useAppSelector(tocIsVisibleSelector);
    const inMobileMode = useAppSelector(inMobileModeSelector);
    const dispatch = useAppDispatch();

    return (
        <Button
            onClick={() => {
                // In mobile mode, we re-route to the TOC instead of making it visible.
                if (inMobileMode) {
                    window.location.hash = "#toc";
                } else {
                    dispatch(tocActions.setVisible(!visible));
                }
            }}
            className={`toc-toggle button ${
                visible ? "active" : ""
            }`}
        >
                <span className="icon">☰</span>
                <span className="name">Contents</span>
        </Button>
    );
}
