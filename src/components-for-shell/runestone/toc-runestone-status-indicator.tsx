import React from "react";
import { useAppSelector } from "../../state-management/hooks";
import {
    runestoneCompletionStatusesSelector,
    runestoneEnabledSelector,
} from "../../state-management/redux-slices/runestone/runestone-slice";

export function TocRunestoneStatusIndicator({
    pageId,
}: {
    pageId: string | null | undefined;
}) {
    const runestoneEnabled = useAppSelector(runestoneEnabledSelector);
    const statuses = useAppSelector(runestoneCompletionStatusesSelector);
    if (pageId == null || !runestoneEnabled) {
        return null;
    }

    switch (statuses[pageId]?.completionStatus) {
        case -1:
            return <span className="runestone-status unstarted" />;
        case 0:
            return <span className="runestone-status incomplete">⏳</span>;
        case 1:
            return <span className="runestone-status complete">✓</span>;
        case undefined:
        default:
            return null;
    }
}
