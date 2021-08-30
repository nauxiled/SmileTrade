import React,{useState} from 'react';
import { ImageBackground, StyleSheet, Image } from  'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../Components/Screen';
import AppFormField from '../Components/AppFormField';
import SubmitButton from '../Components/SubmitButton';
import {registerWithEmail} from '../firebase/firebase';
import ErrorMessage from '../Components/ErrorMessage';

const validationSchema = Yup.object().shape({
    fname: Yup.string().required().label("First Name"),
    lname: Yup.string().required().label("Last Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
})



function SignUp({navigation}) {
    const [registerError, setRegisterError] = useState('');
        async function handleOnSignUp(values, actions) {
            const { email, password } = values;
            try {
            await registerWithEmail(email, password);
            console.log("Registered");
            alert("Registered, Slide the page to go back to the Welcome Screen");
            } catch (error) {
            setRegisterError(error.message);
            }
        }

    return (
        <ImageBackground 
        style = {styles.background}
        source= {require('../assets/Beachbackground.png')}>
        <Screen style={styles.container}>
        <Image style = {styles.logo} source={require('../assets/smileTrade.png')}/>
            <Formik
                initialValues = {{ fname: '',lname: '', email: '', password: '' }}
                onSubmit={values => handleOnSignUp(values)}
                validationSchema = {validationSchema}
                >
                        <>
                            <AppFormField
                                autoCapitalize = "none"
                                autoCorrect = {false}
                                icon = "human-greeting"
                                name = 'fname'
                                placeholder = "First name"
                            />
                            <AppFormField
                                autoCapitalize = "none"
                                autoCorrect = {false}
                                icon = "human-greeting"
                                name = 'lname'
                                placeholder = "Last name"
                            />
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
                            <SubmitButton title="Register" />
                            {<ErrorMessage error={registerError} visible={true} />}
                            
                        </>
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
         marginBottom: 100
     },
     background: {
        flex: 1,
        justifyContent: "flex-end",

    },
})

export default SignUp;