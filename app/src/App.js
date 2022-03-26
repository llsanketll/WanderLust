import './Styles/App.css';
import Home from './Pages/Home.js';
import NavPane from './Components/NavBar.js';
import SignIn from './Pages/SignIn.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Firebase imports
import {auth} from './firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Hotels from './Pages/Hotels';
import Community from './Pages/Community';
import BlogPost from './Pages/BlogPost';




function App() {
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
      <NavPane user={user} />
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
          path={process.env.PUBLIC_URL + "/hotels"}
          element={<Hotels />}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/community"}
          element={<Community />}
        />

        <Route
          exact
          path={process.env.PUBLIC_URL + "/blog/1"}
          element={<BlogPost />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
