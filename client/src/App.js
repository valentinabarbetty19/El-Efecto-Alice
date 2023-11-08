import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { AuthProvider } from "./context/AuthContext.jsx";



import Menu from "./Front/2D/Menu/Menu";
import Navbar from "./Front/2D/Navbar/Navbar";
import { useState } from "react";
import Login from "./Front/2D/Login/Login";
import SignUp from "./Front/2D/SignUp/SignUp";
<<<<<<< HEAD
import Bifur1 from "./Front/World/Scenes/Bifurcacion1/Bifur1.js";
import Bifur2 from "./Front/World/Scenes/Bifurcacion1/Bifur2.js";
import Log from "./Front/2D/Pages/login.js";
import Story from "./Front/World/Scenes/Intro/Story.js";
import Intro from "./Front/World/Scenes/Intro/Intro.js";
=======
import Bifur1 from "./Front/World/Scenes/Bifurcacion1/Bifur1";
import Bifur2 from "./Front/World/Scenes/Bifurcacion1/Bifur2";

>>>>>>> a45ae1d543fccf575e01707ef2a07bbd7c34734f

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
<<<<<<< HEAD
          <Route path="/" element={<Menu language={language} />} />
=======
          <Route path="/home" element={<Menu language={language} />} />
>>>>>>> a45ae1d543fccf575e01707ef2a07bbd7c34734f
          <Route path="/game" element={<Intro language={language} />}/>
          <Route path="/game/bifur1" element={<Bifur1 language={language}/>} />
          <Route path="/game/bifur2" element={<Bifur2 language={language}/>} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
