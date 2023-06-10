import {
    Button,
} from "@ariakit/react";
import React from "react";
import { useAppDispatch } from "../../state-management/hooks";
import { searchActions } from "../../state-management/redux-slices/search/search-slice";

export function SearchButton() {
    const dispatch = useAppDispatch();

    return (
        <Button
            className="button"
            title="Search"
            onClick={() => {
                dispatch(searchActions.setSearchDialogVisible(true));
            }}
        >
            🔍
        </Button>
    );
}
