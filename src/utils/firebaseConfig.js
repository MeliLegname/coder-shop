// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpwSfXDiHN9K4tkRAwVM1sD6xasWLTdec",
  authDomain: "proyecto-coder-d6b2f.firebaseapp.com",
  projectId: "proyecto-coder-d6b2f",
  storageBucket: "proyecto-coder-d6b2f.appspot.com",
  messagingSenderId: "799214249385",
  appId: "1:799214249385:web:9d963364ce0db300bd10b8",
  measurementId: "G-FN6PL8EVRJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
