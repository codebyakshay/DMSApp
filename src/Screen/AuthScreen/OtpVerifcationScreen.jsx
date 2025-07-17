import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import React, { useState } from "react";
import { OtpInput } from "react-native-otp-entry";
import { Button } from "react-native-paper";
import { useRoute } from "@react-navigation/native";

export default function OtpVerifcationScreen({ navigation }) {
  const route = useRoute();
  const { mobileNumber } = route?.params;
  const [otp, setOtp] = useState("");

  const handleOtpFilled = (value) => {
    console.log("OTP Submitted:", value);
    console.log("Mobile", mobileNumber);
  };

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
          keyboardType="numaric"
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
      <View style={styles.buttonContainer}>
        <View style={{ width: "45%" }}>
          <Button
            mode="contained-tonal"
            onPress={() => {
              return navigation.navigate("LoginScreen", {
                resend: true,
              });
            }}
          >
            Resend otp
          </Button>
        </View>

        <View style={{ width: "45%" }}>
          <Button mode="contained" onPress={() => {}}>
            Verify
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: "#f9f9f9",
  },

  textInputContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: width * 0.04,
  },
  infoText: {
    fontSize: width * 0.055,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: height * 0.03,
  },
  title: {
    fontSize: width * 0.055,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: height * 0.03,
  },

  buttonContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: width * 0.02,
  },
});
