import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { globalSlice } from "./redux-slices/global/global-slice";
import { knowlSlice } from "./redux-slices/knowl/knowl-slice";
import { navSlice } from "./redux-slices/nav/nav-slice";
import { runestoneSlice } from "./redux-slices/runestone/runestone-slice";
import { searchSlice } from "./redux-slices/search/search-slice";
import { tocSlice } from "./redux-slices/toc/toc-slice";

export const store = configureStore({
    reducer: {
        knowl: knowlSlice.reducer,
        nav: navSlice.reducer,
        toc: tocSlice.reducer,
        global: globalSlice.reducer,
        runestone: runestoneSlice.reducer,
        search: searchSlice.reducer,
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
