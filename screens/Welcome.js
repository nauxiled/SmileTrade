import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import colors from '../styles/color';

export default function Welcome({navigation}) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/Beachbackground.png')}
        >
            <View style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                source={require('../assets/smileTrade.png')}
                />
                <Text style={styles.logoText}>Welcome to SmileTrade!</Text>
            </View>

            <View style={styles.loginButton}></View>

            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logo: {
        width: 170,
        height: 170,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: "center",
    },
    logoText: {
        fontWeight: 'bold',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary,
    },
});
