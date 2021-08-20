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
    message: "Hey is this available? ",
    image: require("../assets/Jake.jpg")
},
{
    id:2,
    title: 'T2',
    message: "Hey is this available ?",
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
            onPress={() => navigation.navigate('Messages', {item:item.title})}
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
