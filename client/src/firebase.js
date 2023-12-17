

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-e1a42.firebaseapp.com",
  projectId: "mern-auth-e1a42",
  storageBucket: "mern-auth-e1a42.appspot.com",
  messagingSenderId: "904597268614",
  appId: "1:904597268614:web:0b339cc506394d31d94907",
  measurementId: "G-NZQSMNQZQ0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
