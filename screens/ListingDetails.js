import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import ListItem from "../Components/ListItem";


function ListingDetails(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("/Users/durga/Desktop/agile/DoneWithIt/app/assets/redJacket.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.description}>Size: M. This is a preloved shirt and it has two sets of polo shirts. If interested please contact me...</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("/Users/durga/Desktop/agile/DoneWithIt/app/assets/Jake.jpg")}
            title="Jake Peralta"
            subTitle="2 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#efc7c1",
        flex: 1
    },
  detailsContainer: {
    padding: 20,

  },
  image: {
    width: "100%",
    height: 300,
    marginTop: 50,

  },
  description: {
    color: 'grey',
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: 10,
    fontFamily: "Avenir",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    fontFamily:"Avenir",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetails;