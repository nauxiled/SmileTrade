import React,{ useState} from 'react';
import { ImageBackground, StyleSheet, Image } from  'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';

import Screen from '../Components/Screen';
import AppFormField from '../Components/AppFormField';
import SubmitButton from '../Components/SubmitButton';
import AppButton from '../Components/AppButton';
import {loginWithEmail} from '../firebase/firebase';
import ErrorMessage from '../Components/ErrorMessage';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
})




function Login({navigation}) {

    const [loginError, setLoginError] = useState('');
    
        async function handleOnLogin(values) {
            const { email, password } = values;
        
            try {
            await loginWithEmail(values);
            
            } catch (error) {
            setLoginError(error.message);
            }
        }

    return (
        <ImageBackground 
        style = {styles.background}
        source= {require('../assets/Beachbackground.png')}>
        <Screen style={styles.container}>
        <Image style = {styles.logo} source={require('../assets/smileTrade.png')}/>
            <Formik
                initialValues = {{ email: '', password: '' }}
                // onSubmit={values => console.log(values)}
             
                validationSchema = {validationSchema}
                onSubmit={values => handleOnLogin(values)}
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
                            <ErrorMessage error={loginError} visible={true} />
                            <SubmitButton title="Login" />
                            <AppButton title="Go back to the Welcome Screen"  onPress={() => navigation.navigate('Welcome')}/>
                            

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