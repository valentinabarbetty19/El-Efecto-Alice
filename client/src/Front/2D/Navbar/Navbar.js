import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

const Navbar = ({ setLanguage, language }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("/assets/img/menu-Items/speaker.png");
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const handleLanguage = () => {
    if (language === "español") {
      setLanguage("english");
    } else {
      setLanguage("español");
    }
  };

  const handleClick = () => {
    const audio = audioRef.current;

    if (imageSrc === "/assets/img/menu-Items/speaker.png") {
      setImageSrc("/assets/img/menu-Items/volume-mute.png");
      if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0; // Reinicia la reproducción al principio
      }
    } else {
      setImageSrc("/assets/img/menu-Items/speaker.png");
      if (audio.paused) {
        audio.play()
          .then(() => {
            // Reproducción exitosa
          })
          .catch((error) => {
            console.error("Error al reproducir el audio: ", error);
          });
      }
    }
  };

  const handleAudioEnded = () => {
    setImageSrc("/assets/img/menu-Items/speaker.png");
  };

  const navigateToGame = () => {
    navigate("/game");
  };

  useEffect(() => {
    const audio = audioRef.current;

    // Cleanup logic when the component unmounts
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  return (
    <div>
      <div className="index">
        <button onClick={handleLanguage} className="transparent-button-lang">
          {language === "español" ? "EN" : "ES"}
        </button>

        <div onClick={handleClick}>
          <img
            className="speaker-filled-audio"
            alt="Speaker filled audio"
            src={imageSrc}
          />
        </div>

        <audio ref={audioRef} onEnded={handleAudioEnded}>
          <source src="/assets/Audio/Audio_1.mp3" type="audio/mpeg" />
          Tu navegador no admite la reproducción de audio.
        </audio>

        <div onClick={() => {
          setModalOpen(true);
        }}>
          <img
            className="book"
            alt="Book"
            src="/assets/img/menu-Items/book.png"
          />
        </div>
        <div>
          <a href="/" title="Ir a Inicio">
            <img className="home" alt="Home" src="/assets/img/menu-Items/home.png" />
          </a>
        </div>

        <a href="/login">
          <img
            className="user"
            alt="User"
            src="/assets/img/menu-Items/user.png"
          />
        </a>
      </div>

      {modalOpen && <Modal setOpenModal={setModalOpen} language={language} />}
    </div>

    
  );
};

export default Navbar;
