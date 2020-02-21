import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyBQbEkXCOoeLILekp8hiZTyqjV9BbPZoM8",
  authDomain: "ecom-17058.firebaseapp.com",
  databaseURL: "https://ecom-17058.firebaseio.com",
  projectId: "ecom-17058",
  storageBucket: "ecom-17058.appspot.com",
  messagingSenderId: "657229952718",
  appId: "1:657229952718:web:916bedcb8d036603c8829f",
  measurementId: "G-9K1M3LFD08"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }

  }

  return userRef;
}



export default firebase;