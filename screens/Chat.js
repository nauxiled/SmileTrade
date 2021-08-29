import React, { useState } from "react";
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../Components/ListItem';
import ListItemDeleteAction from '../Components/ListItemDeleteAction';
import ListItemSeparator from '../Components/ListItemSeparator';
import Screen from "../Components/Screen";

const initialMessages = [
    {
      id:1,
      title: 'John',
      description: "I'm interested in this item. When will you be able to post it? We can either meet up or send by post.",
      image: require("../assets/John.jpg")
  },
  {
      id:2,
      title: 'Kelly',
      description: "Hey! Is this item still available?",
      image: require("../assets/Kelly.jpg")
  },
]

function Chat({ navigation }) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  //console.log("Message selected"
  return (
    <Screen style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => navigation.navigate('Messages', { item: item.title })}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id:1,
              title: 'John',
              description: "Hey! Is this item still available?",
              image: require("../assets/John.jpg")
          },
          {
              id:2,
              title: 'Kelly',
              description: "Hey! Is this item still available?",
              image: require("../assets/Kelly.jpg")
          },
          {
            id:3,
            title: 'Timmothy',
            description: "I'm interested in doing trade with you",
            image: require("../assets/Timmothy.jpg")
        }
          ]);
        }}
      />
    </Screen>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#efc7c1"
  }

});

export default Chat;
