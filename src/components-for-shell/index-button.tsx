import React from "react";
import { ToolbarItem, useToolbarState } from "reakit";
import { InternalAnchor } from "../components-for-page/links";
import { useAppDispatch, useAppSelector } from "../state-management/hooks";
import {
    currentPageIdSelector,
    indexSelector,
    navActions,
} from "../state-management/redux-slices/nav/nav-slice";

/**
 * A button to take you to the index page. It renders an "Index" page when on other pages
 * and an index navigator (the letters of the alphabet so that you can click on them) otherwise.
 */
export function IndexButton() {
    const toolbar = useToolbarState();
    const dispatch = useAppDispatch();
    const currentPage = useAppSelector(currentPageIdSelector);
    const indexInfo = useAppSelector(indexSelector);
    const onIndexPage = indexInfo.id && currentPage === indexInfo.id;

    if (!indexInfo.id) {
        return <div className="empty-index-button" />;
    }

    if (onIndexPage) {
        return <IndexNav />;
    }

    return (
        <ToolbarItem
            {...toolbar}
            as="a"
            href={indexInfo.url || ""}
            className="index-button button"
            title="Index"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                dispatch(navActions.setCurrentPage(indexInfo.id));
            }}
        >
            <span className="name">Index</span>
        </ToolbarItem>
    );
}

const LETTERS = Array.from({ length: 26 }).map((_, i) =>
    String.fromCharCode("a".charCodeAt(0) + i)
);

/**
 * Render "Jump to" nav buttons for the index
 */
function IndexNav() {
    return (
        <div className="indexnav">
            <span className="mininav">Jump to:</span>
            <span className="indexjump">
                {LETTERS.flatMap((letter) => {
                    const ret = (
                        <InternalAnchor
                            href={`#indexletter-${letter}`}
                            key={letter}
                        >
                            {letter.toUpperCase()}
                        </InternalAnchor>
                    );
                    if (letter === "m") {
                        // We want to break after the 13th letter
                        return [ret, <div key="br" className="break" />];
                    }
                    return ret;
                })}
            </span>
        </div>
    );
}
