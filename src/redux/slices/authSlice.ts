import { createSlice } from "@reduxjs/toolkit";
import { ACCESS_TOKEN_KEY } from "../../api";
import type { RootState } from "..";

interface AuthState {
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: !!localStorage.getItem(ACCESS_TOKEN_KEY),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authorize: (state) => {
      state.isAuth = true;
    },
    unauthorize: (state) => {
      state.isAuth = false;
    },
  },
});

export const { authorize, unauthorize } = authSlice.actions;

export const selectIsAuth = (state: RootState) => state.auth.isAuth;

export default authSlice.reducer;
