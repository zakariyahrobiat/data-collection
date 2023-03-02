// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcf9IqwRRgCIFUKDt9L_mJu_V5YeVt66A",
  authDomain: "robiah-data.firebaseapp.com",
  projectId: "robiah-data",
  storageBucket: "robiah-data.appspot.com",
  messagingSenderId: "393701173748",
  appId: "1:393701173748:web:2f1aed9041623f88fef1a1",
  measurementId: "G-YX68KM0YB7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
