import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Listings from "../screens/Listings"
import ListingDetailsScreen from '../screens/ListingDetailsScreen';


const Stack = createStackNavigator();

const ListNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen 
        name="History" 
        component={Listings} 
        options={{ headerShown: false}}
        />
        <Stack.Screen 
        name="ListingDetailsScreen" 
        component={ListingDetailsScreen}
        options={{ headerShown: false}}
        />
    </Stack.Navigator>
);

export default ListNavigator;