import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function RoundButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: "#efc7c1" }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#efc7c1",
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    marginVertical: 10,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
  },
  text: {
    color: "black",
    fontFamily: 'Noteworthy',
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RoundButton;
