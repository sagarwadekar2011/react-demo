import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    isAdmin: false,
  },
  reducers: {
    login(state, action) {
      const authData = action.payload;
      if (
        authData.username &&
        authData.username === "admin" &&
        authData.password === "admin"
      ) {
        state.isAdmin = true;
      }
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.isAdmin = false;
    },
  },
});

const { actions, reducer } = authSlice;
export default reducer;
export const { login, logout } = actions;
