import React from 'react';
import {View, Text,Button,StyleSheet} from 'react-native';
import {globalStyles} from '../styles/global';

function Messages({navigation}){
 return (
    <View style=  {styles.container}>
        <Text>Message Screen</Text>
        <Button 
            title ="Click Here to go back to Chat Sceen"
            onPress={() => navigation.navigate("Chat")}
        />

        
    </View>
 );

}

export default Messages;

const styles = StyleSheet.create({
    container: {    
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    }
})