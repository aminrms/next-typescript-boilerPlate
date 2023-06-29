import { combineReducers } from "@reduxjs/toolkit";
import homeSlicer from "../slicers/homeSlicer";
import { homeApi } from "../api/homeApi";
import settingSlice from "../slicers/setting";

export const rootReducer = combineReducers({
  home: homeSlicer,
  setting: settingSlice,
  [homeApi.reducerPath]: homeApi.reducer,
});
