import * as firebase from 'firebase';
require('firebase/auth')
import firebaseConfig from './firebaseConfig';
import 'firebase/firestore';


let app;
  if(!firebase.apps.length){
   app = firebase.initializeApp(firebaseConfig);
  }
  else{
    app = firebase.app();
  }

export const auth = firebase.auth();
export const loginWithEmail = ({email, password}) => {
  return auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Successfully signed in.');
      console.log (email)
    })
    .catch(error => {
      alert(error);
      console.log(error);
    });
};
export const registerWithEmail = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);
// export const registerWithEmail = ({email, password}) =>{
//   return auth.createUserWithEmailAndPassword(email, password)
//   .then(() => {
//     console.log('Registered');
//   })
//   .catch(error => {
//     alert(error);
//     console.log(error);
//   });
// }
  

export const logout = () => auth.signOut();

export const db = app.firestore();


// const Firebase ={
//   loginWithEmail :(email, password) =>{
//     return firebase.auth().signInWithEmailAndPasssword(email, password)
//   },
//   signupWithEmail :(email,password) =>{
//     return firebase.auth().createUserWithEmailAndPassword(email, password)
//   },
//   signOut:() =>{
//     return firebase.auth().signOut()
//   },
//   checkUserAuth:user =>{
//     return firebase.auth().onAuthStateChanged(user)
//   },
//   createNewUser:userData =>{
//     return firebase
//     .firestore()
//     .collection('users')
//     .doc('${userData.uid}')
//     .set(userData)
//   },
// }

// export default Firebase;