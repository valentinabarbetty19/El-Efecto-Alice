import React, { useState } from "react";
import "./Scene.css";
const Scene = ({ text, img, onClick }) => {



  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div style={backgroundStyle} onClick={onClick}>
      <div className="App">
        <div className="content">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Scene;
