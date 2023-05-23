import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    useMenuStore,
} from "@ariakit/react";
import React from "react";
import { useAppDispatch } from "../../state-management/hooks";
import { globalActions } from "../../state-management/redux-slices/global/global-slice";

export function SettingsButton() {
    const menu = useMenuStore();
    const dispatch = useAppDispatch();

    return (
        <React.Fragment>
            <MenuButton
                store={menu}
                className="settings-menu-button button"
                title="Settings"
            >
                ⚙
            </MenuButton>
            <Menu store={menu} className="settings-menu menu" gutter={4}>
                <MenuItem
                    className="menu-item"
                    title="Diagnostic information about the currently-loaded PreTeXt interface"
                    onClick={() => {
                        dispatch(globalActions.setInfoDialogOpen(true));
                    }}
                >
                    Debug Info
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
