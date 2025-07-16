import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LocalNavigation from "./Navigation/LocalNavigation/LocalNavigation";
import AuthNavigation from "./Navigation/AuthNavigation/AuthNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Simulated token (replace with token state from AsyncStorage or Redux later)
const token = "";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {token ? <LocalNavigation /> : <AuthNavigation />}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
