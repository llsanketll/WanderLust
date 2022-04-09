import './Styles/App.css';
import Home from './Pages/Home.js';
import NavPane from './Components/NavBar.js';
import Hotels from './Pages/Hotels';
import SignIn from './Pages/SignIn.js';
import SignUp from './Pages/SignUp.js';
import Community from './Pages/Community.js';
import Profile from './Pages/Profile.js';
import { AuthProvider } from './AuthContext';
import { DatabaseProvider } from './DatabaseContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatRoom from './Pages/ChatRoom';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DatabaseProvider>
          <NavPane />
          <Routes>
            <Route
              exact
              path={process.env.PUBLIC_URL + '/'}
              element={<Home something={process.env.PUBLIC_URL} />}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/signin'}
              element={<SignIn something={process.env.PUBLIC_URL} />}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/signup'}
              element={<SignUp something={process.env.PUBLIC_URL} />}
            />

            <Route
              exact
              path={process.env.PUBLIC_URL + '/hotels'}
              element={<Hotels />}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/community'}
              element={<Community />}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/message/:id'}
              element={<ChatRoom />}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/profile/:id'}
              element={<Profile />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </DatabaseProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
