import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firestore = firebase.firestore();

firestore.collection("users").doc('ZKr5zrwhmsi3nMyDbUYH').collection("cartItems").doc('H0J8p75l4uHzq5D4rCGz');
    
// firebase.doc('/users/ZKr5zrwhmsi3nMyDbUYH/cartItems/H0J8p75l4uHzq5D4rCGz')

// firestore.collection('/users/ZKr5zrwhmsi3nMyDbUYH/cartItems');
 export default firestore;

