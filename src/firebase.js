// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJjHKX4RGTznQhavAsZAYkFHM7oWPNARU",
  authDomain: "realtor-diel.firebaseapp.com",
  projectId: "realtor-diel",
  storageBucket: "realtor-diel.appspot.com",
  messagingSenderId: "884806676770",
  appId: "1:884806676770:web:5199e24ed05c50d206757b",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
