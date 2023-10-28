import './App.css';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';


import Intro from './Front/World/Scenes/Intro/Intro';

import Login from './Front/2D/Pages/login';

import Menu from './Front/2D/Menu/Menu';
import Navbar from './Front/2D/Navbar/Navbar';
import { useState } from 'react';

function App() {
  const[language, setLanguage] = useState("español");
  const handleClick = () => {
    if (language === "español") {
      setLanguage("english");
    } else {
      setLanguage("español");
    }
  };
  return (
    <Router>
      <div>
      <Navbar className="navbar" setLanguage={setLanguage} language={language}/>
        <Routes>
          <Route path="/" element={<Login language={language}/>} />
          <Route path="/home" element={<Menu language={language}/>} />
          <Route path="/game" element={<Intro language={language}/>} />
        </Routes>
      </div>
    </Router>


  );
}

export default App;
