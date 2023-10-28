import React, { useState } from "react";
import styles from "./Menu.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [imageSrc, setImageSrc] = useState(
    "/assets/img/menu-Items/speaker.png"
  );

  const handleClick = () => {
    console.log(imageSrc);
    if (imageSrc === "/assets/img/menu-Items/speaker.png") {
      setImageSrc("/assets/img/menu-Items/volume-mute.png");
    } else {
      setImageSrc("/assets/img/menu-Items/speaker.png");
    }
  };
  const navigate = useNavigate();
  const navigateToGame = () => {
    // 👇️ navigate to /contacts
    navigate("/game");
  };
  return (
    <div>
      <div className="index">
        <div className="text-wrapper">EFECTO ALICE</div>
      </div>
      <div className="container">
        <button className="transparent-button" onClick={navigateToGame}>
          INICIAR
        </button>
        <button className="transparent-button">REANUDAR PARTIDA</button>{" "}
      </div>
    </div>
  );
};

export default Menu;
