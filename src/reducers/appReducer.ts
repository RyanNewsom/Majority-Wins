import { Reducer, combineReducers } from "redux";

import {
  isRefreshItemsDoneAction,
  isRefreshItemsRequestAction,
} from "../actions/AppActions";
import { Item, AppState } from "../models/App";
import { AppActions } from "../actions/AppActions";

export const itemReducer: Reducer<Item[], AppActions> = (
  items = [],
  action
) => {
  if (isRefreshItemsDoneAction(action)) {
    return action.payload.items;
  }

  return items;
};

export const appReducer: Reducer<AppState, AppActions> = combineReducers({
  items: itemReducer,
});
