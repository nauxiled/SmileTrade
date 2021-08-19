import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';


const Stack = createStackNavigator();
export default function AuthNavigator ()
{
  return(
    <Stack.Navigator 
      screenOptions={{
        header: () => null
      }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
        />
         {/* <Stack.Screen
          name="Home"
          component={AppNavigator}
        /> */}
      </Stack.Navigator>
);
      }

