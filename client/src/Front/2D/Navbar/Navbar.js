import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

const Navbar = ({setLanguage, language}) => {

  const [modalOpen, setModalOpen] = useState(false);

  const [imageSrc, setImageSrc] = useState(
    "/assets/img/menu-Items/speaker.png"
  );
  const handleLanguage = () => {
    console.log(language)
    if (language === "español") {
      setLanguage("english");
    } else {
      setLanguage("español");
    }
  };
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
    navigate("/game");
  };
  return (
    <div>
      <div className="index">

        <button onClick={handleLanguage} className="transparent-button-lang">{language === "español" ? "EN" : "ES"}</button>

        {/* <div className="overlap"> */}
        <div onClick={handleClick}>
          <img
            className="speaker-filled-audio"
            alt="Speaker filled audio"
            src={imageSrc}
          />
        </div>

        <div onClick={() => {
          setModalOpen(true);
        }}>
          <img
            className="book"
            alt="Book"
            src="/assets/img/menu-Items/book.png"
          />
        </div>
        {/* <a href="/home">
          <img
            className="house"
            alt="Home"
            src="/assets/img/menu-Items/home.png"
          />
        </a> */}
        
        <a href="/login">
          <img
            className="user"
            alt="User"
            src="/assets/img/menu-Items/user.png"
          />
        </a>

        
        {/* </div> */}
      </div>
     
      {modalOpen  && <Modal setOpenModal={setModalOpen} language={language}/>}
    </div>
  );
};

export default Navbar;
