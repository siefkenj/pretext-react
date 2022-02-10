import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { globalSlice } from "../features/global/globalSlice";
import { navSlice } from "../features/nav/navSlice";
import { tocSlice } from "../features/toc/tocSlice";

export const store = configureStore({
    reducer: {
        nav: navSlice.reducer,
        toc: tocSlice.reducer,
        global: globalSlice.reducer,
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
