import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { AppState, Election, Voter } from "../models/App";

import { MainComponent } from "../components/MainComponent";
import * as AppActions from "../actions/AppActions";
import * as RegisterVotersActions from "../actions/RegisterVotersActions";

export function AppContainer() {
  const voters = useSelector<AppState, Voter[]>((state) => state.voters);
  const elections = useSelector<AppState, Election[]>(
    (state) => state.elections
  );
  const dispatch = useDispatch();
  const registeredVotersSelectedTab = useSelector<AppState, number>(
    (state) => state.registeredVotersSelectedTab || 0
  );

  const boundActionsMap = bindActionCreators(
    {
      //   onDelete: CarToolActions.deleteCar,
      //   onSave: CarToolActions.updateCar,
      //   addNewCar: CarToolActions.addNewCar,
      //   onHeaderClicked: CarToolActions.createSortAction,
      //   setCarBeingEdited: CarToolActions.createEditedAction,
      //   cancel: CarToolActions.createCancelAction,
      onRegisterVotersTabSelected:
        RegisterVotersActions.createRegisterVotersTabSelectedAction,
    },
    dispatch
  );

  useEffect(() => {
    dispatch(AppActions.refreshVoters());
    dispatch(AppActions.refreshElections());
  }, [dispatch]);

  return (
    <MainComponent
      voters={voters}
      elections={elections}
      registeredVotersSelectedTab={registeredVotersSelectedTab || 0}
      {...boundActionsMap}
    />
  );
}
