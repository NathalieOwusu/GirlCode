// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Girl code web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQhyXoBsM_TgjNqvj3CPDJbMYhe_vbRw0",
  authDomain: "girl-code-9fec0.firebaseapp.com",
  projectId: "girl-code-9fec0",
  storageBucket: "girl-code-9fec0.firebasestorage.app",
  messagingSenderId: "378563203541",
  appId: "1:378563203541:web:b184a487652dd3c8332d5c",
  measurementId: "G-XB2369C7EP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);