import {
    Menu,
    MenuButton,
    MenuItem,
    MenuSeparator,
    useMenuStore,
} from "@ariakit/react";
import React from "react";
import { useAppSelector } from "../../state-management/hooks";
import {
    runestoneIsInstructorSelector,
    runestoneIsStudentSelector,
} from "../../state-management/redux-slices/runestone/runestone-slice";

export function RunestoneOptionsButton() {
    const menu = useMenuStore();
    const isInstructor = useAppSelector(runestoneIsInstructorSelector);
    const isStudent = useAppSelector(runestoneIsStudentSelector);

    return (
        <React.Fragment>
            <MenuButton
                store={menu}
                className="button"
                title="Runestone Options"
            >
                👤
            </MenuButton>
            <Menu store={menu} className="settings-menu menu" gutter={4}>
                <MenuItem
                    className="menu-item"
                    title="Assignments"
                    as="a"
                    href="/runestone/assignments/chooseAssignment"
                >
                    Assignments
                </MenuItem>
                <MenuItem
                    className="menu-item"
                    title="Practice"
                    as="a"
                    href="/runestone/assignments/practice"
                >
                    Practice
                </MenuItem>
                <MenuSeparator />
                {isInstructor && (
                    <MenuItem
                        className="menu-item"
                        title="Peer Instructor (Instructor)"
                        as="a"
                        id="inst_peer_link"
                        href="/%7Bappname%7D/peer/instructor.html"
                    >
                        Peer Instruction (Instructor)
                    </MenuItem>
                )}
                {isStudent && (
                    <MenuItem
                        className="menu-item"
                        title="Peer Instructor (Student)"
                        as="a"
                        href="/%7Bappname%7D/peer/student.html"
                    >
                        Peer Instruction (Student)
                    </MenuItem>
                )}
                <MenuSeparator />
                <MenuItem
                    className="menu-item"
                    title="Change Course"
                    as="a"
                    href="/runestone/default/courses"
                >
                    Change Course
                </MenuItem>
                {isInstructor && (
                    <React.Fragment>
                        <MenuSeparator />
                        <MenuItem
                            className="menu-item"
                            title="Instructor's Page"
                            as="a"
                            href="/runestone/admin/index"
                        >
                            Instructor's Page
                        </MenuItem>
                    </React.Fragment>
                )}
                <MenuSeparator />
                <MenuItem
                    className="menu-item"
                    title="Progress Page"
                    as="a"
                    href="/runestone/dashboard/studentreport"
                >
                    Progress Page
                </MenuItem>
                <MenuSeparator />
                <MenuItem
                    className="menu-item"
                    title="Edit Profile"
                    as="a"
                    href="/runestone/user/profile"
                >
                    Edit Profile
                </MenuItem>
                <MenuItem
                    className="menu-item"
                    title="Change Password"
                    as="a"
                    href="/runestone/default/user/change_password"
                >
                    Change Password
                </MenuItem>
                <MenuItem
                    className="menu-item"
                    title="Log Out"
                    as="a"
                    href="/runestone/default/user/logout"
                >
                    Log Out
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
