import { Action, Dispatch } from "redux";
import { refreshVoters } from "./AppActions";

//Tab Selection
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

//Voter Deletion
export const DELETE_VOTERS_ACTION = "DELETE_VOTERS";
export interface DeleteVotersAction extends Action<string> {
  payload: {
    votersToDelete: number[];
  };
}
export type CreateDeleteVotersAction = (
  votersToDelete: number[]
) => DeleteVotersAction;

export const createDeleteVotersAction: CreateDeleteVotersAction = (
  votersToDelete: number[]
) => ({
  type: DELETE_VOTERS_ACTION,
  payload: {
    votersToDelete,
  },
});

export function isDeleteVotersAction(
  action: Action<string>
): action is DeleteVotersAction {
  return [DELETE_VOTERS_ACTION].includes(action.type);
}

export const deleteVoters = (votersToDelete: number[]) => {
  return async (dispatch: Dispatch) => {
    dispatch(createDeleteVotersAction(votersToDelete));
    console.log("deleting");

    let promises = votersToDelete.map((voter) => {
      return fetch(`http://localhost:3060/voters/${voter}`, {
        method: "DELETE",
      });
    });

    await Promise.all(promises).then(() => {
      refreshVoters()(dispatch);
    });
  };
};
