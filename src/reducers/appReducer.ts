import { Reducer, combineReducers } from 'redux';

import { isRefreshElectionsDoneAction, isRefreshVotersDoneAction } from '../actions/AppActions';
import { Voter, AppState, Election } from '../models/App';
import { AppActions } from '../actions/AppActions';

export const voterReducer: Reducer<Voter[], AppActions> = (voters = [], action) => {
  if (isRefreshVotersDoneAction(action)) {
    return action.payload.voters;
  }

  return voters;
};

export const electionReducer: Reducer<Election[], AppActions> = (elections = [], action) => {
  if (isRefreshElectionsDoneAction(action)) {
    return action.payload.elections;
  }

  return elections;
};

export const appReducer: Reducer<AppState, AppActions> = combineReducers({
  // currentVoter: undefined,
  voters: voterReducer,
  elections: electionReducer,
});
