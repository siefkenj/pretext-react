import React from "react";
import { Button } from "@ariakit/react";
import { InternalAnchor } from "../components-for-page/links";
import { useAppSelector } from "../state-management/hooks";
import {
    currentPageIdSelector,
    indexSelector,
} from "../state-management/redux-slices/nav/selectors";

/**
 * A button to take you to the index page. It renders an "Index" page when on other pages
 * and an index navigator (the letters of the alphabet so that you can click on them) otherwise.
 */
export function IndexButton() {
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
        <Button
            as={InternalAnchor}
            href={indexInfo.url || ""}
            className="index-button button"
            title="Index"
            origin="nav"
        >
            <span className="name">Index</span>
        </Button>
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
                            origin="nav"
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
