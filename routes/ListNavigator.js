import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import EditItem from '../screens/EditItem';
import ListItem from '../screens/ListItem';


const Stack = createStackNavigator();

const ListNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen 
        name="History" 
        component={ListItem} 
        options={{ headerShown: false}}
        />
        <Stack.Screen 
        name="EditItem" 
        component={EditItem}
        options={{ headerShown: false}}
        />
    </Stack.Navigator>
);

export default ListNavigator;