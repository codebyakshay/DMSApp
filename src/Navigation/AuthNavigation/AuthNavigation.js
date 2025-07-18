// src/Navigation/AuthNavigation/AuthNavigation.js

import { IconButton } from "react-native-paper"; // or use Button / Text
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "@/Screen/DashboardScreen/DashboardScreen";
import FileUploadScreen from "@/Screen/FileUploadScreen/FileUploadScreen";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { logoutAction } from "@/store/slices/auth/authSlice";
import { logout } from "@/store/slices/auth/authThunks";

const Stack = createNativeStackNavigator();

export default function AuthNavigation({ navigation }) {
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
        options={({ navigation }) => ({
          headerRight: () => {
            const dispatch = useDispatch();

            const handleLogout = async () => {
              await dispatch(logout());
            };

            return (
              <IconButton icon="logout" size={24} onPress={handleLogout} />
            );
          },
          headerShown: true,
          title: "Dashboard",
        })}
      />
      <Stack.Screen
        name="FileUploadScreen"
        component={FileUploadScreen}
        options={{
          headerShown: true,
          title: "Upload File",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
