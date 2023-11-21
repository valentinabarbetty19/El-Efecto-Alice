import React, { useState, lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { Canvas } from "@react-three/fiber";
import Navbar from "./Front/2D/Navbar/Navbar.js";
import Menu from "./Front/2D/Menu/Menu.js";
import Login from "./Front/2D/Login/Login.js";
import SignUp from "./Front/2D/SignUp/SignUp.js";
import "./App.css";

const Bifur1 = lazy(() => import('./Front/World/Scenes/Bifurcacion1/Bifur1.js'));
const Bifur2 = lazy(() => import('./Front/World/Scenes/Bifurcacion1/Bifur2.js'));
const Intro = lazy(() => import('./Front/World/Scenes/Intro/Intro.js'));

function App() {
  const [language, setLanguage] = useState("español");
  const [isGameLoading, setIsGameLoading] = useState(true);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [loadingMessages, setLoadingMessages] = useState([
    "Cargando recursos...",
    "Preparando el juego...",
    "Iniciando la aventura...",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prevPercentage) =>
        prevPercentage < 100 ? prevPercentage + 10 : 100
      );
    }, 900);

    // Cambia automáticamente los mensajes aleatorios cada 3 segundos
    const messagesInterval = setInterval(() => {
      const newMessages = [
        "Al dar click sobre los diálogos irás avanzando en la historia",
        "La novela visual cuenta con autoguardado, no lo olvides",
        "Debes ser cuidadoso con tus elecciones, de estas depende tu historia"
      ];

      setLoadingMessages((prevMessages) => {
        const randomIndex = Math.floor(Math.random() * newMessages.length);
        return [newMessages[randomIndex]];
      });
    }, 3000);

    // Simula el tiempo de carga
    setTimeout(() => {
      setIsGameLoading(false);
      clearInterval(interval);
      clearInterval(messagesInterval);
    }, 9000);

    // Limpieza de intervalos al desmontar el componente
    return () => {
      clearInterval(interval);
      clearInterval(messagesInterval);
    };
  }, []);

  const nonLazyRoutes = (
    <Routes>
      <Route path="/login" element={<Login language={language} />} />
      <Route path="/sign-up" element={<SignUp language={language} />} />
      <Route path="/" element={<Menu language={language} />} />
    </Routes>
  );

  const lazyRoutes = (
    <Routes>
      <Route path="/game" element={<Intro language={language} />} />
      <Route path="/game/bifur1" element={<Bifur1 language={language} />} />
      <Route path="/game/bifur2" element={<Bifur2 language={language} />} />
    </Routes>
  );

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar className="navbar" setLanguage={setLanguage} language={language} />
          
          {/* Rutas sin suspense */}
          {nonLazyRoutes}

          {/* Rutas con suspense */}
          <Suspense fallback={<div>Cargando...</div>}>
            {isGameLoading ? (
              <div className="loading-container">
                <div className="loading-content">
                  <div className="loading-bar-container">
                    <div className="loading-bar" style={{ width: `${loadingPercentage}%` }}></div>
                  </div>
                  <div className="loading-message-container">
                    <h1 className="loading-message">
                      {loadingMessages[Math.floor(Math.random() * loadingMessages.length)]}
                    </h1>
                    <div className="loading-percentage">Porcentaje: {loadingPercentage}%</div>
                  </div>
                </div>
              </div>
            ) : (
              // Rutas con carga perezosa
              lazyRoutes
            )}
          </Suspense>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
