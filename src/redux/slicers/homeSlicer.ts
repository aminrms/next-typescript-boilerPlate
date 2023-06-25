import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../setup/store";

interface initialState {
  homeDate: {
    loading: boolean;
    list: any[];
  };
}
const initialState: initialState = {
  homeDate: {
    loading: false,
    list: [],
  },
};

const homeSlicer = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export homeSlicerActions

export default homeSlicer.reducer;
