import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Chat from '../screens/Chat';
import AddItem from '../screens/AddItem';
//import EditItem from '../screens/EditItem';
import ChatNavigator from './ChatNavigator';

import EditNavigator from './EditNavigator';

import HomeNavigator from './HomeNavigator';
<<<<<<< HEAD
import ListNavigator from './ListNavigator';


const Drawer = createDrawerNavigator();
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../assets/smileTrade.png')}
    />
  );
}

const AppNavigator = () => (
  

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
<<<<<<< HEAD
         <Drawer.Screen name="List" component={ListNavigator} />
=======
         <Drawer.Screen name="LogOut " component={AuthNavigator} options={{headerShown: false}}/>
>>>>>>> 35ada2ba9b01ab7c0061e8b13114d45c13cff19e
        
 
       </Drawer.Navigator>
);


export default AppNavigator;
// EditItem navigatotr