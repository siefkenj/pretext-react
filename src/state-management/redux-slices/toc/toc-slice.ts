import {
    createDraftSafeSelector,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface TocState {
    visible: boolean;
}

const initialState: TocState = {
    visible: true,
};

export const tocSlice = createSlice({
    name: "toc",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setVisible(state, action: PayloadAction<boolean>) {
            state.visible = action.payload;
        },
    },
});

export const tocActions = { ...tocSlice.actions };

const selfSelector = (state: RootState) => state.toc;

export const tocIsVisibleSelector = createDraftSafeSelector(
    selfSelector,
    (state) => state.visible
);
