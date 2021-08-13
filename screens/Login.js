import React from 'react';
import { ImageBackground, StyleSheet, Image, Button } from  'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';

import Screen from '../Components/Screen';
import AppFormField from '../Components/AppFormField';
import SubmitButton from '../Components/SubmitButton';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
})

function Login({navigation}) {
    return (
        <ImageBackground 
        style = {styles.background}
        source= {require('../assets/Beachbackground.png')}>
        <Screen style={styles.container}>
        <Image style = {styles.logo} source={require('../assets/smileTrade.png')}/>
            <Formik
                initialValues = {{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema = {validationSchema}
                >
                    { () => (
                        <>
                            <AppFormField
                                autoCapitalize = "none"
                                autoCorrect = {false}
                                icon = "email"
                                keyboardType = "email-address"
                                name = 'email'
                                placeholder = "Email"
                                textContentType = "emailAddress"
                            />
                            <AppFormField
                                autoCapitalize = "none"
                                autoCorrect = {false}
                                icon = "lock"
                                name = 'password'
                                placeholder = "Password"
                                secureTextEntry
                                textContentType = "password"
                            />
                            <SubmitButton title="Login" onPress={() => navigation.navigate('Home')}/>
                            <Button title="Go back to Welcome Screen" onPress={() => navigation.navigate('Welcome')}/>
                        </>
                    )}
            </Formik>
        </Screen>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50
    },
     logo:{
         width: '100%',
         height: 200,
         alignSelf: 'center',
         marginBottom: 300
     },
     background: {
        flex: 1,
        justifyContent: "flex-end",

    },
})

export default Login;