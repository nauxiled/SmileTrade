import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Chat from '../screens/Chat';
import AddItem from '../screens/AddItem';
//import EditItem from '../screens/EditItem';
import ChatNavigator from './ChatNavigator';

import EditNavigator from './EditNavigator';

import HomeNavigator from './HomeNavigator';

import ListNavigator from './ListNavigator';

import AuthNavigator from './AuthNavigation';

const Drawer = createDrawerNavigator();
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../assets/smileTrade.png')}
    />
  );
}

export default function AppNavigator () {
  return(
    <Drawer.Navigator
    drawerStyle={{
      backgroundColor: '#CEE7F0'}}
    screenOptions={{
      headerShown : true,
      
    }}
    
    options={{
      headerTitle :props =><LogoTitle {...props}/>
    }}
    initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeNavigator}  />
    <Drawer.Screen name="Add Item" component={AddItem} />
    <Drawer.Screen name="Chat" component={ChatNavigator} />
    <Drawer.Screen name="History" component={EditNavigator} />

    <Drawer.Screen name="List" component={ListNavigator} />
    {/* <Drawer.Screen name="LogOut " component={AuthNavigator} options={{headerShown: false}}/> */}

   

  </Drawer.Navigator>
  );
} 
  

   




