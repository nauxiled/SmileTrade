import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Trading from '../screens/Trading';

const Stack = createStackNavigator();
const  HomeNavigator = () => (
    <Stack.Navigator 
      mode ='modal'
        screenOptions={{
        header: () => null
      }}

      initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Trading"
          component={Trading}
        />
      </Stack.Navigator>
);

export default HomeNavigator;

//Trading 