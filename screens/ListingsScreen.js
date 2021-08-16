import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../Components/Card";
import Screen from "../Components/Screen";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/redJacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/greenShirt.jpeg"),
  },
];

function ListingsScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={navigation.navigate('ListingDetail', item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: '#efc7c1',
  },
});

export default ListingsScreen;
