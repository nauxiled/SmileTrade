import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function AppButton({ title, onPress}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: "#b3e6ff" }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#efc7c1",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: 'black',
    fontSize: 18,
    textTransform: "uppercase",
  },
});

export default AppButton;
