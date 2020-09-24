import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { Item, AppState } from "../models/App";

import { MainComponent } from "../components/MainComponent";
import * as AppActions from "../actions/AppActions";

export function AppContainer() {
  //const items = useSelector<AppState, Item[]>(itemSelector);
  const items = useSelector<AppState, Item[]>((state) => state.items);
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
    dispatch(AppActions.refreshItems());
  }, [dispatch]);

  return <MainComponent items={items} {...boundActionsMap} />;
}
