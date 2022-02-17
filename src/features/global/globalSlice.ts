import {
    createDraftSafeSelector,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { createLoggingAsyncThunk } from "../../app/hooks";
import { RootState } from "../../app/store";
import { tocActions, tocIsVisibleSelector } from "../toc/tocSlice";

export interface GlobalState {
    domCaching: boolean;
    inMobileMode: boolean;
}

const initialState: GlobalState = {
    domCaching: true,
    inMobileMode: false,
};

const globalThunks = {
    /**
     * Set whether viewing is in "mobile mode" (think screen) or not.
     * This has consequences like hiding/showing the TOC.
     */
    setMobileMode: createLoggingAsyncThunk(
        "global/setMobileMode",
        async (inMobileMode: boolean, { dispatch, getState }) => {
            const state = getState() as RootState;
            globalSlice.actions._setInMobileMode(inMobileMode);
            const tocIsVisible = tocIsVisibleSelector(state);
            if (tocIsVisible && inMobileMode) {
                dispatch(tocActions.setVisible(false));
            }
            if (!tocIsVisible && !inMobileMode) {
                dispatch(tocActions.setVisible(true));
            }
            dispatch(globalActions._setInMobileMode(inMobileMode));
        }
    ),
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setDomCaching(state, action: PayloadAction<boolean>) {
            state.domCaching = action.payload;
        },
        _setInMobileMode(state, action: PayloadAction<boolean>) {
            state.inMobileMode = action.payload;
        },
    },
});

export const globalActions = { ...globalSlice.actions, ...globalThunks };

const selfSelector = (state: RootState) => state.global;

export const domCachingSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.domCaching
);
export const inMobileModeSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.inMobileMode
);
