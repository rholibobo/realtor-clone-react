// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ7uHnNZxPRDjKTy5rxVvZhRYwRTI_Tb8",
  authDomain: "realtor-app-react-978a0.firebaseapp.com",
  projectId: "realtor-app-react-978a0",
  storageBucket: "realtor-app-react-978a0.appspot.com",
  messagingSenderId: "435893585531",
  appId: "1:435893585531:web:5e045b4af2e8bc7d7104de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();