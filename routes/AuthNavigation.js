import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/home';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();
const AuthNavigator = () => (
    <Stack.Navigator 
      screenOptions={{
        header: () => null
      }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
        />
         <Stack.Screen
          name="Home"
          component={AppNavigator}
        />
      </Stack.Navigator>
);

export default AuthNavigator;