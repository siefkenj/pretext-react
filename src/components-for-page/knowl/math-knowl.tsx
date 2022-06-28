import React from "react";
import { useAppDispatch, useAppSelector } from "../../state-management/hooks";
import {
    knowlActions,
    visibleKnowlsSelector,
} from "../../state-management/redux-slices/knowl/knowl-slice";

function clickedMathKnowl(
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
) {
    const container = e.currentTarget;
    const clickedElm = e.target;
    let node: Element | null = clickedElm as Element;
    while (node && node !== container) {
        if (node.matches("[data-knowl]")) {
            return node;
        }
        node = node.parentElement;
    }
    return false;
}

/**
 * A wrapper for MathJax display math that monitors for click events.
 * When a click is detected, a check is performed to see if a knowl link was
 * clicked
 */
export function MathKnowl({
    children,
    id,
    knowlIds,
    className,
    ...rest
}: React.PropsWithChildren<
    React.ComponentProps<"div"> & { knowlIds: { url: string; id: string }[] }
>) {
    const dispatch = useAppDispatch();
    const visibleKnowls = useAppSelector(visibleKnowlsSelector);
    const urlToIdMap = React.useMemo(
        () => Object.fromEntries(knowlIds.map(({ id, url }) => [url, id])),
        [knowlIds]
    );

    const doClick = React.useCallback(
        function doClick(knowlTrigger: Element) {
            const knowlUrl = knowlTrigger.getAttribute("data-knowl");
            console.log("Math knowl clicked", knowlUrl);
            const knowlId = urlToIdMap[knowlUrl || ""];
            dispatch(
                knowlActions.setVisible({ [knowlId]: !visibleKnowls[knowlId] })
            );
        },
        [visibleKnowls, dispatch, urlToIdMap]
    );

    // We cannot attach to the knowl links directly because we have no idea when MathJax will
    // render them. Instead we listen to all events and detect on-the-fly whether we've clicked one.

    // Since we're not actually looking for clicks on the "parent", the accessibility lints give
    // false positives; we disable them.
    /* eslint-disable jsx-a11y/interactive-supports-focus, jsx-a11y/no-static-element-interactions */
    return (
        <div
            id={id}
            className={className}
            {...rest}
            data-watching
            onClick={(e) => {
                const knowlTrigger = clickedMathKnowl(e);
                if (!knowlTrigger) {
                    return;
                }
                e.preventDefault();
                e.stopPropagation();
                doClick(knowlTrigger);
            }}
            onKeyDown={(e) => {
                if (e.key !== "Enter") {
                    return;
                }
                const knowlTrigger = clickedMathKnowl(e);
                if (!knowlTrigger) {
                    return;
                }
                e.preventDefault();
                e.stopPropagation();
                doClick(knowlTrigger);
            }}
        >
            {children}
        </div>
    );
}
