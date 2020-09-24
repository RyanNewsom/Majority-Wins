import { Action, Dispatch } from "redux";
import { Item } from "../models/App";

export const REFRESH_ITEMS_REQUEST_ACTION = "REFRESH_ITEMS_REQUEST";
export const REFRESH_ITEMS_DONE_ACTION = "REFRESH_ITEMS_DONE";

export interface AddToCartAction extends Action<string> {}

export type RefreshItemsRequestAction = Action<string>;
export interface RefreshItemsDoneAction extends Action<string> {
  payload: {
    items: Item[];
  };
}

export type CreateRefreshItemsRequestAction = () => RefreshItemsRequestAction;
export type CreateRefreshItemsDoneAction = (
  items: Item[]
) => RefreshItemsDoneAction;

export const createRefreshItemsRequestAction: CreateRefreshItemsRequestAction = () => ({
  type: REFRESH_ITEMS_REQUEST_ACTION,
});

export const createRefreshItemsDoneAction: CreateRefreshItemsDoneAction = (
  items: Item[]
) => ({
  type: REFRESH_ITEMS_DONE_ACTION,
  payload: {
    items,
  },
});

export function isRefreshItemsRequestAction(
  action: Action<string>
): action is RefreshItemsRequestAction {
  return [REFRESH_ITEMS_REQUEST_ACTION].includes(action.type);
}

export function isRefreshItemsDoneAction(
  action: Action<string>
): action is RefreshItemsDoneAction {
  return [REFRESH_ITEMS_DONE_ACTION].includes(action.type);
}

export const refreshItems = () => {
  return async (dispatch: Dispatch) => {
    dispatch(createRefreshItemsRequestAction());
    const res = await fetch("http://localhost:3060/items");
    const items = await res.json();
    dispatch(createRefreshItemsDoneAction(items));
  };
};

export type AppActions = AddToCartAction;
