import { Action, Dispatch } from 'redux';
import { Voter } from '../models/App';

export const REFRESH_VOTERS_REQUEST_ACTION = 'REFRESH_VOTERS_REQUEST';
export const REFRESH_VOTERS_DONE_ACTION = 'REFRESH_VOTERS_DONE';
export const ADD_VOTERS_REQUEST_ACTION = 'ADD_VOTERS_REQUEST';

export type RefreshVotersRequestAction = Action<string>;
export interface RefreshVotersDoneAction extends Action<string> {
  payload: {
    voters: Voter[];
  };
}
export type AddVotersRequestAction = Action<string>;

export type CreateRefreshVotersRequestAction = () => RefreshVotersRequestAction;
export type CreateRefreshVotersDoneAction = (voters: Voter[]) => RefreshVotersDoneAction;

export type CreateAddVotersRequestAction = (voter: Voter) => AddVotersRequestAction;

export const createRefreshVotersRequestAction: CreateRefreshVotersRequestAction = () => ({
  type: REFRESH_VOTERS_REQUEST_ACTION,
});

export const createAddVotersRequestAction: CreateAddVotersRequestAction = (voter: Voter) => ({
  type: ADD_VOTERS_REQUEST_ACTION,
  payload: {
    voter,
  }
});

export const createRefreshVotersDoneAction: CreateRefreshVotersDoneAction = (voters: Voter[]) => ({
  type: REFRESH_VOTERS_DONE_ACTION,
  payload: {
    voters,
  },
});

export function isRefreshVotersRequestAction(action: Action<string>): action is RefreshVotersRequestAction {
  return [REFRESH_VOTERS_REQUEST_ACTION].includes(action.type);
}

export function isRefreshVotersDoneAction(action: Action<string>): action is RefreshVotersDoneAction {
  return [REFRESH_VOTERS_DONE_ACTION].includes(action.type);
}

export const refreshVoters = () => {
  return async (dispatch: Dispatch) => {
    dispatch(createRefreshVotersRequestAction());
    const res = await fetch('http://localhost:3060/voters');
    const voters = await res.json();
    dispatch(createRefreshVotersDoneAction(voters));
  };
};


export type AppActions = RefreshVotersRequestAction | RefreshVotersDoneAction;


export const addVoter = (voter: Voter) => {
  return async (dispatch: Dispatch) => {
    dispatch(createAddVotersRequestAction(voter));
    await fetch("http://localhost:3060/voters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(voter),
    });
    dispatch(createRefreshVotersRequestAction());
  };
};