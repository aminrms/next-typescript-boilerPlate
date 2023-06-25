import { combineReducers } from "@reduxjs/toolkit";
import homeSlicer from "../slicers/homeSlicer";

export const rootReducer = combineReducers({
  home: homeSlicer,
});
