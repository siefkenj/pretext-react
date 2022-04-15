import React from "react";

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
    className,
    ...rest
}: React.PropsWithChildren<React.ComponentProps<"div">>) {
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
                const knowlUrl = knowlTrigger.getAttribute("data-knowl");
                console.log(
                    "Triggered math knowl with URL",
                    knowlUrl,
                    "Math knowls are not implemented yet."
                );
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
                const knowlUrl = knowlTrigger.getAttribute("data-knowl");
                console.log(
                    "Triggered math knowl with URL",
                    knowlUrl,
                    "Math knowls are not implemented yet."
                );
            }}
        >
            {children}
        </div>
    );
}
