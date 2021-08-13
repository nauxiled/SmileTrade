import React from "react";
import { View, StyleSheet, Image, Text, TouchableHighlight } from "react-native";

function ListItem({ title, subTitle, image }) {
  return (
    <TouchableHighlight 
    underlayColor = "#f2b5ac"
    onPress={() => console.log()}>
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
    borderWidth: 5,
    borderColor: "white"

  },
  subTitle: {
    color: 'grey',
    fontFamily: "Avenir",
    fontSize: 18,
  },
  title: {
    fontWeight: "500",
    fontFamily: "Avenir",
    fontSize: 18,
  },
});

export default ListItem;