// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBEsiEhvUMiqcogVtVq09_M9XYIrwnsrCg",
    authDomain: "chat3-77585.firebaseapp.com",
    projectId: "chat3-77585",
    storageBucket: "chat3-77585.appspot.com",
    messagingSenderId: "389180962418",
    appId: "1:389180962418:web:70a014802b1af9b76f74eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;