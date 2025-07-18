// src/components/FileCard.jsx

import { View, StyleSheet, Pressable, Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { formatDate } from "@/utils/formatDate";

export default function FileCard({ items = {} }) {
  const file_url = items.file_url || "";
  const ext = file_url.split("?")[0].split(".").pop().toLowerCase();
  const imageExts = ["jpg", "jpeg", "png", "gif"];

  let IconComponent;
  if (ext === "pdf") {
    IconComponent = <FontAwesome5 name="file-pdf" size={28} color="black" />;
  } else if (imageExts.includes(ext)) {
    IconComponent = (
      <MaterialCommunityIcons name="file-jpg-box" size={28} color="black" />
    );
  } else {
    // Fallback icon for unknown/unsupported types
    IconComponent = (
      <FontAwesome6 name="file-circle-exclamation" size={28} color="black" />
    );
  }

  return (
    <Pressable style={styles.container}>
      <View style={styles.previewIconContainer}>{IconComponent}</View>

      <View style={styles.metaContainer}>
        <Text>Remarks: {items.document_remarks}</Text>
        <Text>Document date: {formatDate(items.document_date)}</Text>
        <Text>Created at: {formatDate(items.upload_time)}</Text>
        <View
          style={{
            flexDirection: "row-reverse",
            alignItems: "flex-end",
            marginTop: 10,
          }}
        >
          <Text>Created by: {items.uploaded_by}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    flexDirection: "row",
    minHeight: 50,
    marginVertical: 8,
    borderColor: "grey",
    borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 6,
  },

  previewIconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    backgroundColor: "lightgrey",
    borderRadius: 99,
  },

  metaContainer: {
    flexDirection: "column",
    width: "82%",
    justifyContent: "center",
  },
});
