import { ReplacerFunc } from "../../utils/html-manipulation/hast-react";
import { KnowlContainer } from "../knowl/knowl-container";
import { Knowl, PreloadedKnowl } from "../knowl/knowls";
import { SageKnowl } from "../knowl/sage-knowl";

/**
 * Replace HAST nodes that should trigger knowls with appropriate React elements.
 */
export const replaceKnowl: ReplacerFunc = (node, processContent, hastDom) => {
    if (!(node.tagName === "a")) {
        return;
    }

    const knowlLoc = hastDom.getAttribute(node, "data-knowl");
    const refId = hastDom.getAttribute(node, "data-refid");

    if (!knowlLoc && !refId) {
        return;
    }

    const className = hastDom.getAttribute(node, "className");
    const title = hastDom.getAttribute(node, "title");

    if (refId) {
        return (
            <PreloadedKnowl refId={refId} className={className} title={title}>
                {processContent(node.children)}
            </PreloadedKnowl>
        );
    }
    const containerId = hastDom.getAttribute(node, "data-knowl-container-id");
    return (
        <Knowl
            url={knowlLoc || ""}
            containerId={containerId || ""}
            className={className}
            title={title}
        >
            {processContent(node.children)}
        </Knowl>
    );
};

/**
 * Replace HAST nodes that should trigger knowls with appropriate React elements.
 *
 * A knowl group container controls the visibility of several knowls associated with the
 * same block (e.g., the same paragraph). The display order of these knowls can depend on the
 * order of button presses, etc., so they are handled specially
 */
export const replaceKnowlGroupContainers: ReplacerFunc = (
    node,
    processContent,
    hastDom
) => {
    if (!(node.tagName === "div")) {
        return;
    }
    if (
        !hastDom
            .getAttribute(node, "className")
            ?.includes("knowl-group-container")
    ) {
        return;
    }

    const data: { id: string; forKnowlUrl: string }[] = [];

    // Direct children of a knowl-group-container have unique ids that we want to collect.
    for (const elm of node.children) {
        if (!(elm.type === "element")) {
            continue;
        }
        const id = hastDom.getAttribute(elm, "id") || "";
        const forKnowlUrl =
            hastDom.getAttribute(elm, "data-for-knowl-url") || "";
        data.push({ id, forKnowlUrl });
    }

    return <KnowlContainer knowlData={data} />;
};

/**
 * Replace HAST nodes that should trigger knowls with appropriate React elements.
 */
export const replaceSageKnowl: ReplacerFunc = (
    node,
    processContent,
    hastDom
) => {
    if (!(node.tagName === "div")) {
        return;
    }
    const className = hastDom.getAttribute(node, "className");
    const id = hastDom.getAttribute(node, "id");
    if (className?.includes("sagecell-sage")) {
        return (
            <SageKnowl
                id={id}
                className={className}
                buttonText="Evaluate (Sage)"
            >
                {processContent(node.children)}
            </SageKnowl>
        );
    }
    if (className?.includes("sagecell-practice")) {
        return (
            <SageKnowl id={id} className={className} buttonText="Evaluate">
                {processContent(node.children)}
            </SageKnowl>
        );
    }
    if (className?.includes("sagecell-r")) {
        return (
            <SageKnowl id={id} className={className} buttonText="Evaluate (R)" languages={["r"]}>
                {processContent(node.children)}
            </SageKnowl>
        );
    }
};
