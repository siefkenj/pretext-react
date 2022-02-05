import React from "react";

export function SageKnowl({
    id,
    children,
    ...rest
}: React.ComponentProps<"div">) {
    const [sageCellHasRun, setSageCellHasRun] = React.useState(false);

    React.useEffect(() => {
        if (!sageCellHasRun) {
            // sagecell will replace the contents of the div with id `id`
            // with executable sage content. Make sure to let it render once
            // we're set up.
            // No types for this one...
            (window as any).sagecell?.makeSagecell({
                inputLocation: `#${id}`,
                linked: true,
                languages: ["sage"],
                evalButtonText: "Evaluate (Sage)",
            });
            setSageCellHasRun(true);
        }
    }, [sageCellHasRun, id]);

    return (
        <div id={id} {...rest}>
            {children}
        </div>
    );
}

export function SagePracticeKnowl({
    id,
    children,
    ...rest
}: React.ComponentProps<"div">) {
    const [sageCellHasRun, setSageCellHasRun] = React.useState(false);

    React.useEffect(() => {
        if (!sageCellHasRun) {
            // sagecell will replace the contents of the div with id `id`
            // with executable sage content. Make sure to let it render once
            // we're set up.
            // No types for this one...
            (window as any).sagecell?.makeSagecell({
                inputLocation: `#${id}`,
                linked: true,
                languages: (window as any).sagecell?.allLanguages,
                evalButtonText: "Evaluate",
            });
            setSageCellHasRun(true);
        }
    }, [sageCellHasRun, id]);

    return (
        <div id={id} {...rest}>
            {children}
        </div>
    );
}
