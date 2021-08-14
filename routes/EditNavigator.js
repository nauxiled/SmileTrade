import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import TradeHistory from '../screens/TradeHistory';
import EditItem from '../screens/EditItem';

const Stack = createStackNavigator();

const EditNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen 
        name="History" 
        component={TradeHistory} 
        options={{ headerShown: false}}
        />
        <Stack.Screen 
        name="EditItem" 
        component={EditItem}
        options={{ headerShown: false}}
        />
    </Stack.Navigator>
);

export default EditNavigator;