import { Action } from "redux";

export const REGISTER_VOTERS_TAB_SELECTED_ACTION =
  "REGISTER_VOTERS_TAB_SELECTED";
export interface RegisterVotersTabSelectedAction extends Action<string> {
  payload: {
    tabSelected: number;
  };
}
export type CreateRegisterVotersTabSelectedAction = (
  tabSelected: number
) => RegisterVotersTabSelectedAction;

export const createRegisterVotersTabSelectedAction: CreateRegisterVotersTabSelectedAction = (
  tabSelected: number
) => ({
  type: REGISTER_VOTERS_TAB_SELECTED_ACTION,
  payload: {
    tabSelected,
  },
});

export function isCreateRegisterVotersTabSelectedAction(
  action: Action<string>
): action is RegisterVotersTabSelectedAction {
  return [REGISTER_VOTERS_TAB_SELECTED_ACTION].includes(action.type);
}
