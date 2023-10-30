import React, { useState } from "react";
import "./Scene-decision.css";

const SceneDecision = ({ language, text, img, decision1, decision2, setDecision1, setDecision2,  onClick }) => {

  document.body.style.backgroundImage = `url(${img})`;

  

  return (
    <div >
      <div className="App">
        <div className="content" >
          <p>{text}</p>
          <div className="button-container">
            <button className="button-outline" onClick={() => { setDecision1(true)
              // ; onClick(); 
              }}>{decision1}</button>
            <button className="button-outline" onClick={() => { setDecision2(true)
              // ; onClick();
               }}>{decision2}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SceneDecision;
