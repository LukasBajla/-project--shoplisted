import firebase from 'firebase/app'
import {initializeApp} from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd3dRLy5ubiUeMgg1eC0_ApiyPbwKo1Uc",
  authDomain: "shopping-list-9a77e.firebaseapp.com",
  projectId: "shopping-list-9a77e",
  storageBucket: "shopping-list-9a77e.appspot.com",
  messagingSenderId: "263637814098",
  appId: "1:263637814098:web:965b6a63e41b836cc6488b",
  measurementId: "G-FX9D6Z51XX"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore
const db = firebase.firestore();
const auth = firebase.auth();

export  { db, auth }