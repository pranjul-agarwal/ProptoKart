// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "proptokart-mern.firebaseapp.com",
  projectId: "proptokart-mern",
  storageBucket: "proptokart-mern.appspot.com",
  messagingSenderId: "423240747605",
  appId: "1:423240747605:web:42d886d04234c3b4c3a2dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);