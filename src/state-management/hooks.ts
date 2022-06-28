import { AsyncThunkPayloadCreator, createAsyncThunk } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { createBrowserHistory } from "history";

// We want to be able to push to the history state and still have react-router understand what's
// going on. So, we need to create our own history object.
// https://stackoverflow.com/questions/48514773/use-history-push-in-action-creator-with-react-router-v4
export const history = createBrowserHistory();

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * A wrapper around `createAsyncThunk` that logs to the console
 * when an error is thrown. Errors thrown in thunks created with `createAsyncThunk` are
 * throw silently. (You are expected to catch the `rejected` status to deal with the error.)
 */
export const createLoggingAsyncThunk: typeof createAsyncThunk = <
    Returned,
    ThunkArg = void
>(
    typePrefix: string,
    payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg>
) => {
    const wrappedPayloadCreator: typeof payloadCreator = async (...args) => {
        try {
            return await payloadCreator(...args);
        } catch (e) {
            console.warn(e);
            throw e;
        }
    };
    return createAsyncThunk(typePrefix, wrappedPayloadCreator);
};
