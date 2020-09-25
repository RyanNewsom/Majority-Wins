import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, Election, Voter } from '../models/App';

import { MainComponent } from '../components/MainComponent';
import * as AppActions from '../actions/AppActions';
import * as ElectionActions from '../actions/ElectionActions';
import * as CaptureVotesActions from '../actions/CaptureVotesActions';

export function AppContainer() {
  const voters = useSelector<AppState, Voter[]>(state => state.voters);
  const elections = useSelector<AppState, Election[]>(state => state.elections);
  const expandedElectionId = useSelector<AppState, number>(state => state.expandedElectionId);
  const dispatch = useDispatch();

  const boundActionsMap = bindActionCreators(
    {
      onExpandElectionRow: ElectionActions.createExpandElectionAction,
      onCreateElection: ElectionActions.appendElection,
      onCaptureElectionVotes: CaptureVotesActions.submitElectionVotes,
      //   onDelete: CarToolActions.deleteCar,
      //   onSave: CarToolActions.updateCar,
      //   addNewCar: CarToolActions.addNewCar,
      //   onHeaderClicked: CarToolActions.createSortAction,
      //   setCarBeingEdited: CarToolActions.createEditedAction,
      //   cancel: CarToolActions.createCancelAction,
    },
    dispatch
  );

  useEffect(() => {
    dispatch(AppActions.refreshVoters());
    dispatch(ElectionActions.refreshElections());
  }, [dispatch]);

  return (
    <MainComponent
      voters={voters}
      elections={elections}
      expandedElectionId={expandedElectionId}
      {...boundActionsMap}
    />
  );
}
