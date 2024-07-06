// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEX2Bh1cr4X-YOQncxxKI2MVZXez4wmEo" ,
  authDomain: "hotel-booking-325eb.firebaseapp.com" ,
  projectId: "hotel-booking-325eb" ,
  storageBucket: "hotel-booking-325eb.appspot.com" ,
  messagingSenderId: "362405851595" ,
  appId: "1:362405851595:web:88d2b929ab475fccc4c64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;