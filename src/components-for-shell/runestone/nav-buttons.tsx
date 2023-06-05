import React from "react";
import { useAppSelector } from "../../state-management/hooks";
import {
    runestoneEbookConfigSelector,
    runestoneEnabledSelector,
} from "../../state-management/redux-slices/runestone/runestone-slice";
import { RunestoneOptionsButton } from "./runestone-menu";
import { ScratchActiveCodeButton } from "./scratch-active-code-button";

export function RunestoneHeaderButtons() {
    const runestoneEnabled = useAppSelector(runestoneEnabledSelector);
    const scratchActiveCodeEnabled = useAppSelector(
        runestoneEbookConfigSelector
    ).enableScratchAC;
    if (!runestoneEnabled) {
        return null;
    }

    return (
        <React.Fragment>
            <RunestoneOptionsButton />
            {scratchActiveCodeEnabled && <ScratchActiveCodeButton />}
        </React.Fragment>
    );
}
