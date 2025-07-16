import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../../Screen/DashboardScreen/DashboardScreen";

const Stack = createNativeStackNavigator();

export default function LocalNavigation() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </>
  );
}
