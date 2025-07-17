// utils/AsyncStorage.js
import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveMobile = async (num) => AsyncStorage.setItem("mobile", num);
export const getMobile = async () => AsyncStorage.getItem("mobile");
