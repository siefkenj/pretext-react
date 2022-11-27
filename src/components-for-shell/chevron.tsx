import React from "react";

const DEFAULT_ANGLES = { left: 180, right: 0, up: 270, down: 90 } as const;

/**
 * Returns `a mod b` but always forces a positive result
 */
function posMod(a: number, b: number): number {
    return ((a % b) + b) % b;
}

/**
 * Render a chevron pointed in the specified direction. The chevron will animate if the direction is changed.
 */
export function Chevron({
    direction,
    animate = true,
}: {
    direction: "right" | "left" | "up" | "down";
    animate?: boolean;
}) {
    const [angle, setAngle] = React.useState<number>(DEFAULT_ANGLES[direction]);
    React.useEffect(() => {
        // Force a positive angle between 0 and 360
        const normalizedAngle = posMod(angle, 360);
        if (normalizedAngle === DEFAULT_ANGLES[direction]) {
            // Nothing to do
            return;
        }

        // Find the "shortest" angle change to get to the new angle
        const negChange = posMod(
            normalizedAngle - DEFAULT_ANGLES[direction],
            360
        );
        const posChange = 360 - negChange;
        if (negChange <= posChange) {
            setAngle(angle - negChange);
        } else {
            setAngle(angle + posChange);
        }
    }, [direction, angle, setAngle]);

    return (
        <span
            style={{
                display: "inline-block",
                verticalAlign: "middle",
            }}
        >
            <div
                style={{
                    transform: `rotate(${angle}deg)`,
                    transition: animate ? "transform 0.5s" : "",
                    width: 12,
                    height: 12,
                    margin: 2,
                    position: "relative",
                }}
            >
                <svg
                    className="chevron-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 66.8 120.5"
                    style={{
                        position: "absolute",
                        top: 1,
                        left: 1,
                        fill: "currentcolor",
                        height: "calc(100% - 2px)",
                        width: "calc(100% - 2px)",
                    }}
                >
                    <path d="M1.92,118.58h0a6.55,6.55,0,0,1,0-9.27L51,60.25,1.92,11.19a6.55,6.55,0,0,1,0-9.27h0a6.55,6.55,0,0,1,9.27,0l53.69,53.7a6.55,6.55,0,0,1,0,9.27L11.19,118.58A6.55,6.55,0,0,1,1.92,118.58Z"></path>
                </svg>
            </div>
        </span>
    );
}
