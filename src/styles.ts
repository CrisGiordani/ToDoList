import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    flex: 1,
    backgroundColor: "#262626",
    borderRadius: 6,
    fontSize: 18,
    color: "#FFF",
    padding: 20,
    height: 56,
  },

  button: {
    backgroundColor: "#236F9F",
    padding: 16,
    borderRadius: 6,
    height: 56,
  },

  form: {
    marginTop: 16,
    flexDirection: "row",
    width: "100%",
  },

  header: {
    flexDirection: "row",
    marginTop: 30,
    paddingHorizontal: 2,
    paddingVertical: 8,
  },

  headerLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "50%",
  },

  headerRight: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "50%",
  },

  textLeft: {
    textAlign: "left",

    fontWeight: "bold",
    fontSize: 16,
    color: "#448DB9",
  },

  textRight: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#5E60CE",
  },

  counter: {
    backgroundColor: "#333",
    borderRadius: 12,
    padding: 0,
    width: 20,
    height: 20,
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
    marginLeft: 8,
  },
});
