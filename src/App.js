import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {useState} from "react";
import Footer from './Footer.js';
import Home from './Home.js';
import Waffles from './Waffles.js';
import Pancakes from './Pancakes.js';
import FrenchToast from './French-Toast.js';
import BeansToast from './Beans-Toast.js';
import Test from './Test.js';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  return(
    <div className={darkMode ? 'dark' : 'light'}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/waffles" element={<Waffles />} />
          <Route path="/pancakes" element={<Pancakes />} />
          <Route path="/french-toast" element={<FrenchToast />} />
          <Route path="/test" element={<Test />} />
          <Route path="/beans-toast" element={<BeansToast />} />
        </Routes>
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </Router>
    </div>
  );
}

export default App;
