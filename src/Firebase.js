import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDKFJUl8G_2YSqH1isqikVPtL23dy_U5pw",
    authDomain: "triveous-auth.firebaseapp.com",
    projectId: "triveous-auth",
    storageBucket: "triveous-auth.appspot.com",
    messagingSenderId: "692860418948",
    appId: "1:692860418948:web:ffd0edb6d17af54886fbd1",
    measurementId: "G-NB47LQ4KR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth }