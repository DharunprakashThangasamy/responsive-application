import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB4kFlMPk44qoxOMV0bRfqDBmi8PpeaEXE",
  authDomain: "responsive-app-d7b18.firebaseapp.com",
  projectId: "responsive-app-d7b18",
  storageBucket: "responsive-app-d7b18.appspot.com",
  messagingSenderId: "280865638150",
  appId: "1:280865638150:web:fca399adf2f65ae6958087",
  measurementId: "G-RQXKYHHJZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();

//for database
export const db = getFirestore(app)