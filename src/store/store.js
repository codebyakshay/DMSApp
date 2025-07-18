import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/authSlice";
import fileReducer from "./slices/files/FileSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    file: fileReducer,
  },
});
