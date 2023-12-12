import React, { useState, useContext } from "react";
import styles from "./Menu.css";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../../context/AuthContext";
import swal from "sweetalert";
import Sound from "react-sound";

const Menu = ({ language }) => {
  const { emailUser } = useContext(authContext);

  const [imageSrc, setImageSrc] = useState("/assets/img/menu-Items/speaker.png");
  const [isStartButtonClicked, setIsStartButtonClicked] = useState(false);
  const [isResumeButtonClicked, setIsResumeButtonClicked] = useState(false);

  const handleClick = (buttonType) => {
    if (buttonType === "start") {
      setIsStartButtonClicked(true);
      navigateToGame();
    } else if (buttonType === "resume") {
      setIsResumeButtonClicked(true);
    }
  };

  

  const navigate = useNavigate();
  const navigateToGame = () => {
    if (emailUser === "" || emailUser === "error") {
      swal({
        title: "Debe Iniciar Sesión Para Guardar Los Datos De Su Partida",
        icon: "info",
      });
      navigate("/login");
    } else {
      // Reproducimos el sonido antes de navegar
      setTimeout(() => {
        setIsStartButtonClicked(true);
      }, 100); // Retrasamos ligeramente el cambio de estado del botón para asegurarnos de que sea después de que comience el sonido

      setTimeout(() => {
        setIsStartButtonClicked(false);
        navigate("/game");
      }, 1100); // Ajusta el tiempo según la duración del sonido
    }
  };

  return (
    <div>
      <div className="index">
      <div className="text-wrapper glitch">{language === "español" ? "EFECTO ALICE" : "ALICE EFFECT"}</div>
      </div>

      <div className="container">
        <button
          className="transparent-button"
          onClick={() => handleClick("start")}
        >
          {language === "español" ? "INICIAR" : "START"}
        </button>

        <button
          className="transparent-button"
          onClick={() => handleClick("resume")}
        >
          {language === "español" ? "REANUDAR PARTIDA" : "RESUME GAME"}
        </button>

        <Sound
          url="/assets/Audio/Audio_iniciar.mp3"
          playStatus={
            isStartButtonClicked ? Sound.status.PLAYING : Sound.status.STOPPED
          }
          onFinishedPlaying={() => setIsStartButtonClicked(false)}
        />

        <Sound
          url="/assets/Audio/Audio_iniciar.mp3"
          playStatus={
            isResumeButtonClicked ? Sound.status.PLAYING : Sound.status.STOPPED
          }
          onFinishedPlaying={() => setIsResumeButtonClicked(false)}
        />
      </div>
    </div>
  );
};

export default Menu;
