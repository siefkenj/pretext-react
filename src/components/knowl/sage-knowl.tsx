import React from "react";

export function SageKnowl({
    id,
    children,
    buttonText,
    languages,
    ...rest
}: React.ComponentProps<"div"> & { buttonText: string; languages?: string[] }) {
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
                languages: languages || ["sage"],
                evalButtonText: buttonText,
            });
            setSageCellHasRun(true);
        }
    }, [sageCellHasRun, id, buttonText, languages]);

    return (
        <div id={id} {...rest}>
            {children}
        </div>
    );
}

export function SageDisplayKnowl({
    id,
    children,
    languages,
    ...rest
}: React.ComponentProps<"div"> & { languages?: string[] }) {
    const [sageCellHasRun, setSageCellHasRun] = React.useState(false);

    React.useEffect(() => {
        if (!sageCellHasRun) {
            // sagecell will replace the contents of the div with id `id`
            // with executable sage content. Make sure to let it render once
            // we're set up.
            // No types for this one...
            (window as any).sagecell?.makeSagecell({
                inputLocation: `#${id}`,
                languages: languages || ["sage"],
                editor: "codemirror-readonly",
                hide: ["evalButton", "editorToggle", "language"],
            });
            setSageCellHasRun(true);
        }
    }, [sageCellHasRun, id, languages]);
    console.log("display sage", id);

    return (
        <div id={id} {...rest}>
            {children}
        </div>
    );
}
