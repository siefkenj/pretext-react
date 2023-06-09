import {
    createDraftSafeSelector,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";

import { createLoggingAsyncThunk } from "../../hooks";
import { RootState } from "../../store";
import { ACFactory as ACFactoryType, EBookConfig } from "./types";

// Some globals may exist from Runestone
declare const eBookConfig: EBookConfig | undefined;
declare const ACFactory: ACFactoryType | undefined;
declare const rsMathReady: Function | undefined;

export interface RunestoneState {
    runestoneEnabled: boolean;
    activeEbookConfig: EBookConfig;
    scratchActiveCodeVisible: boolean;
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
                getState() as any
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
