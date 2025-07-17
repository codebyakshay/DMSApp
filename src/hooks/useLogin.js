// src/hooks/useLogin.js
import { useDispatch } from "react-redux";
import { requestOTP } from "@/store/slices/auth/authThunks";
import { saveMobile } from "@/utils/AsyncStorage";
import { showToast } from "@/utils/showToast";

export const useLogin = () => {
  const dispatch = useDispatch();

  const loginWithMobile = async (mobileNumber, onSuccess) => {
    const resultAction = await dispatch(requestOTP(mobileNumber));

    if (requestOTP.fulfilled.match(resultAction)) {
      await saveMobile(mobileNumber);
      showToast("success", "OTP Sent", "Check your phone for the code");
      onSuccess(); // navigate or other effect
    } else {
      showToast(
        "error",
        "Login Failed",
        resultAction.payload || "Something went wrong"
      );
    }
  };

  return { loginWithMobile };
};
