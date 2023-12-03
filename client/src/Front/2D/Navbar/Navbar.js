import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

const Navbar = ({ setLanguage, language }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("/assets/img/menu-Items/speaker.png");
  const navigate = useNavigate();

  const handleLanguage = () => {
    if (language === "español") {
      setLanguage("english");
    } else {
      setLanguage("español");
    }
  };

  const handleClick = () => {
    if (imageSrc === "/assets/img/menu-Items/speaker.png") {
      setImageSrc("/assets/img/menu-Items/volume-mute.png");
    } else {
      setImageSrc("/assets/img/menu-Items/speaker.png");
    }
  };

  const navigateToGame = () => {
    navigate("/game");
  };

  return (
    <div>
      <div className="index">
        <button
          onClick={handleLanguage}
          className="transparent-button-lang"
          title="Cambiar Idioma"
        >
          {language === "español" ? "EN" : "ES"}
        </button>

        <div
          onClick={handleClick}
          title="Toggle Audio"
          style={{ cursor: "pointer" }}
        >
          <img
            className="speaker-filled-audio"
            alt="Speaker filled audio"
            src={imageSrc}
          />
        </div>

        <div
          onClick={() => {
            setModalOpen(true);
          }}
          title="Ver Instrucciones"
          style={{ cursor: "pointer" }}
        >
          <img className="book" alt="Book" src="/assets/img/menu-Items/book.png" />
        </div>

        <div>
          <a href="/" title="Ir a Inicio">
            <img className="home" alt="Home" src="/assets/img/menu-Items/home.png" />
          </a>
        </div>

        <a href="/login" title="Iniciar Sesión" style={{ cursor: "pointer" }}>
          <img className="user" alt="User" src="/assets/img/menu-Items/user.png" />
        </a>
      </div>

      {modalOpen && <Modal setOpenModal={setModalOpen} language={language} />}
    </div>
  );
};

export default Navbar;
