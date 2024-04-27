// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.API_KEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID
  apiKey: "AIzaSyBdZ-R9S0aO3vlOcsbY-UEcqWRarGzO-kM",
  authDomain: "art-and-craft-30730.firebaseapp.com",
  projectId: "art-and-craft-30730",
  storageBucket: "art-and-craft-30730.appspot.com",
  messagingSenderId: "180029377194",
  appId: "1:180029377194:web:2d53bb9cf1539909ca1ed3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;