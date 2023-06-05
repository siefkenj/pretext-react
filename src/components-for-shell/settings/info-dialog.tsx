import React from "react";
import {
    Checkbox,
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
} from "../../state-management/redux-slices/global/global-slice";
import { currentPageIdSelector } from "../../state-management/redux-slices/nav/selectors";
import {
    runestoneActions,
    runestoneEbookConfigSelector,
    runestoneEnabledSelector,
    runestoneIsInstructorSelector,
} from "../../state-management/redux-slices/runestone/runestone-slice";

export function InfoDialog() {
    const infoDialogOpen = useAppSelector(infoDialogOpenSelector);
    const dispatch = useAppDispatch();
    const dialog = useDialogStore({
        open: infoDialogOpen,
    });
    const currentPageId = useAppSelector(currentPageIdSelector);
    const domCaching = useAppSelector(domCachingSelector);
    const inMobileMode = useAppSelector(inMobileModeSelector);
    const urlCache = useAppSelector((state) => state.nav.urlCache);
    const runestoneEnabled = useAppSelector(runestoneEnabledSelector);
    const runestoneInstructor = useAppSelector(runestoneIsInstructorSelector);
    const runestoneActiveCodeEnabled = useAppSelector(
        runestoneEbookConfigSelector
    ).enableScratchAC;

    return (
        <Dialog
            store={dialog}
            className="dialog"
            backdrop={
                <div
                    onClick={() => {
                        dispatch(globalActions.setInfoDialogOpen(false));
                    }}
                ></div>
            }
        >
            <DialogDismiss
                onClick={() => {
                    dispatch(globalActions.setInfoDialogOpen(false));
                }}
            />
            <DialogHeading>Debug Info</DialogHeading>
            <table>
                <tbody>
                    <tr>
                        <th>Current Page ID</th>
                        <td>
                            <code>{currentPageId}</code>
                        </td>
                    </tr>
                    <tr>
                        <th>Runestone</th>
                        <td>
                            Enabled:{" "}
                            <ToggleSwitch
                                state={runestoneEnabled}
                                dispatchAction={
                                    runestoneActions.setRunestoneEnabled
                                }
                            />
                            <br />
                            Instructor:{" "}
                            <ToggleSwitch
                                state={runestoneInstructor}
                                dispatchAction={(state: boolean) =>
                                    runestoneActions.setActiveEbookConfig({
                                        isInstructor: state,
                                    })
                                }
                            />
                            <br />
                            Scratch ActiveCode Enabled:{" "}
                            <ToggleSwitch
                                state={runestoneActiveCodeEnabled}
                                dispatchAction={(state: boolean) =>
                                    runestoneActions.setActiveEbookConfig({
                                        enableScratchAC: state,
                                    })
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>In Mobile Mode</th>
                        <td>
                            <ToggleSwitch
                                state={inMobileMode}
                                dispatchAction={globalActions.setMobileMode}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>DOM Caching Enabled</th>
                        <td>
                            <ToggleSwitch
                                state={domCaching}
                                dispatchAction={globalActions.setDomCaching}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Cached Pages</th>
                        <td>
                            <ul>
                                {Object.entries(urlCache).map(
                                    ([page, contents]) => (
                                        <li key={page}>
                                            <code>{page}</code> ~
                                            {Math.floor(contents.length / 1024)}{" "}
                                            KB
                                        </li>
                                    )
                                )}
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>MathJax Version</th>
                        <td>
                            <code>{(MathJax as any).version}</code>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Dialog>
    );
}

/**
 * Simple toggle switch that shows the boolean state as a checkbox and a string.
 */
function ToggleSwitch({
    state,
    dispatchAction,
}: {
    state: boolean;
    dispatchAction: Function;
}) {
    const dispatch = useAppDispatch();
    return (
        <label>
            <Checkbox
                checked={state}
                onChange={() => {
                    dispatch(dispatchAction(!state));
                }}
            />
            <code>{state.toString()}</code>
        </label>
    );
}
