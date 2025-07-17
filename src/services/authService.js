// src/services/authService.js
import api from "./api";
import { ENDPOINTS } from "./endpoints";

export const generateOTP = async (mobile) => {
  const res = await api.post(ENDPOINTS.GENERATE_OTP, { mobile_number: mobile });
  return res.data;
};

export const validateOTP = async ({ mobile_number, otp }) => {
  try {
    const res = await api.post(ENDPOINTS.VALIDATE_OTP, {
      mobile_number,
      otp,
    });

    return res.data;
  } catch (err) {
    console.error("validateOTP ERROR:", err.response?.data || err.message); // 👈 Show error details
    throw err;
  }
};
