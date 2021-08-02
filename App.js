import * as React from 'react';
import { Pressable, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/home';
import About from './screens/about'
import Chat from './screens/chat'
import { 
  Satisfy_400Regular 
} from '@expo-google-fonts/satisfy'
import AppLoading from 'expo-app-loading'; 

import {useFonts} from 'expo-font';

const Drawer = createDrawerNavigator();

function App() {
  let [fontsLoaded,error] =useFonts({ Satisfy_400Regular}); // IF you want to use your own fonts, ihave created a file ' Fonts" u just need to input your ttf file and declare it here using require('file directory')

  if (!fontsLoaded){
    return <AppLoading />;
  }

  else{
    return (
      <NavigationContainer>
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
     </NavigationContainer>
   );
  }
 
}

export default App;
 // Comment For LX 