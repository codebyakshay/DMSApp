// src/store/slices/authThunks.js

//default-redux
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthToken, setMobileNumber } from "./authSlice";

// api
import { generateOTP, validateOTP } from "@/services/authService";

//storage
import { removeToken, saveToken } from "@/utils/tokenStorage";
import { removeMobile } from "@/utils/AsyncStorage";

//slice
import { logoutAction } from "./authSlice";

export const requestOTP = createAsyncThunk(
  "auth/requestOTP",
  async (mobile, { dispatch, rejectWithValue }) => {
    try {
      const response = await generateOTP(mobile);
      if (response.status) {
        dispatch(setMobileNumber(mobile));
        return true;
      } else {
        return rejectWithValue(response.data || "Failed to send OTP");
      }
    } catch (err) {
      return rejectWithValue(err.message || "OTP request failed");
    }
  }
);

export const verifyOTP = createAsyncThunk(
  "auth/verifyOTP",
  async ({ mobile, otp }, { dispatch, rejectWithValue }) => {
    try {
      // send the object with correct keys
      const payload = { mobile_number: mobile, otp };

      const response = await validateOTP(payload);

      if (response.status && response.data?.token) {
        const { token } = response.data;
        dispatch(setAuthToken(token));
        await saveToken(token);
        return token;
      } else {
        return rejectWithValue(response.data || "Invalid OTP");
      }
    } catch (err) {
      console.error("OTP verification error:", err);
      return rejectWithValue(err.message || "OTP verification failed");
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch }) => {
    await removeToken();
    await removeMobile();
    dispatch(logoutAction());
  }
);
