import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from '../screens/Chat';
import Messages from '../screens/Messages';

const Stack = createStackNavigator();
const  ChatNavigator = () => (
    <Stack.Navigator 
      screenOptions={{
        header: () => null
      }}
      >
        <Stack.Screen
          name="Chat"
          component={Chat}
        />
        <Stack.Screen
          name="Messages"
          component={Messages}
        />
      </Stack.Navigator>
);

export default ChatNavigator;