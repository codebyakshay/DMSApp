import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: width * 0.04, // ~4% of width
  },
  headSection: {
    justifyContent: "center",
    padding: width * 0.04,
    marginVertical: height * 0.02,
  },
  headerText: {
    fontSize: width * 0.08, // scales with screen width
    textAlign: "center",
    fontWeight: "600",
  },
  fieldsContainer: {
    justifyContent: "center",
    padding: width * 0.04,
  },
  buttonContainer: {
    justifyContent: "center",
    padding: width * 0.04,
  },
});
