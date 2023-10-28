import React, { useState } from "react";
import "./Scene.css";
const Scene = ({ text, img, onClick }) => {



  // const backgroundStyle = {
  //   backgroundImage: `url(${img})`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  // };
  document.body.style.backgroundImage = `url(${img})`;
  return (
    <div >
      <div className="App">
        <div className="content" onClick={onClick}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Scene;
