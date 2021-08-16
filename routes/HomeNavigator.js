import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Trading from '../screens/Trading';

const Stack = createStackNavigator();
const  HomeNavigator = () => (
<<<<<<< Updated upstream
    <Stack.Navigator 
      mode ='modal'
=======
    <Stack.Navigator mode = "modal"
>>>>>>> Stashed changes
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

//Trading Integrate 