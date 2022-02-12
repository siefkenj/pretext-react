import React from "react";

export function SageKnowl({
    id,
    children,
    buttonText,
    ...rest
}: React.ComponentProps<"div"> & { buttonText: string }) {
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
                evalButtonText: buttonText,
            });
            setSageCellHasRun(true);
        }
    }, [sageCellHasRun, id, buttonText]);

    return (
        <div id={id} {...rest}>
            {children}
        </div>
    );
}