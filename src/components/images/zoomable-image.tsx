import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

/**
 * Wraps an `<img />` tag in a `<Zoom />` element. All props
 * are passed on to the `img`.
 */
export function ZoomableImage({
    className,
    alt,
    ...rest
}: React.ComponentProps<"img">) {
    // Note: the `width` on the `img` tag must be set for `Zoom` to work.
    return (
        <React.Fragment>
            <Zoom>
                <img alt={alt} className={className} {...rest} width={"100%"} />
            </Zoom>
        </React.Fragment>
    );
}
