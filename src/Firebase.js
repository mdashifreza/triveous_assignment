import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDKFJUl8G_2YSqH1isqikVPtL23dy_U5pw",
    authDomain: "triveous-auth.firebaseapp.com",
    projectId: "triveous-auth",
    storageBucket: "triveous-auth.appspot.com",
    messagingSenderId: "692860418948",
    appId: "1:692860418948:web:ffd0edb6d17af54886fbd1",
    measurementId: "G-NB47LQ4KR2"
    
    // apiKey: import.meta.env.VITE_apiKey,
    // authDomain: import.meta.env.VITE_authDomain,
    // projectId: import.meta.env.VITE_projectId,
    // storageBucket: import.meta.env.VITE_storageBucket,
    // messagingSenderId: import.meta.env.VITE_messagingSenderId,
    // appId: import.meta.env.VITE_appId,
    // measurementId: import.meta.env.VITE_measurementId
};
// console.log("Environment Variables:", import.meta.env);
// console.log("API Key:", import.meta.env.VITE_apiKey);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();



//
const db = getFirestore(app);

export { app, auth, db}