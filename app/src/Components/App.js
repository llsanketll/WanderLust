import './Styles/App.css';
import Home from './Home.js';
import NavPane from './NavBar.js';
import SignIn from './SignIn.js';
import MapDirection from './MapDirection.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavPane />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/map" element={<MapDirection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
