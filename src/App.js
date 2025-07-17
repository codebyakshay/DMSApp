import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider, useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
import { store } from "./store/store";
import { toastConfig } from "../toastConfig";
import AuthNavigation from "./Navigation/AuthNavigation/AuthNavigation";
import LocalNavigation from "./Navigation/LocalNavigation/LocalNavigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getToken } from "./utils/tokenStorage";
import { setAuthToken } from "./store/slices/auth/authSlice";

function MainAppNavigator() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const restoreAuth = async () => {
      const token = await getToken();
      if (token) {
        dispatch(setAuthToken(token));
      }
    };

    restoreAuth();
  }, []);

  return isAuthenticated ? <AuthNavigation /> : <LocalNavigation />;
}

function Root() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaProvider>
          <MainAppNavigator />
          <Toast config={toastConfig} />
        </SafeAreaProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ReduxProvider store={store}>
      <Root />
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({});
