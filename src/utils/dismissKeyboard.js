// src/utils/keyboard.js
import { Keyboard } from "react-native";

export const dismissKeyboard = (inputRef) => {
  if (inputRef?.current) {
    inputRef.current.blur();
  }
  Keyboard.dismiss();
};
