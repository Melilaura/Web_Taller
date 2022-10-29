// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDLzsKJH3mHtHxl_YzTsqo8WnsZh0XPRc",
  authDomain: "webavanzada2022.firebaseapp.com",
  projectId: "webavanzada2022",
  storageBucket: "webavanzada2022.appspot.com",
  messagingSenderId: "116741549738",
  appId: "1:116741549738:web:9592dc2485c5764dd0aad3",
  measurementId: "G-3RKS0C1ZYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db}