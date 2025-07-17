import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LocalNavigation from "./Navigation/LocalNavigation/LocalNavigation";
import AuthNavigation from "./Navigation/AuthNavigation/AuthNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";

// Simulated token (replace with token state from AsyncStorage or Redux later)
const token = null;

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaProvider>
          <LocalNavigation />
        </SafeAreaProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
