import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB9NepAp25w1WR6NUakPTCuiE0f364kyBs',
  authDomain: 'react-e-commerce-206c9.firebaseapp.com',
  projectId: 'react-e-commerce-206c9',
  storageBucket: 'react-e-commerce-206c9.appspot.com',
  messagingSenderId: '302082046524',
  appId: '1:302082046524:web:5624c7ea9bb44d6a80a139',
  measurementId: 'G-Y7S2K63CEY',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    //if we sign in with google we get the display name off the userAuth object, otherwise with email and password we need to manually pass it in as additionalData
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user:', error.message);
    }
  }

  return userRef;
};

//We will use this function to get our Shop Data (and whatever else we want) onto Firestore. We call this function in componentDidMount in App.js but we only do it once, and then remove the code after the data is stored in the Firestore (note that "collectionKey" is the name of our collection, and objectsToAdd are the documents we want to add to the collection)
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey); //Firestore will create a collection with this key if it doesn't already exist

  const batch = firestore.batch();
  objectsToAdd.forEach((doc) => {
    const newDocRef = collectionRef.doc(); //Get a new document reference and auto create a unique id for it
    batch.set(newDocRef, doc);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (snapShot) => {
  let collections = snapShot.docs.map((collection) => {
    const { title } = collection.data();
    return {
      [title.toLowerCase()]: {
        ...collection.data(),
        id: collection.id,
        routeName: encodeURI(title.toLowerCase()),
      },
    };
  });

  collections = Object.assign({}, ...collections);

  return collections;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
