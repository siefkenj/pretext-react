import classNames from "classnames";
import React from "react";
import { Button } from "@ariakit/react";

/**
 * A wrapper for an `<aside>` element.
 */
export function Aside({
    children,
    id,
    className,
}: React.PropsWithChildren<{ id: string; className: string }>) {
    const [active, setActive] = React.useState(false);

    return (
        <Button
            as="aside"
            id={id}
            className={classNames(className, { front: active })}
            onClick={() => {
                setActive((state) => !state);
            }}
        >
            {children}
        </Button>
    );
}
