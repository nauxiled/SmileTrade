import React, {useState, useEffect, useCallback, useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import auth from '../firebase/firebase'

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      // {
      //   _id: 1,// To 
      //   text: 'Yes it is!',
      //   createdAt: new Date(),
      //   user: {
      //     _id: auth?.currentUser?.email,// From
      //     // name: 'React Native',
      //     avatar: '../assets/Jake.jpg',
      //   },
      // },
      {
        _id: auth?.currentUser?.email ,// To 
        text: 'Hey is this item available?',
        createdAt: new Date(),
        user: {
          _id: 1,// From
          // name: 'React Native',
          avatar: '../assets/Jake.jpg',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#B22222',
          },
          left: {
            backgroundColor: '#ADD8E6',
          
          }
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return(
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    );
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: auth?.currentUser?.email,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
      backgroundImage
    />
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});