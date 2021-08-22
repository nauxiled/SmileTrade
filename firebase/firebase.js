import * as firebase from 'firebase';
require('firebase/auth')
import firebaseConfig from './firebaseConfig';
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const loginWithEmail = ({ email, password }) => {
  return auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Successfully signed in.');
      console.log(email)
    })
    .catch(error => {
      alert(error);
      console.log(error);
    });
};
export const registerWithEmail = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const logout = () => auth.signOut();
export const db = firebase.firestore();



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