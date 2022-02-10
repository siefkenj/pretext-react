import {
    createDraftSafeSelector,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface GlobalState {
    domCaching: boolean;
}

const initialState: GlobalState = {
    domCaching: true,
};

export const globalSlice = createSlice({
    name: "toc",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setDomCaching(state, action: PayloadAction<boolean>) {
            state.domCaching = action.payload;
        },
    },
});

export const globalActions = { ...globalSlice.actions };

const selfSelector = (state: RootState) => state.global;

export const domCachingSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.domCaching
);
