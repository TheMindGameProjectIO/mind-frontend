import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { User } from "../../types";

type UserState = User

const initialState: UserState = {
  id: "",
  email: "",
  nickname: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set: (state, actions: PayloadAction<User>) => {
      const { payload } = actions;

      Object.keys(payload).forEach((key) => {
        state[key as keyof UserState] = payload[key as keyof UserState];
      });
    },
    clear: (state) => {
      Object.keys(state).forEach((key) => {
        state[key as keyof UserState] = initialState[key as keyof UserState];
      });
    },
  },
});

export const { set, clear } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
