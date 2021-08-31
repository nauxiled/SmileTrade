import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../Components/Card";
import Screen from "../Components/Screen";

const listings = [
  {
    id: 1,
    title: "Red jacket in great condition",
    status: 'In Progress',
    image: require('../assets/redJacket.jpg'),
  },
  {
    id: 2,
    title: "Green Shirt for sale",
    status: 'Traded',
    image: require('../assets/greenShirt.jpeg'),
  },
];

function TradeHistory({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (

          <Card
            title={item.title}
            subTitle={item.status}
            image={item.image}
            onPress = {() => navigation.navigate('EditItem', item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "#efc7c1",
  },
});

export default TradeHistory;