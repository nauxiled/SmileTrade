import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import AppButton from '../Components/AppButton';


function Welcome({navigation}) {
    return (
        <ImageBackground 
        style = {styles.background}
        source={require('../assets/Beachbackground.png')}>
            <Image style={styles.logo} source={require('../assets/smileTrade.png')} />
            <View style={styles.buttonContainer}>
            <AppButton title="Sign In" onPress={() => navigation.navigate('Login')} ></AppButton>
            <AppButton title="Sign Up" onPress={() => navigation.navigate('Signup')}></AppButton>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 20,
        width: "100%"
    },
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logo: {
        width: "100%",
        height: 200,
        position: 'absolute',
        top: 150,
    }
})

export default Welcome;
