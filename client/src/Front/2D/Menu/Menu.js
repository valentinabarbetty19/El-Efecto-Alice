import React, { useState, lazy, Suspense, useEffect , useContext } from "react";
import styles from "./Menu.css";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../../context/AuthContext";
import swal from "sweetalert";

const Menu = ({ language }) => {

  const { emailUser } = useContext(authContext);

  const [imageSrc, setImageSrc] = useState("/assets/img/menu-Items/speaker.png");

  const handleClick = () => {
    console.log(imageSrc)
    if (imageSrc === "/assets/img/menu-Items/speaker.png") {
      setImageSrc("/assets/img/menu-Items/volume-mute.png");
    } else {
      setImageSrc("/assets/img/menu-Items/speaker.png");
    }
  };
  const navigate = useNavigate();
  const navigateToGame = () => {
    if (emailUser == '' || emailUser == 'error') {
      swal({
        title: "Debe Iniciar Sesión Para Guardar Los Datos De Su Partida",
        icon: "info",
      });
      navigate('/login');
    } else {
      navigate('/game');
    }
    // 👇️ navigate to /contacts


  };
  return (
    <div>
      <div className="index">
        <div className="text-wrapper">{language === "español" ? "EFECTO ALICE" : "ALICE EFFECT"}</div>
      </div>

      <div className="container">
        <button className="transparent-button" onClick={navigateToGame}>
          {language === "español" ? "INICIAR" : "START"}
        </button>
        <button className="transparent-button">{language === "español" ? "REANUDAR PARTIDA" : "RESUME GAME"}</button>
      </div>
    </div>

  );
};

export default Menu;
