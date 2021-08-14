import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from '../screens/Chat';
import Messages from '../screens/Messages';

const Stack = createStackNavigator();
const  ChatNavigator = () => (
    <Stack.Navigator 
      screenOptions={{
        title:null,
        headerStyle: {
          backgroundColor:'#efc7c1',
          height:50,  
        },
      }}
      >
        <Stack.Screen
          name="Chat"
          component={Chat}
        />
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={({route})=> ({
            title: route.params.item,
          })}
        />
      </Stack.Navigator>
);

export default ChatNavigator;