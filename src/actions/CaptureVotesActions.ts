import { Action, Dispatch } from 'redux';
import { Election } from '../models/App';

export const CAPTURE_ELECTION_VOTES_ACTION = "CAPTURE_ELECTION_VOTES";

export interface CaptureElectionVotesAction extends Action<string> {
  payload: { election: Election }
}

export type CreateCaptureElectionVotesAction = (election: Election) => CaptureElectionVotesAction;

export const createCaptureElectionVotesAction: CreateCaptureElectionVotesAction = (election) => ({
  type: CAPTURE_ELECTION_VOTES_ACTION,
  payload: { election }
});

export const submitElectionVotes = (election: Election) => {
  return async (dispatch: Dispatch) => {
    dispatch(createCaptureElectionVotesAction(election));
    await fetch(`http://localhost:3060/elections/${encodeURIComponent(election.id.toString())}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(election),
    });
  };
}

