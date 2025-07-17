import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "@/Screen/AuthScreen/LoginScreen";
import OtpVerifcationScreen from "@/Screen/AuthScreen/OtpVerifcationScreen";

const Stack = createNativeStackNavigator();

export default function LocalNavigation() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="OtpVerifcationScreen"
          component={OtpVerifcationScreen}
        />
      </Stack.Navigator>
    </>
  );
}
