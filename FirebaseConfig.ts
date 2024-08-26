import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyCfyFt6_lGBObQJe-0quzbbo-zLYG9gvjA",
    authDomain: "limitedtime-794ad.firebaseapp.com",
    projectId: "limitedtime-794ad",
    storageBucket: "limitedtime-794ad.appspot.com",
    messagingSenderId: "288509525629",
    appId: "1:288509525629:web:892a1f7b0e1bba91c8bb14"
  };

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);