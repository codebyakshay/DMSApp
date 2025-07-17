import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: "#f9f9f9",
  },

  textInputContainer: {
    flex: 1,
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

  infoTextContainer: {
    paddingHorizontal: width * 0.02,
  },

  buttonContainer: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: width * 0.02,
    marginVertical: height * 0.04,
  },
});
