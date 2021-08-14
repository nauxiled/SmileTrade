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
    message: "Hey! Is this item still available?",
    image: require("../assets/Jake.jpg")
},
{
    id:2,
    title: 'T2',
    message: "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/Jake.jpg")
}
]

function Chat({navigation}) {
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
            subTitle={item.message}
            image={item.image}
            onPress={() => navigation.navigate('Messages', item)}
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
              message: "D2",
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
