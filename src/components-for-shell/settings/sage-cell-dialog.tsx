import React from "react";
import {
    Dialog,
    DialogDismiss,
    DialogHeading,
    useDialogStore,
} from "@ariakit/react";
import { useAppDispatch, useAppSelector } from "../../state-management/hooks";
import {
    domCachingSelector,
    globalActions,
    infoDialogOpenSelector,
    inMobileModeSelector,
    sageCellSelector,
} from "../../state-management/redux-slices/global/global-slice";
import { currentPageIdSelector } from "../../state-management/redux-slices/nav/selectors";
import { SageKnowl } from "../../components-for-page/knowl/sage-knowl";

export function SageCellDialog() {
    const sageCellOpen = useAppSelector(sageCellSelector);
    const dispatch = useAppDispatch();
    const dialog = useDialogStore({
        open: sageCellOpen,
    });
    const currentPageId = useAppSelector(currentPageIdSelector);
    const domCaching = useAppSelector(domCachingSelector);
    const inMobileMode = useAppSelector(inMobileModeSelector);
    const urlCache = useAppSelector((state) => state.nav.urlCache);

    return (
        <Dialog
            store={dialog}
            className="dialog"
            backdrop={
                <div
                    onClick={() => {
                        dispatch(globalActions.setSageCellOpen(false));
                    }}
                ></div>
            }
        >
            <DialogDismiss
                onClick={() => {
                    dispatch(globalActions.setSageCellOpen(false));
                }}
            />
            <DialogHeading>Sage Cell</DialogHeading>
            <SageKnowl id="test-menu-button" buttonText="Evaluate" linkKey="1234" />
        </Dialog>
    );
}
