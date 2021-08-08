import React, {useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, Image } from 'react-native';

import {styles} from '../styles/global';

import firebase from '../firebase/firebase'


export default function Login({navigation}) {

    const goToSignup = () => {
        navigation.navigate('Signup');
    }

    const goToHome = () => {
        navigation.navigate('Welcome');
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signIn= async()=>{
        try{
            firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('Home');
        }catch(err){
            setError(err.message);
        }
    }

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
            </View> 
       
            <View style={styles.reg}>
                <Text style={styles.header}>Welcome!</Text>

                <TextInput 
                style={styles.textInput} 
                placeholder="Your email"
                underlineColorAndroid={'transparent'}
                value={email}
                onChangeText={setEmail}
                />

                <TextInput 
                style={styles.textInput} 
                placeholder="Your password"
                underlineColorAndroid={'transparent'}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                />

                {
                    error?
                    <Text style={{color:'red'}}>{error}</Text>
                    : null
                }

                <TouchableOpacity 
                style={styles.button}
                onPress={signIn}
                >
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                onPress={goToSignup}
                >
                    <Text 
                    style={styles.btnText}
                    >Create new account</Text>
                </TouchableOpacity>

            </View>


        </ImageBackground>
    );
}

