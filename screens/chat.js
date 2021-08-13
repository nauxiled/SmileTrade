import React, { useState } from "react";
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../Components/ListItem';
import ListItemDeleteAction from '../Components/ListItemDeleteAction';
import ListItemSeparator from '../Components/ListItemSeparator';
import Screen from "../Components/Screen";

const initialMessages = [
{
    id:1,
    title: 'T1',
    description: "Hey! Is this item still available?",
    image: require("../assets/Jake.jpg")
},
{
    id:2,
    title: 'T2',
    description: "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/Jake.jpg")
}
]

function Chat(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

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
            onPress={() => console.log("Message selected", item)}
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
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/Jake.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: "#efc7c1"
  }

});

export default Chat;
