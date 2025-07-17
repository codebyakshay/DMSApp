// src/store/slices/authSlice.js

import { createSlice } from "@reduxjs/toolkit";
import addAuthExtraReducers from "./authExtraReducers";

const initialState = {
  token: "",
  mobileNumber: "",
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    setMobileNumber: (state, action) => {
      state.mobileNumber = action.payload;
    },
    logoutAction: (state) => {
      state.token = "";
      state.mobileNumber = "";
      state.isAuthenticated = false;
    },

    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: addAuthExtraReducers,
});

export const { setAuthToken, setMobileNumber, logoutAction } =
  authSlice.actions;

export default authSlice.reducer;
