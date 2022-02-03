// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_pjw07w_NPI7xSBjj9nDLCQMYiaHd05g",
  authDomain: "wanderlust-b43f0.firebaseapp.com",
  projectId: "wanderlust-b43f0",
  storageBucket: "wanderlust-b43f0.appspot.com",
  messagingSenderId: "270953378851",
  appId: "1:270953378851:web:fc31f3b872474dbb226d96",
  measurementId: "G-CETQ2WC186"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);