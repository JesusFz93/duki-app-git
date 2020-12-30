import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCAdGm5n8lQTs2AMHyUM7Kd6hW7gL6Z-uA",
    authDomain: "duki-app-fbase.firebaseapp.com",
    projectId: "duki-app-fbase",
    storageBucket: "duki-app-fbase.appspot.com",
    messagingSenderId: "782991604216",
    appId: "1:782991604216:web:2bc0f7033c13e4b1dcbe0d",
    measurementId: "G-B1HTXS27Y5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}