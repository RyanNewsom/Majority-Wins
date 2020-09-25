import { Reducer, combineReducers } from 'redux';

import { isRefreshVotersDoneAction } from '../actions/AppActions';
import {
  isAppendElectionAction,
  isExpandElectionAction,
  isRefreshElectionsDoneAction,
} from '../actions/ElectionActions';
import { isSetCurrentElectionAction, isSetCurrentVoterAction } from '../actions/CaptureVotesActions';
import { Voter, AppState, Election } from '../models/App';
import { AppActions } from '../actions/AppActions';

export const voterReducer: Reducer<Voter[], AppActions> = (voters = [], action) => {
  if (isRefreshVotersDoneAction(action)) {
    return action.payload.voters;
  }

  return voters;
};

export const electionReducer: Reducer<Election[], AppActions> = (elections = [], action) => {
  if (isAppendElectionAction(action)) {
    return elections.concat(action.payload.election);
  }
  if (isRefreshElectionsDoneAction(action)) {
    return action.payload.elections;
  }

  return elections;
};

export const expandedElectionIdReducer: Reducer<number, AppActions> = (expandedElectionId = 0, action) => {
  if (isExpandElectionAction(action)) {
    // if you select the row that is expanded, collapse it
    if (expandedElectionId === action.payload.expandedElectionId) {
      return -1;
    }
    // standard expand
    else {
      return action.payload.expandedElectionId;
    }
  }

  return expandedElectionId;
};

export const setCurrentElectionReducer: Reducer<Election, AppActions> = (election = {} as Election, action) => {
  if (isSetCurrentElectionAction(action)) {
    return action.payload.election;
  }

  return election;
};

export const setCurrentVoterReducer: Reducer<Voter, AppActions> = (voter = {} as Voter, action) => {
  if (isSetCurrentVoterAction(action)) {
    return action.payload.voter;
  }

  return voter;
};

export const appReducer: Reducer<AppState, AppActions> = combineReducers({
  // currentVoter: undefined,
  voters: voterReducer,
  elections: electionReducer,
  expandedElectionId: expandedElectionIdReducer,
  currentElection: setCurrentElectionReducer,
  currentVoter: setCurrentVoterReducer,
});
