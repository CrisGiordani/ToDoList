import { StyleSheet } from "react-native";

interface Styles {
  doTask: Object;
  doneTask: Object;
  container: Object;
}

export const styled: Styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    flexDirection: "row",
    borderRadius: 8,
    flex: 1,
    width: "100%",
    padding: 20,
    marginTop: 2,
  },

  doTask: {
    fontSize: 22,
    color: "#FFF",
    width: "75%",
  },

  doneTask: {
    fontSize: 22,
    color: "#555",
    textDecorationLine: "line-through",
    width: "75%",
  },
});
