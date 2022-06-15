import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  /*apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID*/
  apiKey: 'AIzaSyA_pjw07w_NPI7xSBjj9nDLCQMYiaHd05g',
  authDomain: 'wanderlust-b43f0.firebaseapp.com',
  projectId: 'wanderlust-b43f0',
  storageBucket: 'wanderlust-b43f0.appspot.com',
  messagingSenderId: '270953378851',
  appId: '1:270953378851:web:fc31f3b872474dbb226d96',
  measurementId: 'G-CETQ2WC186',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// const analytics = getAnalytics(app);
export { app, auth, db,storage };
