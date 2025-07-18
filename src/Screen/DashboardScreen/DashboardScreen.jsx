import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDocumentsThunk } from "@/store/slices/files/FileThunks";
import FileCard from "@/components/FileCard";
import { Button, Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { dismissKeyboard } from "@/utils/dismissKeyboard";

export default function DashboardScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { documents, fetchStatus } = useSelector((state) => state.file);

  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef();

  useEffect(() => {
    dispatch(fetchDocumentsThunk({ start: 0, length: 1 }));
  }, [dispatch]);

  useEffect(() => {
    if (fetchStatus === "succeeded") {
      // console.log("Fetched documents:", documents);
    }
  }, [fetchStatus, documents]);

  // console.log(documents);

  const handleScreenPressOutsideField = () => dismissKeyboard(searchRef);

  return (
    <TouchableWithoutFeedback onPress={handleScreenPressOutsideField}>
      <View style={{ flex: 1, padding: 12 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          ref={searchRef}
        />

        <Button
          onPress={() => navigation.navigate("FileUploadScreen")}
          mode="contained-tonal"
          icon="plus"
          style={{ marginTop: 12 }}
        >
          Upload
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});
