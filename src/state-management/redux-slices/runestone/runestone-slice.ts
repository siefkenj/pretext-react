import {
    createDraftSafeSelector,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";

import { createLoggingAsyncThunk } from "../../hooks";
import { RootState } from "../../store";
import {
    ACFactory as ACFactoryType,
    EBookConfig,
    RunestoneComponentsGlobal,
} from "./types";
import { currentPageUrlSelector } from "../nav/selectors";

// Some globals may exist from Runestone
declare const eBookConfig: EBookConfig | undefined;
declare const ACFactory: ACFactoryType | undefined;
declare const rsMathReady: Function | undefined;
declare const runestoneComponents: RunestoneComponentsGlobal;

export const RUNESTONE_UPDATE_LAST_PAGE_URL = "/logger/updatelastpage";
export const RUNESTONE_GET_ALL_COMPLETION_STATUS_URL =
    "/logger/getAllCompletionStatus";

export type RunestoneUpdateLastPagePayload = {
    lastPageUrl: string;
    lastPageScrollLocation: number;
    completionFlag: number;
    course: string;
    isPtxBook: boolean;
};

export type RunestoneCompletionStatus = {
    chapterName: string;
    subChapterName: string;
    completionStatus: -1 | 0 | 1;
    endDate: number;
};

export interface RunestoneState {
    runestoneEnabled: boolean;
    activeEbookConfig: EBookConfig;
    scratchActiveCodeVisible: boolean;
    completionStatus: Record<string, RunestoneCompletionStatus>;
}

const initialState: RunestoneState = {
    runestoneEnabled: true,
    scratchActiveCodeVisible: false,
    activeEbookConfig: {
        useRunestoneServices: false,
        host: "",
        app: "",
        course: "",
        basecourse: "",
        isLoggedIn: false,
        email: "",
        isInstructor: false,
        logLevel: 0,
        ajaxURL: "",
        username: "",
        readings: [],
        activities: {},
        downloadsEnabled: false,
        allow_pairs: false,
        enableScratchAC: false,
        acDefaultLanguage: "",
        new_server_prefix: "",
        runestone_version: "",
        // This is normally dynamically created by Runestone.
        scratchDiv: "",
    },
    completionStatus: {},
};

export interface PermalinkDetails {
    title: string | undefined;
    url: string;
}

const runestoneThunks = {
    runestoneInit: createLoggingAsyncThunk(
        "runestone/runestoneInit",
        async (_: void, { dispatch, getState }) => {
            // Test whether or not Runestone is present on the page by looking for
            // the presence rsMathReady
            // XXX: this should be done in a more reliable way.
            if (typeof rsMathReady !== "undefined") {
                const eBookConfig: EBookConfig =
                    (window as any).eBookConfig || {};
                dispatch(
                    runestoneActions.setRunestoneEnabled(
                        Boolean(eBookConfig.useRunestoneServices)
                    )
                );
                dispatch(runestoneActions.setActiveEbookConfig(eBookConfig));
            }
        }
    ),
    runestonePopupScratchActiveCode: createLoggingAsyncThunk(
        "runestone/popupScratchActiveCode",
        async (_: void, { dispatch, getState }) => {
            await runestoneComponents.runestone_import("activecode");
            if (
                typeof ACFactory === "undefined" ||
                typeof eBookConfig === "undefined"
            ) {
                console.warn(
                    "Asked to start scratch active code window, but ACAFactor is undefined"
                );
                return;
            }
            dispatch(runestoneActions.setScratchActiveCodeVisible(true));
            const localEbookConfig = runestoneEbookConfigSelector(
                getState() as RootState
            );

            // If this function is called, we force the scratch active code window to be enabled.
            // Since we shouldn't be able to call it if active code was disabled in the first place.
            eBookConfig.enableScratchAC = true;

            // Follow the code from Runestone's popupScratchAC
            if (!localEbookConfig.scratchDiv) {
                ACFactory.createScratchActivecode();
                const newId = eBookConfig.scratchDiv;
                if (newId) {
                    dispatch(
                        runestoneActions.setActiveEbookConfig({
                            scratchDiv: newId,
                        })
                    );
                }
                const container = document.getElementById(
                    "runestone-scratch-active-code-container-id"
                );
                const activeCodeDiv = document.getElementById(newId);
                if (!container || !activeCodeDiv) {
                    console.warn(
                        "Cannot find created ActiveCode Container or ActiveCode div with id:",
                        newId
                    );
                    return;
                }
                container.appendChild(activeCodeDiv);
                const acInstance = ACFactory.createActiveCode(
                    activeCodeDiv,
                    localEbookConfig.acDefaultLanguage
                );
                if (eBookConfig.isLoggedIn) {
                    acInstance.enableSaveLoad();
                }
            }
        }
    ),
    /**
     * Called to inform Runestone that a page changed and to
     * gather any updated data about page statuses.
     *
     * This function should be dispatched **before** a page actually changes.
     */
    runestonePageWillChanged: createLoggingAsyncThunk(
        "runestone/pageWillChanged",
        async (_: void, { dispatch, getState }) => {
            const state = getState() as RootState;
            const eBookConfig = runestoneEbookConfigSelector(state);
            const currentPageUrl = currentPageUrlSelector(state);
            const updateLastPageUrl =
                eBookConfig.new_server_prefix + RUNESTONE_UPDATE_LAST_PAGE_URL;
            const course = eBookConfig.course;
            const bodyObj: RunestoneUpdateLastPagePayload = {
                course,
                lastPageScrollLocation: 0,
                isPtxBook: true,
                completionFlag: 0,
                lastPageUrl: currentPageUrl,
            };
            await fetch(updateLastPageUrl, {
                credentials: "include",
                body: JSON.stringify(bodyObj),
                method: "POST",
            });
            await dispatch(runestoneActions.runestoneRefreshPageStatuses());
        }
    ),
    /**
     * Gather information from Runestone about the current completion status of all pages.
     * This is used to display status icons on the TOC.
     */
    runestoneRefreshPageStatuses: createLoggingAsyncThunk(
        "runestone/refreshPageStatuses",
        async (_: void, { dispatch, getState }) => {
            const state = getState() as RootState;
            const eBookConfig = runestoneEbookConfigSelector(state);
            const url =
                eBookConfig.new_server_prefix +
                RUNESTONE_GET_ALL_COMPLETION_STATUS_URL;
            const resp = await fetch(url, { credentials: "include" });
            const json = (await resp.json()) as {
                detail: RunestoneCompletionStatus[];
            };
            dispatch(runestoneActions._setCompletionStatuses(json.detail));
        }
    ),
};

export const runestoneSlice = createSlice({
    name: "runestone",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setRunestoneEnabled(state, action: PayloadAction<boolean>) {
            state.runestoneEnabled = action.payload;
        },
        setActiveEbookConfig(
            state,
            action: PayloadAction<Partial<EBookConfig>>
        ) {
            Object.assign(state.activeEbookConfig, action.payload);
        },
        setScratchActiveCodeVisible(state, action: PayloadAction<boolean>) {
            state.scratchActiveCodeVisible = action.payload;
        },
        _setCompletionStatuses(
            state,
            action: PayloadAction<RunestoneCompletionStatus[]>
        ) {
            for (const status of action.payload) {
                state.completionStatus[status.subChapterName] = status;
            }
        },
    },
});

export const runestoneActions = {
    ...runestoneSlice.actions,
    ...runestoneThunks,
};

const selfSelector = (state: RootState) => state.runestone;

export const runestoneEnabledSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.runestoneEnabled
);
export const runestoneIsStudentSelector = createDraftSafeSelector(
    selfSelector,
    (state) => !state.activeEbookConfig.isInstructor
);
export const runestoneIsInstructorSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.activeEbookConfig.isInstructor
);
export const runestoneScratchActiveCodeVisibleSelector =
    createDraftSafeSelector(
        selfSelector,
        (state) => state.scratchActiveCodeVisible
    );
export const runestoneEbookConfigSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.activeEbookConfig
);
export const runestoneCompletionStatusesSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.completionStatus
);
