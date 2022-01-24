import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { navSlice } from "../features/nav/navSlice";

export const store = configureStore({
    reducer: {
        nav: navSlice.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
