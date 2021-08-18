import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyD3Ers2fpZuN8TGBwsBwsCCe0h0yrW_RNE",
    authDomain: "smiletrade-530c9.firebaseapp.com",
    projectId: "smiletrade-530c9",
    storageBucket: "smiletrade-530c9.appspot.com",
    messagingSenderId: "195887314625",
    appId: "1:195887314625:web:40766670dc43412ba60640",
    measurementId: "G-TY4GQGSKXZ"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const Firebase ={
  loginWithEmail :(email, password) =>{
    return firebase.auth().signInWithEmailAndPasssword(email, password)
  },
  signupWithEmail :(email,password) =>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  },
  signOut:() =>{
    return firebase.auth().signOut()
  },
  checkUserAuth:user =>{
    return firebase.auth().onAuthStateChanged(user)
  },
  createNewUser:userData =>{
    return firebase
    .firestore()
    .collection('users')
    .doc('${userData.uid}')
    .set(userData)
  },
}

export default firebase;