import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "..";

interface SecretModeState {
  status: boolean;
}

const initialState: SecretModeState = {
  status: false,
};

export const secretModeSlice = createSlice({
  name: "secretMode",
  initialState,
  reducers: {
    activate: (state) => {
      state.status = true;
    },
    diactivate: (state) => {
      state.status = false;
    },
  },
});

export const { activate, diactivate } = secretModeSlice.actions;

export const selectStatus = (state: RootState) => state.secretMode.status;

export default secretModeSlice.reducer;
