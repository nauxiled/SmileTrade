import React from "react";
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback } from "react-native";

function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: 'white',
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: 'grey',
    fontWeight: "bold",
    fontFamily: "Avenir",
    fontSize: 18,
  },
  title: {
    marginBottom: 7,
    fontFamily: "Avenir",
    fontSize: 18,
  },
});

export default Card;