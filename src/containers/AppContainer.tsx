import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, Election, Voter } from '../models/App';

import { MainComponent } from '../components/MainComponent';
import * as AppActions from '../actions/AppActions';

export function AppContainer() {
  const voters = useSelector<AppState, Voter[]>(state => state.voters);
  const elections = useSelector<AppState, Election[]>(state => state.elections);
  const dispatch = useDispatch();

  const boundActionsMap = bindActionCreators(
    {
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
    dispatch(AppActions.refreshElections());
  }, [dispatch]);

  return <MainComponent voters={voters} elections={elections} {...boundActionsMap} />;
}
