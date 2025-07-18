// src/Navigation/AuthNavigation/AuthNavigation.js

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "@/Screen/DashboardScreen/DashboardScreen";
import FileUploadScreen from "@/Screen/FileUploadScreen/FileUploadScreen";
const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="FileUploadScreen"
        component={FileUploadScreen}
        options={{
          presentation: "fullScreenModal",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
