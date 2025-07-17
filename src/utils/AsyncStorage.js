// src/utils/AsyncStorage.js

import AsyncStorage from "@react-native-async-storage/async-storage";

const MOBILE_KEY = "auth_mobile";

// Save mobile number
export const saveMobile = async (num) => {
  try {
    await AsyncStorage.setItem(MOBILE_KEY, num);
  } catch (e) {
    console.error("Error saving mobile:", e);
  }
};

// Get mobile number
export const getMobile = async () => {
  try {
    return await AsyncStorage.getItem(MOBILE_KEY);
  } catch (e) {
    console.error("Error retrieving mobile:", e);
    return null;
  }
};

// Delete mobile number
export const removeMobile = async () => {
  try {
    await AsyncStorage.removeItem(MOBILE_KEY);
  } catch (e) {
    console.error("Error removing mobile:", e);
  }
};
