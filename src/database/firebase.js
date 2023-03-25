// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATq8qaONRbJ-nFcg-Gxg7cFyjE7x7ZQs0",
  authDomain: "conqui-path.firebaseapp.com",
  projectId: "conqui-path",
  storageBucket: "conqui-path.appspot.com",
  messagingSenderId: "913535486929",
  appId: "1:913535486929:web:a842e5573021f32793aef0",
  measurementId: "G-EY3YR9ZQKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export {
  db,app
}