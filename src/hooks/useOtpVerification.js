// src/hooks/useOtpVerification.js

import { useDispatch, useSelector } from "react-redux";
import { verifyOTP } from "@/store/slices/auth/authThunks";
import { showToast } from "@/utils/showToast";

export const useOtpVerification = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const submitOtp = async (mobileNumber, otp, onSuccess) => {
    const result = await dispatch(verifyOTP({ mobile: mobileNumber, otp }));

    if (verifyOTP.fulfilled.match(result)) {
      showToast("success", "Verified", "You're now logged in.");
      // delay slightly to allow Redux to update
      setTimeout(() => onSuccess?.(), 100);
    } else {
      showToast(
        "error",
        "Verification Failed",
        result.payload || "Invalid OTP"
      );
    }
  };

  return { loading, error, submitOtp };
};
