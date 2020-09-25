import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { AppState, Election, Voter } from "../models/App";

import { MainComponent } from "../components/MainComponent";
import * as AppActions from "../actions/AppActions";
import * as RegisterVotersActions from "../actions/RegisterVotersActions";
import * as ElectionActions from "../actions/ElectionActions";
import { TableSorting } from "../components/RegisteredVotersTableComponent";

export function AppContainer() {
  const voters = useSelector<AppState, Voter[]>((state) => state.voters);
  const elections = useSelector<AppState, Election[]>(
    (state) => state.elections
  );
  const expandedElectionId = useSelector<AppState, number>(
    (state) => state.expandedElectionId
  );
  const dispatch = useDispatch();
  const registeredVotersSelectedTab = useSelector<AppState, number>(
    (state) => state.registeredVotersSelectedTab || 0
  );

  const registeredVotersTableSort = useSelector<AppState, TableSorting>(
    (state) =>
      state.registeredVotersTableSort || { order: "desc", orderedBy: "id" }
  );
  const registeredVotersTablePage = useSelector<AppState, number>(
    (state) => state.registeredVotersTablePage || 0
  );
  const registeredVotersRowsPerPage = useSelector<AppState, number>(
    (state) => state.registeredVotersRowsPerPage
  );
  const registeredVotersSelectedVoters = useSelector<AppState, number[]>(
    (state) => state.registeredVotersSelectedVoters
  );

  const boundActionsMap = bindActionCreators(
    {
      onExpandElectionRow: ElectionActions.createExpandElectionAction,
      onCreateElection: ElectionActions.appendElection,
      //   onDelete: CarToolActions.deleteCar,
      //   onSave: CarToolActions.updateCar,
      //   addNewCar: CarToolActions.addNewCar,
      //   onHeaderClicked: CarToolActions.createSortAction,
      //   setCarBeingEdited: CarToolActions.createEditedAction,
      //   cancel: CarToolActions.createCancelAction,
      registerVotersTabSelected:
        RegisterVotersActions.createRegisterVotersTabSelectedAction,
      registeredVotersDeleteVoters: RegisterVotersActions.deleteVoters,
      registeredVotersSortSelected:
        RegisterVotersActions.createRegisterVotersSortSelectedAction,
      registeredVotersVotersSelected:
        RegisterVotersActions.createRegisterVotersSelectedAction,
      registeredVotersTablePageUpdated:
        RegisterVotersActions.createRegisterVotersTablePageSelectedAction,
      registeredVotersRowsPerPageUpdated:
        RegisterVotersActions.createRegisterVotersTableRowsSelectedAction,
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
      registeredVotersSelectedTab={registeredVotersSelectedTab || 0}
      registeredVotersTableSort={registeredVotersTableSort}
      registeredVotersTablePage={registeredVotersTablePage}
      registeredVotersRowsPerPage={registeredVotersRowsPerPage}
      registeredVotersSelectedVoters={registeredVotersSelectedVoters}
      {...boundActionsMap}
    />
  );
}
