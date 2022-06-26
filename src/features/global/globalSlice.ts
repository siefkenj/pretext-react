import {
    createDraftSafeSelector,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { Eggy } from "@s-r0/eggy-js";
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

export interface PermalinkDetails {
    title: string | undefined;
    url: string;
}

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
    copyToClipboard: createLoggingAsyncThunk(
        "global/copyToClipboard",
        async (linkDetails: PermalinkDetails, { dispatch, getState }) => {
            if (!navigator.clipboard) {
                return;
            }
            let linkText = linkDetails.title ?? linkDetails.url;
            let link = `<a href="${linkDetails.url}">${linkText}</a>`;
            let text_fallback;
            if (linkText !== linkDetails.url) {
                text_fallback = `${linkDetails.title}\r\n${linkDetails.url}`;
            } else {
                text_fallback = linkDetails.url;
            }
            // Check for browsers that don't support ClipboardItem.
            //   https://caniuse.com/?search=ClipboardItem
            // In particular, Firefox disables ClipboardItem by default
            // --- the user can enable it by setting
            // dom.events.asyncClipboard.clipboardItem
            // to true in about:config
            if (typeof ClipboardItem !== "undefined") {
                await navigator.clipboard.write([
                    new ClipboardItem({
                        "text/html": new Blob([link], { type: "text/html" }),
                        "text/plain": new Blob([text_fallback], {
                            type: "text/plain",
                        }),
                    }),
                ]);
            } else {
                await navigator.clipboard.writeText(text_fallback);
            }
            Eggy({
                title: "Link Copied",
                message: linkText,
                position: "top-right",
                type: "info",
                duration: "3000",
            });
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
