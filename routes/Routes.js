import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { auth } from '../firebase/firebase';
import AuthNavigator from './AuthNavigation';
import AppNavigator from './AppNavigator';
import {AuthUserContext} from './AuthUserProvider';
import Spinner from '../Components/Spinner';


export default function Routes() {
    const {user,setUser} = useContext(AuthUserContext);
   const [isLoading,setIsLoading] = useState(true);
    useEffect(() => {
        // onAuthStateChanged returns an unsubscriber
        const unsubscribeAuth = auth.onAuthStateChanged(async authUser => {
          try {
            await (authUser ? setUser(authUser) : setUser(null));
            setIsLoading(false);
          } catch (error) {
            console.log(error);
          }
        });
    
        // unsubscribe auth listener on unmount
        return unsubscribeAuth;
      }, []);
    
      if (isLoading) {
        return <Spinner />;
      }
    
      return (
        <NavigationContainer>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      );
}
    
