import {
  SafeAreaView,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useRef, useState } from "react";
import { styles } from "./styles";
import { Button, TextInput } from "react-native-paper";
import { dismissKeyboard } from "@/utils/dismissKeyboard";
import { saveMobile } from "@/utils/AsyncStorage";

export default function LoginScreen({ navigation }) {
  const inpRef = useRef();
  const [mobileNumber, setMobileNumber] = useState("");

  async function handleLogin() {
    await saveMobile(mobileNumber);
    navigation.navigate("OtpVerifcationScreen", { mobileNumber });
  }

  const handleScreenPressOutsideField = () => dismissKeyboard(inpRef);

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
          <Button
            icon="account-arrow-right"
            mode="contained"
            onPress={() => handleLogin()}
          >
            Login
          </Button>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
