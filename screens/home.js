import React from 'react';
import { Image, ImageBackground,StyleSheet,View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import RoundButton from '../Components/RoundButton';

function Home(props) {
    return (
        <ImageBackground 
        style = {styles.background}
        source= {require('../assets/Beachbackground.png')}>
        <Image style={styles.logo} source={require('../assets/smileTrade.png')}/>
        <View style={styles.clothingIcon}>
        <RoundButton title="Clothing" ></RoundButton>
        </View>
        <View style={styles.technologyIcon}>
        <RoundButton title="Technology" ></RoundButton>
        </View>
        <View style={styles.accesoriesIcon}>
        <RoundButton title="Accessories" ></RoundButton>
        </View>
        <View style={styles.cardsIcon}>
        <RoundButton title="Trading Cards"></RoundButton>
        </View>
        <View style={styles.decorationIcon}>
        <RoundButton title="Decoration" ></RoundButton>
        </View>
        <View style={styles.stationaryIcon}>
        <RoundButton title="Stationary" ></RoundButton>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    menuIcon: {
        position: 'absolute',
        top: 80,
        left: 30
    },
    clothingIcon: {
        position: 'absolute',
        borderRadius: 100,
        top: 200,
        left: 40
    },
    technologyIcon: {
        position: 'absolute',
        borderRadius: 100,
        top: 200,
        right: 40
    },
    accesoriesIcon: {
        position: 'absolute',
        borderRadius: 100,
        top: 400,
        left: 40
    },
    cardsIcon: {
        position: 'absolute',
        borderRadius: 100,
        top: 400,
        right: 40,
    },
    decorationIcon: {
        position: 'absolute',
        borderRadius: 100,
        top: 600,
        left: 40
    },
    stationaryIcon: {
        position: 'absolute',
        borderRadius: 100,
        top: 600,
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
        top: 50,
    }
})

export default Home;