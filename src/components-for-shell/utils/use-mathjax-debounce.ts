import React from "react";
import { globalNumberItemsBeingTypeset } from "./mathjax";

/**
 * Debounce a value and make sure it is not updated unless the specified timeout has
 * been reached AND MathJax is not currently rendering something.
 */
export function useMathJaxDebounce<T extends object>(value: T, delay: number) {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(() => {
        let handler: number | null = null;
        const update = () => {
            if (globalNumberItemsBeingTypeset === 0) {
                setDebouncedValue(value);
            } else {
                // There are items being typeset, so wait a little longer
                console.log("busy typesetting, waiting longer!", globalNumberItemsBeingTypeset)
                handler = window.setTimeout(update, delay);
            }
        };

        handler = window.setTimeout(update, delay);
        return () => {
            if (handler != null) {
                window.clearTimeout(handler);
            }
        };
    }, [value, delay]);

    return debouncedValue;
}
