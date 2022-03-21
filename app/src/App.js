import './Styles/App.css';
import Home from './Pages/Home.js';
import NavPane from './Components/NavBar.js';
import SignIn from './Pages/SignIn.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Firebase imports
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react'
import Hotels from './Pages/Hotels';

const firebaseConfig = {
  apiKey: "AIzaSyA_pjw07w_NPI7xSBjj9nDLCQMYiaHd05g",
  authDomain: "wanderlust-b43f0.firebaseapp.com",
  projectId: "wanderlust-b43f0",
  storageBucket: "wanderlust-b43f0.appspot.com",
  messagingSenderId: "270953378851",
  appId: "1:270953378851:web:fc31f3b872474dbb226d96",
  measurementId: "G-CETQ2WC186"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();


function App() {
  // const [user] = useAuthState(auth);
  let user;

  const SignInWithGoogle = (event) => {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        user = result.user;
        console.log(user);
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <BrowserRouter>
      <NavPane user = {user} />
      <Routes>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/"}
          element={<Home something={process.env.PUBLIC_URL} />}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/signin"}
          element={<SignIn SignInWithGoogle={SignInWithGoogle} />}
        />
        <Route
        exact
        path = {process.env.PUBLIC_URL + "/hotels"}
        element= {<Hotels/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
