import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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
    navigate("/game");
  };
  return (
    <div>
      <div className="index">
        <button className="transparent-button-lang">EN</button>

        {/* <div className="overlap"> */}
        <div onClick={handleClick}>
          <img
            className="speaker-filled-audio"
            alt="Speaker filled audio"
            src={imageSrc}
          />
        </div>

        <a href="/">
          <img
            className="book"
            alt="Book"
            src="/assets/img/menu-Items/book.png"
          />
        </a>
        <a href="/">
          <img
            className="user"
            alt="User"
            src="/assets/img/menu-Items/user.png"
          />
        </a>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Navbar;
