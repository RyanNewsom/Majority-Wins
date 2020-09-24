import { AppState } from "../models/App";

export const itemSelector = (state: AppState) => {
  //   return state.items.concat().sort((a: Item, b: Item) => {
  //     let propertyA = a[state.sortedHeaderKey as keyof Car];
  //     let propertyB = b[state.sortedHeaderKey as keyof Car];
  //     var numIfTrue = state.sortedDescending ? 1 : -1;
  //     var numIfFalse = state.sortedDescending ? -1 : 1;

  //     return propertyA > propertyB ? numIfTrue : numIfFalse;
  //   });
  return state.items;
};
