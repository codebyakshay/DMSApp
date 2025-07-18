// src/Screen/AuthScreen/LoginScreen.jsx

import {
  SafeAreaView,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";

import { useEffect, useRef, useState } from "react";
import { Button, TextInput } from "react-native-paper";

import { styles } from "./styles";

import { dismissKeyboard } from "@/utils/dismissKeyboard";
import { getMobile, saveMobile } from "@/utils/AsyncStorage";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { showToast } from "@/utils/showToast";
import { useLogin } from "@/hooks/useLogin";

export default function LoginScreen({ navigation }) {
  const route = useRoute();
  const inpRef = useRef();
  const [mobileNumber, setMobileNumber] = useState("");
  const { loginWithMobile } = useLogin();

  const { loading, error } = useSelector((state) => state.auth);
  const { resend } = route?.params || {};

  const handleLogin = async () => {
    if (mobileNumber.length !== 10) {
      showToast("error", "Invalid", "Please enter a valid 10-digit number");
      return;
    }

    await loginWithMobile(mobileNumber, () =>
      navigation.navigate("OtpVerifcationScreen", { mobileNumber })
    );
  };

  const handleScreenPressOutsideField = () => dismissKeyboard(inpRef);

  useEffect(() => {
    if (error) {
      showToast("error", "Login Failed", error);
    }
  }, [error]);

  useEffect(() => {
    if (resend) {
      getMobile().then((savedNumber) => {
        if (savedNumber) {
          setMobileNumber(savedNumber);
        }
      });
    }
  }, [resend]);

  return (
    <TouchableWithoutFeedback onPress={handleScreenPressOutsideField}>
      <SafeAreaView style={styles.screen}>
        {/* HEADER CONTAINER */}
        <View style={styles.headSection}>
          <Text style={styles.headerText}>
            Enter the mobile number to use this app
          </Text>
        </View>

        {/* TextInput for mobile container */}
        <View style={styles.fieldsContainer}>
          <TextInput
            value={mobileNumber}
            onChangeText={(text) => setMobileNumber(text)}
            label="Mobile Number"
            keyboardType="numeric"
            maxLength={10}
            mode="outlined"
            ref={inpRef}
            left={<TextInput.Affix text="+91" />}
            right={
              mobileNumber.length > 0 ? (
                <TextInput.Icon
                  icon="close"
                  onPress={() => setMobileNumber("")}
                />
              ) : null
            }
          />
        </View>

        <View style={styles.buttonContainer}>
          {resend ? (
            <Button
              icon="repeat"
              mode="contained"
              loading={loading}
              disabled={loading}
              onPress={handleLogin}
            >
              Resend & Verify OTP
            </Button>
          ) : (
            <Button
              icon="account-arrow-right"
              mode="contained"
              loading={loading}
              disabled={loading}
              onPress={handleLogin}
            >
              Login
            </Button>
          )}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
