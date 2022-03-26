import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore }  from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_pjw07w_NPI7xSBjj9nDLCQMYiaHd05g",
  authDomain: "wanderlust-b43f0.firebaseapp.com",
  projectId: "wanderlust-b43f0",
  storageBucket: "wanderlust-b43f0.appspot.com",
  messagingSenderId: "270953378851",
  appId: "1:270953378851:web:fc31f3b872474dbb226d96",
  measurementId: "G-CETQ2WC186"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export {firebaseApp, auth, db}