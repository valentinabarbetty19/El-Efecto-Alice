import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { AuthProvider } from "./context/AuthContext.jsx";


import Intro from "./Front/World/Scenes/Intro/Intro.js";
import Menu from "./Front/2D/Menu/Menu.js";
import Navbar from "./Front/2D/Navbar/Navbar.js";
import { useState } from "react";
import Login from "./Front/2D/Login/Login.js";
import SignUp from "./Front/2D/SignUp/SignUp.js";

import Bifur11 from "./Front/World/Scenes/Bifurcación1.1/Bifur1.1.js";
import Bifur12 from "./Front/World/Scenes/Bifurcación1.2/Bifur1.2.js";
import Bifur21 from "./Front/World/Scenes/Bifurcación2.1/Bifur2.1.js";
import Bifur22 from "./Front/World/Scenes/Bifurcación2.2/Bifur2.2.js";
import Bifur221 from "./Front/World/Scenes/Bifurcación2.2.1/Bifur2.2.1.js";
import Bifur222 from "./Front/World/Scenes/Bifuración2.2.2/Bifur2.2.2.js";
import Bifur1 from "./Front/World/Scenes/Bifurcacion1/Bifur1.js";
import Bifur2 from "./Front/World/Scenes/Bifurcación2/Bifur2.js";

function App() {
  const [language, setLanguage] = useState("español");
  const handleClick = () => {
    if (language === "español") {
      setLanguage("english");
    } else {
      setLanguage("español");
    }
  };
  return (
    <AuthProvider>
    <Router>
      <div>
        <Navbar
          className="navbar"
          setLanguage={setLanguage}
          language={language}
        />
         <Routes>
          {/* <Route path="/" element={<Login language={language}/>} /> */}
          <Route path="/login" element={<Login language={language} />} />
          <Route path="/sign-up" element={<SignUp language={language} />} />
          <Route path="/" element={<Menu language={language} />} />
          <Route path="/game" element={<Intro language={language} />}/>
          <Route path="/game/bifur1" element={<Bifur1 language={language}/>} />
          <Route path="/game/bifur2" element={<Bifur2 language={language}/>} />
          <Route path="/game/bifur1/bifur1" element={<Bifur11 language={language}/>} />
          <Route path="/game/bifur1/bifur2" element={<Bifur12 language={language}/>} />
          <Route path="/game/bifur2/bifur1" element={<Bifur21 language={language}/>} />
          <Route path="/game/bifur2/bifur2" element={<Bifur22 language={language}/>} />
          <Route path="/game/bifur2/bifur2/bifur1" element={<Bifur221 language={language}/>} />
          <Route path="/game/bifur2/bifur2/bifur2" element={<Bifur222 language={language}/>} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
