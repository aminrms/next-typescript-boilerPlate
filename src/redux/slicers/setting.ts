import {
  getDataFromLocalStorage,
  setLocalStorage,
} from "@/utils/storageHandlers";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialState {
  mode: string | null;
}

const initialState = {
  mode: getDataFromLocalStorage("theme", "light"),
} as initialState;

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    handleTheWebMode: (state, action: PayloadAction<string>) => {
      state.mode = action?.payload;
      setLocalStorage(action?.payload, "theme");
    },
  },
  extraReducers: (builder) => {},
});

export const { handleTheWebMode } = settingSlice?.actions;

export default settingSlice.reducer;
