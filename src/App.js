import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LocalNavigation from "./Navigation/LocalNavigation/LocalNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import Toast from "react-native-toast-message";
import { store } from "./store/store";
import { toastConfig } from "../toastConfig";

// Simulated token (replace with token state from AsyncStorage or Redux later)
const token = null;

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaProvider>
          <ReduxProvider store={store}>
            <LocalNavigation />
            <Toast config={toastConfig} />
          </ReduxProvider>
        </SafeAreaProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
