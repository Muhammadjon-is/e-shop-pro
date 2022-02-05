import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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
