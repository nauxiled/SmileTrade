import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home';
import About from '../screens/about';
import Chat from '../screens/chat';
import Login from '../screens/Login';

const Drawer = createDrawerNavigator();
const AppNavigator = () => (
    <Drawer.Navigator
         drawerStyle={{
           backgroundColor: '#CEE7F0'}}
         screenOptions={{
           headerShown : true,
           
         }}>
         <Drawer.Screen name="Home" component={Home}  />
         <Drawer.Screen name="About" component={About} />
         <Drawer.Screen name="Chat" component={Chat} />
 
       </Drawer.Navigator>
);


export default AppNavigator;