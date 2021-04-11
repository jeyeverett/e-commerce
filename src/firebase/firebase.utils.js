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

export const creatUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = await firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    //If the user doesn't exist in the database, create it
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating user:', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;