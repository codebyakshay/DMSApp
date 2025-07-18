import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-paper-dropdown";
import { DATA } from "./data/DATA";
import * as DocumentPicker from "expo-document-picker";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "./styles";
import { getToken } from "@/utils/tokenStorage";
import { useDispatch, useSelector } from "react-redux";
import { uploadDocumentThunk } from "@/store/slices/files/FileThunks";
import moment from "moment";
import Toast from "react-native-toast-message"; // Make sure this is imported

export default function FileUploadScreen({ navigation }) {
  const dispatch = useDispatch();
  const uploadStatus = useSelector((state) => state.file.uploadStatus);

  const [category, setCategory] = useState(null);
  const [option, setOption] = useState(null);

  // dorm data
  const [tagName, setTagName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [document_date] = useState(new Date());
  const [pickedFile, setPickedFile] = useState(null);

  // dropdown option filers
  const categoryOptions = DATA.map((item) => ({
    label: item.tagName,
    value: item.tagName,
  }));

  const selectedGroup = DATA.find((item) => item.tagName === category);
  const subOptions =
    selectedGroup?.options?.map((opt) => ({ label: opt, value: opt })) || [];
  //

  const handlePickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ["application/pdf", "image/*"], // Allow only PDF and images
        copyToCacheDirectory: true,
        multiple: false,
      });

      if (result.assets && result.assets.length > 0) {
        setPickedFile(result.assets[0]); // contains { name, uri, mimeType, size, etc. }
      }
    } catch (error) {
      console.warn("File pick error:", error);
    }
  };

  const handleUpload = async () => {
    if (!pickedFile || !category || !option || !remarks || !tagName) {
      Toast.show({
        type: "error",
        text1: "Missing Fields",
        text2: "Please fill in all fields and pick a file.",
      });
      return;
    }

    const filePayload = {
      file: {
        uri: pickedFile.uri,
        name: pickedFile.name,
        type: pickedFile.mimeType,
      },
      major_head: category,
      minor_head: option,
      document_date: moment(document_date).format("DD-MM-YYYY"),
      document_remarks: remarks,
      tags: [{ tag_name: tagName }],
      user_id: "nitin", // Replace later with real user ID
    };

    try {
      const res = await dispatch(uploadDocumentThunk(filePayload)).unwrap();

      if (res?.status) {
        Toast.show({
          type: "success",
          text1: "Upload Successful",
          text2: "Your document has been uploaded.",
        });
        await navigation.goBack();
      } else {
        Toast.show({
          type: "error",
          text1: "Upload Failed",
          text2: res?.message || "Unknown error occurred.",
        });
      }
    } catch (err) {
      console.error("Upload error:", err);
      Toast.show({
        type: "error",
        text1: "Upload Error",
        text2: err?.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      {/* FILE PICKER */}
      <View style={styles.filePickerContainer}>
        <Button
          mode="outlined"
          onPress={handlePickFile}
          style={{ marginTop: 16 }}
        >
          {pickedFile ? pickedFile.name : "Pick PDF or Image"}
        </Button>

        {pickedFile && (
          <Text style={{ marginTop: 8, fontSize: 12, color: "gray" }}>
            Uploaded File: 9i {pickedFile.mimeType} — {pickedFile.size} bytes
          </Text>
        )}
      </View>

      {/* MAJOR,MINOR HEAD DROPDWON */}

      <View style={styles.dropdownContainer}>
        <View style={{ marginVertical: 5 }}>
          <Dropdown
            label="Major Head"
            placeholder="Select Category"
            options={categoryOptions}
            value={category}
            onSelect={(val) => {
              setCategory(val);
              setOption(null); // reset second dropdown on change
            }}
          />
        </View>

        <View style={{ marginVertical: 5 }}>
          <Dropdown
            label="Minor Head"
            placeholder="Select Option"
            options={subOptions}
            value={option}
            onSelect={setOption}
            disabled={!category}
          />
        </View>
      </View>

      {/* REMARK Section */}
      <View style={styles.remarkContainer}>
        <TextInput
          label="Remarks"
          value={remarks}
          onChangeText={(text) => setRemarks(text)}
        />
      </View>

      {/* TAGNAME */}

      <View style={styles.tagContainer}>
        <TextInput
          label="Tag"
          value={tagName}
          onChangeText={(text) => setTagName(text)}
        />
      </View>

      {/* Upload Btn container */}

      <View style={styles.btnContainer}>
        <Button
          mode="contained"
          loading={uploadStatus === "loading"}
          disabled={uploadStatus === "loading"}
          onPress={handleUpload}
        >
          {uploadStatus === "loading" ? "Uploading..." : "Upload Document"}
        </Button>
      </View>
    </ScrollView>
  );
}
