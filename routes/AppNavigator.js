import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Login from '../screens/Login';
import AddItem from '../screens/AddItem';
import EditItem from '../screens/EditItem';

const Drawer = createDrawerNavigator();
const AppNavigator = () => (
    <Drawer.Navigator
         drawerStyle={{
           backgroundColor: '#CEE7F0'}}
         screenOptions={{
           headerShown : true,
           
         }}>
         <Drawer.Screen name="Home" component={Home}  />
         <Drawer.Screen name="Add Item" component={AddItem} />
         <Drawer.Screen name="Chat" component={Chat} />
         <Drawer.Screen name="Edit Item" component={EditItem} />
        
 
       </Drawer.Navigator>
);


export default AppNavigator;
// EditItem navigatotr