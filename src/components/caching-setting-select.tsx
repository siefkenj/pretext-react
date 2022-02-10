import React from "react";
import { Checkbox } from "reakit";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
    domCachingSelector,
    globalActions,
} from "../features/global/globalSlice";

export function CachingSettingsSelect() {
    const domCaching = useAppSelector(domCachingSelector);
    const dispatch = useAppDispatch();

    return (
        <label htmlFor="dom-caching-checkbox">
            <Checkbox
                title="DOM Caching is an aggressive form of caching where elements are hidden instead of deleted when a page changes"
                checked={domCaching}
                id="dom-caching-checkbox"
                onChange={() => {
                    dispatch(globalActions.setDomCaching(!domCaching));
                }}
            />
            Enable DOM Caching
        </label>
    );
}
