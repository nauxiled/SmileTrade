import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetails from '../screens/ListingDetails';
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
          name="ListingsScreen"
          component={ListingsScreen}
        />

        <Stack.Screen
          options={{headerShown: true}}
          name="ListingDetail"
          component={ListingDetails}
        />
        
      </Stack.Navigator>

         
    
);

export default HomeNavigator;

//Trading Integrate 