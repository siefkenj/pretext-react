import React from "react";
import classNames from "classnames";
import ResizeObserver from "resize-observer-polyfill";

import "./accordion.css";

type TransitionStatus = "entering" | "entered" | "exiting" | "exited" | null;

/**
 * Provide a transitions state `"entering" | "entered" | "exiting" | "exited"`
 * triggered whenever `active` changes. Transitions to the `*ed` state
 * after `delay` number of milliseconds.
 */
function useTransition(active: boolean, delay: number) {
    const [prevActive, setPrevActive] = React.useState<boolean | null>(null);
    const [status, setStatus] = React.useState<TransitionStatus>(null);
    const timeoutRef = React.useRef<number | null>(null);
    const lastTimeActivatedRef = React.useRef<number>(0);

    React.useEffect(() => {
        // Receiving the same state twice means we do nothing
        if (active === prevActive) {
            return;
        }

        const status = active === true ? "entering" : "exiting";
        setPrevActive(active);
        setStatus(status);

        if (timeoutRef.current != null) {
            clearTimeout(timeoutRef.current);
        }
        // If we transitioned "partway" through, we want reverse
        // symmetrically rather than spend the whole `delay` for the second transition.
        const adjustedDelay = Math.min(
            delay,
            Date.now() - lastTimeActivatedRef.current
        );
        lastTimeActivatedRef.current = Date.now();

        timeoutRef.current = window.setTimeout(() => {
            setStatus((status) => {
                if (status === "entering") {
                    return "entered";
                }
                if (status === "exiting") {
                    return "exited";
                }
                console.log("couldn't decide state", status);
                return status;
            });
        }, adjustedDelay);
    }, [active, prevActive, delay]);

    return status;
}

/**
 * An `Accordion` hides or reveals its children with an animation. In order to animate,
 * it must add several `<div>`s around the content. Transition animations happen automatically
 * whenever the `open` state changes.
 */
export function Accordion({
    open,
    children,
}: React.PropsWithChildren<{ open: boolean }>) {
    const state = useTransition(open, 400);

    return <AccordionInner status={state} children={children} />;
}

export function AccordionInner({
    status,
    children: propsChildren,
}: React.PropsWithChildren<{
    status: TransitionStatus;
}>) {
    const innerContainerRef = React.useRef<HTMLDivElement>(null);
    const outerContainerRef = React.useRef<HTMLDivElement>(null);
    const [innerContainerHeight, setInnerContainerHeight] = React.useState<
        number | null
    >(null);
    const [children, setChildren] = React.useState(propsChildren);

    // Keep track of the inner div's size. CSS handles the animation,
    // but we are in charge of setting our max-size.
    React.useEffect(() => {
        if (
            innerContainerRef.current == null ||
            outerContainerRef.current == null
        ) {
            return;
        }
        const innerResizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setInnerContainerHeight(entry.contentRect.height);
            }
        });
        innerResizeObserver.observe(innerContainerRef.current);
        return () => {
            innerResizeObserver.disconnect();
        };
    }, []);

    React.useEffect(() => {
        if (status === "entering" || status === "exited") {
            setChildren(propsChildren);
        }
    }, [propsChildren, status]);

    const open = status === "entering" || status === "entered";

    return (
        <div
            ref={outerContainerRef}
            className={classNames("accordion-surround", {
                open,
                animate: status === "entering" || status === "exiting",
            })}
            style={{
                maxHeight:
                    open && innerContainerHeight != null
                        ? innerContainerHeight
                        : 0,
                height:
                    open && innerContainerHeight != null
                        ? innerContainerHeight
                        : 0,
            }}
        >
            <div className="accordion-inner-container" ref={innerContainerRef}>
                {children}
            </div>
        </div>
    );
}
