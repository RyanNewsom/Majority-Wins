import { Reducer, combineReducers } from "redux";

import {
  isRefreshElectionsDoneAction,
  isRefreshVotersDoneAction,
} from "../actions/AppActions";
import { Voter, AppState, Election } from "../models/App";
import { AppActions } from "../actions/AppActions";
import { isCreateRegisterVotersTabSelectedAction } from "../actions/RegisterVotersActions";

export const voterReducer: Reducer<Voter[], AppActions> = (
  voters = [],
  action
) => {
  if (isRefreshVotersDoneAction(action)) {
    return action.payload.voters;
  }

  return voters;
};

export const electionReducer: Reducer<Election[], AppActions> = (
  elections = [],
  action
) => {
  if (isRefreshElectionsDoneAction(action)) {
    return action.payload.elections;
  }

  return elections;
};

export const registeredVotersTabReducer: Reducer<
  number | undefined,
  AppActions
> = (tabSelected = 0, action) => {
  if (isCreateRegisterVotersTabSelectedAction(action)) {
    return action.payload.tabSelected;
  }

  return tabSelected;
};

export const appReducer: Reducer<AppState, AppActions> = combineReducers({
  // currentVoter: undefined,
  voters: voterReducer,
  elections: electionReducer,
  registeredVotersSelectedTab: registeredVotersTabReducer,
});
