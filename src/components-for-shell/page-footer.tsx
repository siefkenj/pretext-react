import React from "react";

export function PageFooter() {
    return (
        <div className="ptx-page-footer">
            <a
                className="feedback-link"
                href="not-implemented.html"
                target="_blank"
            >
                Feedback
            </a>
            <a
                className="runestone-link"
                href="https://runestone.academy"
                title="Runestone Academy"
            >
                <img
                    className="logo"
                    src="https://runestone.academy/runestone/static/images/RAIcon_cropped.png"
                />
            </a>
            <a
                className="pretext-link"
                href="https://pretextbook.org"
                title="PreTeXt"
            >
                <div className="logo">
                    <PretextIcon />
                </div>
            </a>
            <a
                className="mathjax-logo"
                href="https://www.mathjax.org"
                title="MathJax"
            >
                <img
                    className="logo"
                    src="https://www.mathjax.org/badge/badge-square-2.png"
                />
            </a>
        </div>
    );
}

function PretextIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="338 3000 8772 6866"
            dangerouslySetInnerHTML={{
                __html: `
            <g style="stroke-width:.025in; stroke:black; fill:none">
                <polyline
                    points="472,3590 472,9732 "
                    style="stroke:#000000;stroke-width:174; stroke-linejoin:miter; stroke-linecap:round; "
                ></polyline>
                <path
                    style="stroke:#000000;stroke-width:126;stroke-linecap:butt;"
                    d="M 4724,9448 A 4660 4660  0  0  1  8598  9259 "
                ></path>
                <path
                    style="stroke:#000000;stroke-width:174;stroke-linecap:butt;"
                    d="M 4488,9685 A 4228 4228  0  0  0  472  9732 "
                ></path>
                <path
                    style="stroke:#000000;stroke-width:126;stroke-linecap:butt;"
                    d="M 4724,3590 A 4241 4241  0  0  1  8598  3496 "
                ></path>
                <path
                    style="stroke:#000000;stroke-width:126;stroke-linecap:round;"
                    d="M 850,3496 A 4241 4241  0  0  1  4724  3590 "
                ></path>
                <path
                    style="stroke:#000000;stroke-width:126;stroke-linecap:round;"
                    d="M 850,9259 A 4507 4507  0  0  1  4724  9448 "
                ></path>
                <polyline
                    points="5385,4299 4062,8125 "
                    style="stroke:#000000;stroke-width:300; stroke-linejoin:miter; stroke-linecap:round; "
                ></polyline>
                <polyline
                    points="8598,3496 8598,9259 "
                    style="stroke:#000000;stroke-width:126; stroke-linejoin:miter; stroke-linecap:round; "
                ></polyline>
                <polyline
                    points="850,3496 850,9259 "
                    style="stroke:#000000;stroke-width:126; stroke-linejoin:miter; stroke-linecap:round; "
                ></polyline>
                <polyline
                    points="4960,9685 4488,9685 "
                    style="stroke:#000000;stroke-width:174; stroke-linejoin:miter; stroke-linecap:round; "
                ></polyline>
                <polyline
                    points="3070,4582 1889,6141 3070,7700 "
                    style="stroke:#000000;stroke-width:300; stroke-linejoin:miter; stroke-linecap:round; "
                ></polyline>
                <polyline
                    points="6418,4582 7600,6141 6418,7700 "
                    style="stroke:#000000;stroke-width:300; stroke-linejoin:miter; stroke-linecap:round; "
                ></polyline>
                <polyline
                    points="8976,3590 8976,9732 "
                    style="stroke:#000000;stroke-width:174; stroke-linejoin:miter; stroke-linecap:round; "
                ></polyline>
                <path
                    style="stroke:#000000;stroke-width:174;stroke-linecap:butt;"
                    d="M 4960,9685 A 4228 4228  0  0  1  8976  9732 "
                ></path>
            </g>
            `,
            }}
        ></svg>
    );
}
