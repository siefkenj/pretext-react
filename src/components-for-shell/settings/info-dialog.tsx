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
} from "../../state-management/redux-slices/global/global-slice";
import { currentPageIdSelector } from "../../state-management/redux-slices/nav/selectors";

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
                        <th>In Mobile Mode</th>
                        <td>
                            <code>{inMobileMode.toString()}</code>
                        </td>
                    </tr>
                    <tr>
                        <th>DOM Caching Enabled</th>
                        <td>
                            <code>{domCaching.toString()}</code>
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
