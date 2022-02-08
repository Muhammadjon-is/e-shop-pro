import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//  import firestore from './test';
import './test'

// import  { initializeApp } from "firebase/app"
// import 'firebase/firestore';
// import 'firebase/auth';

const config = {

        apiKey: "AIzaSyBweKwMOBg_ybLhVecCkLijMYODhpKPQ6Q",
        authDomain: "e-shop-pro-7fdb1.firebaseapp.com",
        projectId: "e-shop-pro-7fdb1",
        storageBucket: "e-shop-pro-7fdb1.appspot.com",
        messagingSenderId: "56875153807",
        appId: "1:56875153807:web:d7b2b0b3484e053b74f3fa",  
        measurementId: "G-EJTE8L3RX1",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
if (!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.id}`)
const snapShot = await userRef.get();

if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
  try{
await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
});
  } catch (error){
   console.error('error creating user', error.message)
  }
}
return userRef;
}
 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// const provider = new firebase.auth.FacebookAuthProvider();
// provider.setCustomParameters({ prompt: "select_account"});
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
