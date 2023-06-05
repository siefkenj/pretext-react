import { Button } from "@ariakit/react";
import classNames from "classnames";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../state-management/hooks";
import {
    runestoneActions,
    runestoneScratchActiveCodeVisibleSelector,
} from "../../state-management/redux-slices/runestone/runestone-slice";

export function ScratchActiveCodeButton() {
    const dispatch = useAppDispatch();
    const scratchActiveCodeVisible = useAppSelector(
        runestoneScratchActiveCodeVisibleSelector
    );

    return (
        <React.Fragment>
            <Button
                className={classNames("button", {
                    active: scratchActiveCodeVisible,
                })}
                title="Scratch ActiveCode"
                onClick={() => {
                    dispatch(
                        runestoneActions.runestonePopupScratchActiveCode()
                    );
                }}
            >
                <span className="icon">✏</span>
            </Button>
        </React.Fragment>
    );
}
