import { combineReducers } from "@reduxjs/toolkit";
import homeSlicer from "../slicers/homeSlicer";
import { homeApi } from "../api/homeApi";

export const rootReducer = combineReducers({
  home: homeSlicer,
  [homeApi.reducerPath]: homeApi.reducer,
});
