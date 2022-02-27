import { ReplacerFunc } from "../../utils/html-manipulation/hast-react";
import { SageDisplayKnowl, SageKnowl } from "../knowl/sage-knowl";

// A list of class names that indicate sage-cell content. Generated using
// ```
// Object.fromEntries(
//    ["GAP", "GP", "HTML", "Maxima", "Octave", "Python", "R", "Singular"].map(
//        (v) => [
//            `sagecell-${v}`,
//            { languages: [v.toLowerCase()], buttonText: `Evaluate (${v})` },
//        ]
//    )
// );
// ```
const SUPPORTED_LANGUAGES_BY_CLASS = {
    "sagecell-gap": {
        languages: ["gap"],
        buttonText: "Evaluate (GAP)",
    },
    "sagecell-gp": {
        languages: ["gp"],
        buttonText: "Evaluate (GP)",
    },
    "sagecell-html": {
        languages: ["html"],
        buttonText: "Evaluate (HTML)",
    },
    "sagecell-maxima": {
        languages: ["maxima"],
        buttonText: "Evaluate (Maxima)",
    },
    "sagecell-octave": {
        languages: ["octave"],
        buttonText: "Evaluate (Octave)",
    },
    "sagecell-practice": {
        languages: ["sage"],
        buttonText: "Evaluate",
    },
    "sagecell-python": {
        languages: ["python"],
        buttonText: "Evaluate (Python)",
    },
    "sagecell-r": {
        languages: ["r"],
        buttonText: "Evaluate (R)",
    },
    "sagecell-sage": {
        languages: ["sage"],
        buttonText: "Evaluate (Sage)",
    },
    "sagecell-singular": {
        languages: ["singular"],
        buttonText: "Evaluate (Singular)",
    },
};

/**
 * Replace HAST nodes that should trigger knowls with appropriate React elements.
 */
export const replaceSageKnowl: ReplacerFunc = (
    node,
    processContent,
    { hastDom, currentPageId }
) => {
    if (!(node.tagName === "pre")) {
        return;
    }
    const className = hastDom.getAttribute(node, "className");
    const id = hastDom.getAttribute(node, "id");
    if (className?.includes("sage-display")) {
        // Display-only sage cells may not have an id
        const newId = id || hastDom.slugger.slug("sage-display");
        return (
            <SageDisplayKnowl id={newId} className={className}>
                {processContent(node.children)}
            </SageDisplayKnowl>
        );
    }
    for (const [name, props] of Object.entries(SUPPORTED_LANGUAGES_BY_CLASS)) {
        if (className?.includes(name)) {
            return (
                <SageKnowl
                    id={id}
                    className={className}
                    buttonText={props.buttonText}
                    languages={props.languages}
                    linkKey={currentPageId + props.languages}
                >
                    {processContent(node.children)}
                </SageKnowl>
            );
        }
    }
};
