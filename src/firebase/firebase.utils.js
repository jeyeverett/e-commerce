import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB9NepAp25w1WR6NUakPTCuiE0f364kyBs",
    authDomain: "react-e-commerce-206c9.firebaseapp.com",
    projectId: "react-e-commerce-206c9",
    storageBucket: "react-e-commerce-206c9.appspot.com",
    messagingSenderId: "302082046524",
    appId: "1:302082046524:web:5624c7ea9bb44d6a80a139",
    measurementId: "G-Y7S2K63CEY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;