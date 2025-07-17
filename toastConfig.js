// ./toastConfig.js

import {
  BaseToast,
  ErrorToast,
  SuccessToast,
  InfoToast,
} from "react-native-toast-message";

export const toastConfig = {
  success: (props) => (
    <SuccessToast
      {...props}
      text1Style={{ fontSize: 14, fontWeight: "600" }}
      text2Style={{ fontSize: 14 }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{ fontSize: 14, fontWeight: "600" }}
      text2Style={{ fontSize: 14 }}
    />
  ),
  info: (props) => (
    <InfoToast
      {...props}
      text1Style={{ fontSize: 16 }}
      text2Style={{ fontSize: 13 }}
    />
  ),
};
