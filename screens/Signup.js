import React, {useState} from 'react';
import { ImageBackground } from 'react-native';
import { View, Image ,TextInput, TouchableOpacity, Text } from 'react-native';

import firebase from '../firebase/firebase';

import {styles} from '../styles/global';


export default function Signup({navigation}) {

    const goToLogin= () => {
        navigation.navigate('Login');
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signUp= async()=>{
        try{
            firebase.auth().createUserWithEmailAndPassword(email, password);
            navigation.navigate('Login');
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
                <Text style={styles.header}>Registration</Text>

                {/* <TextInput 
                style={styles.textInput} 
                placeholder="Your name"
                underlineColorAndroid={'transparent'}
                /> */}

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

                {/* <TextInput 
                style={styles.textInput} 
                placeholder="Confirm password"
                underlineColorAndroid={'transparent'}
                secureTextEntry={true}
                /> */}

                {
                    error?
                    <Text style={{color:'red'}}>{error}</Text>
                    : null
                }

                <TouchableOpacity 
                style={styles.button}
                onPress={signUp}
                >
                    <Text style={styles.btnText}>Sign up</Text>

                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                onPress={goToLogin}
                >
                    <Text style={styles.btnText}>Already a user? Sign in!</Text>

                </TouchableOpacity>

            </View>
        


        </ImageBackground>




    );
}

// const styles = StyleSheet.create({
//     background: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
        
//     },
//     reg: {
//         flex: 1,
//         justifyContent: 'center',
//         paddingLeft: 80,
//         paddingRight: 80,
//         alignSelf: 'stretch',
//     },
//     header: {
//         fontSize: 28,
//         fontWeight: 'bold',
//         color: 'black',
//         paddingBottom: 10,
//         marginBottom: 40,
//         borderBottomColor: '#199187',
//         borderBottomWidth: 1,
//     },
//     textInput: {
//         alignSelf: 'stretch',
//         height: 40,
//         marginBottom: 30,
//         color: 'black',
//         borderBottomColor: 'black',
//         borderBottomWidth: 1,
//     },
//     button: {
//         alignSelf: 'stretch',
//         alignItems: 'center',
//         padding: 20,
//         backgroundColor: '#f6d0c6',
//         marginTop: 30,
//     },
//     btnText: {
//         color: 'black',
//         fontWeight: 'bold',
//     },
// })
