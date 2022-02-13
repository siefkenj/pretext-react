import {
    createDraftSafeSelector,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface KnowlState {
    visible: Record<string, boolean>;
}

const initialState: KnowlState = {
    visible: {},
};

export const knowlSlice = createSlice({
    name: "knowl",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setVisible(state, action: PayloadAction<Record<string, boolean>>) {
            Object.assign(state.visible ,action.payload);
        },
        closeAll(state) {
            state.visible={}
        },
    },
});

export const knowlActions = { ...knowlSlice.actions };

const selfSelector = (state: RootState) => state.knowl;

export const visibleKnowlsSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.visible
);
