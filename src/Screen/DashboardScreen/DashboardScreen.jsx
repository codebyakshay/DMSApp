import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDocumentsThunk } from "@/store/slices/files/FileThunks";
import FileCard from "@/components/FileCard";
import { Button, Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { dismissKeyboard } from "@/utils/dismissKeyboard";
import { styles } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DashboardScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const inpRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  ///

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);

  const handleScreenPressOutsideField = () => dismissKeyboard(inpRef);

  return (
    <TouchableWithoutFeedback
      onPress={() => handleScreenPressOutsideField()}
      accessible={false}
    >
      <View style={{ flex: 1, padding: 24 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />

        <View
          style={{
            marginVertical: 10,
          }}
        >
          <View style={styles.datepickerContainerForSearch}>
            <Button mode="outlined" onPress={() => setShowFrom(true)}>
              From: {fromDate.toDateString()}
            </Button>
            {showFrom && (
              <DateTimePicker
                value={fromDate}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowFrom(false);
                  if (selectedDate) setFromDate(selectedDate);
                }}
              />
            )}

            <Button mode="outlined" onPress={() => setShowTo(true)} style={{}}>
              To: {toDate.toDateString()}
            </Button>
            {showTo && (
              <DateTimePicker
                value={toDate}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowTo(false);
                  if (selectedDate) setToDate(selectedDate);
                }}
              />
            )}
          </View>
        </View>

        <View
          style={{
            justifyContent: "flex-end",
            flex: 1,
            marginBottom: 26,
          }}
        >
          <Button
            onPress={() => navigation.navigate("FileUploadScreen")}
            mode="contained-tonal"
            icon="plus"
            style={{ marginTop: 12 }}
          >
            Upload
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
