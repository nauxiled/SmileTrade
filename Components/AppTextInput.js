import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={'black'}
          style = {styles.icon}
        />
      )}
      <TextInput style={styles.textInput} {...otherProps}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F3F4',
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon:{
      marginRight: 10
  },
  textInput: {
      color: "black",
      fontSize: 15,
      fontFamily: "Avenir"
  },
});

export default AppTextInput;