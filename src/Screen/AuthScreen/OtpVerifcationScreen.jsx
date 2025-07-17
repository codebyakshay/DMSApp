import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import React, { useState } from "react";
import { OtpInput } from "react-native-otp-entry";
import { Button } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import { styles } from "./OtpVerifyStyles";

export default function OtpVerifcationScreen({ navigation }) {
  const route = useRoute();
  const { mobileNumber } = route?.params;
  const [otp, setOtp] = useState("");

  const handleOtpFilled = (value) => {
    console.log("OTP Submitted:", value);
    console.log("Mobile", mobileNumber);
  };

  function handleResendOtp() {
    return navigation.navigate("LoginScreen", {
      resend: true,
    });
  }

  return (
    <SafeAreaView style={styles.screen}>
      {/* OTP BOX CONTAINER */}
      <View style={styles.textInputContainer}>
        <Text style={styles.infoText}>
          Enter the otp that you have received in sms
        </Text>
        <Text style={styles.title}>Enter OTP</Text>
        <OtpInput
          numberOfDigits={6}
          focusColor="#8ac5ffff"
          onTextChange={(text) => setOtp(text)}
          onFilled={handleOtpFilled}
          keyboardType="numeric"
          theme={{
            pinCodeContainerStyle: {
              borderWidth: 0.5,
              borderColor: "#8ac5ffff",
              borderRadius: 99,
              backgroundColor: "#fff",
              height: 55,
              width: 55,
            },
          }}
        />
      </View>

      {/* BTNS CONTAINER */}
      <View style={styles.infoTextContainer}>
        <Text style={{ color: "grey", textAlign: "center" }}>
          if you have not received the otp, please try to recent it{" "}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={{ width: "90%" }}>
          <Button mode="contained-tonal" onPress={() => handleResendOtp()}>
            Resend otp
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
