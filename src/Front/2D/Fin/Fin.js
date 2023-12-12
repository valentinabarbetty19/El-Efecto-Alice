import React, { useState, useContext, useEffect } from "react";
import styles from "./Fin.css";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../../context/AuthContext";

const Fin = ({ language }) => {
  const { emailUser } = useContext(authContext);

  const [imageSrc, setImageSrc] = useState("/assets/img/menu-Items/speaker.png");
  const navigate = useNavigate();

  const handleClick = (buttonType) => {
    if (buttonType === "start") {
        navigate("/game");
    } else if (buttonType === "resume") {
        navigate("/");
    }
  };

  useEffect(() => {
    document.body.style.backgroundImage = "none";
  }, []);

  return (
    <div>
      <div className="index">
      <div className="text-wrapper glitch">{language === "español" ? "FIN - EFECTO ALICE" : "END - ALICE EFFECT"}</div>
      </div>

      <div className="container">
        <button
          className="transparent-button"
          onClick={() => handleClick("start")}
        >
          {language === "español" ? "INICIAR OTRA HISTORIA" : "START ANOTHER STORY"}
        </button>

        <button
          className="transparent-button"
          onClick={() => handleClick("resume")}
        >
          {language === "español" ? "VOLVER AL HOME" : "RETURN TO HOME"}
        </button>
      </div>
    </div>
  );
};

export default Fin;
