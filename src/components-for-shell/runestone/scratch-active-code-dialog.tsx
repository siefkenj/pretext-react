import React from "react";
import {
    Dialog,
    DialogDismiss,
    DialogHeading,
    useDialogStore,
} from "@ariakit/react";
import { useAppDispatch, useAppSelector } from "../../state-management/hooks";
import {
    runestoneActions,
    runestoneScratchActiveCodeVisibleSelector,
} from "../../state-management/redux-slices/runestone/runestone-slice";

export function ScratchActiveCodeDialog() {
    const open = useAppSelector(runestoneScratchActiveCodeVisibleSelector);
    const dispatch = useAppDispatch();
    const dialog = useDialogStore({
        open: open,
    });

    return (
        <Dialog
            store={dialog}
            className="dialog"
            backdrop={
                <div
                    onClick={() => {
                        dispatch(
                            runestoneActions.setScratchActiveCodeVisible(false)
                        );
                    }}
                ></div>
            }
        >
            <DialogDismiss
                onClick={() => {
                    dispatch(
                        runestoneActions.setScratchActiveCodeVisible(false)
                    );
                }}
            />
            <DialogHeading>Scratch ActiveCode</DialogHeading>
            <div id="runestone-scratch-active-code-container-id" />
        </Dialog>
    );
}
