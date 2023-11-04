// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7lDdHDFA5APMIhbJFpeu7aTmbEsH6tFU",
  authDomain: "devs-novela.firebaseapp.com",
  projectId: "devs-novela",
  storageBucket: "devs-novela.appspot.com",
  messagingSenderId: "235813725963",
  appId: "1:235813725963:web:f9b4090e2e1b573ad4e40e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)