import { Button } from "@ariakit/react";
import { useAppDispatch, useAppSelector } from "../state-management/hooks";
import { globalActions, sageCellSelector } from "../state-management/redux-slices/global/global-slice";

export function SageCellButton() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(sageCellSelector);
    return (
        <Button
            className="button"
            onClick={() => {
                dispatch(globalActions.setSageCellOpen(!isOpen));
            }}
        >
            <span className="name">Sage cell</span>
        </Button>
    );
}
