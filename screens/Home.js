import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Alert } from 'react-native';
import RoundButton from '../Components/RoundButton';
import AppButton from '../Components/AppButton';
import { logout } from '../firebase/firebase';
function Home({ navigation }) {
    async function handleonSignOut() {
        try {
            await logout();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        // the main page and the buttons
        <ImageBackground
            style={styles.background}
            source={require('../assets/Beachbackground.png')}>
            <Image style={styles.logo} source={require('../assets/smileTrade.png')} />
            <View style={styles.clothingIcon}>
                <RoundButton title="Clothing" onPress={() => navigation.navigate('Trading')}></RoundButton>
            </View>
            <View style={styles.technologyIcon}>
                <RoundButton title="Technology" onPress={() => Alert.alert('There is nothing to trade at the moment!')}></RoundButton>
            </View>
            <View style={styles.accesoriesIcon}>
                <RoundButton title="Accessories" onPress={() => Alert.alert('There is nothing to trade at the moment!')}></RoundButton>
            </View>
            <View style={styles.cardsIcon}>
                <RoundButton title="Trading Cards" onPress={() => Alert.alert('There is nothing to trade at the moment!')}></RoundButton>
            </View>
            <View style={styles.decorationIcon}>
                <RoundButton title="Decoration" onPress={() => Alert.alert('There is nothing to trade at the moment!')}></RoundButton>
            </View>
            <View style={styles.stationaryIcon}>
                <RoundButton title="Stationary" onPress={() => Alert.alert('There is nothing to trade at the moment!')} ></RoundButton>
                <AppButton title="Log Out" onPress={handleonSignOut} />
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    // menuIcon: {
    //     position: 'absolute',
    //     top: 80,
    //     left: 30
    // },
    clothingIcon: {
        position: 'absolute',
        borderRadius: 100,
        top: 150,
        left: 40
    },
    technologyIcon: {
        position: 'absolute',
        borderRadius: 100,
        top: 150,
        right: 40
    },
    accesoriesIcon: {
        position: 'absolute',
        borderRadius: 100,
        top: 350,
        left: 40
    },
    cardsIcon: {
        position: 'absolute',
        borderRadius: 100,
        top: 350,
        right: 40,
    },
    decorationIcon: {
        position: 'absolute',
        borderRadius: 100,
        top: 550,
        left: 40
    },
    stationaryIcon: {
        position: 'absolute',
        borderRadius: 100,
        top: 550,
        right: 40
    },
    background: {
        flex: 1,
        alignItems: "center",
    },
    logo: {
        width: 150,
        height: 150,
        position: 'absolute',

    }
})

export default Home;
