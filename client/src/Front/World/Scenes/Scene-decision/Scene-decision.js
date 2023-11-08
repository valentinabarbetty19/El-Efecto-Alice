import React, { useState } from "react";
import "./Scene-decision.css";

const SceneDecision = ({
  language,
  text,
  img,
  decision1,
  decision2,
  setDecision1,
  setDecision2,
  onClick,
  animation = 0,
}) => {
  document.body.style.backgroundImage = `url(${img})`;

  return (
    <div>
      <div className="App">
        <div className="content" onClick={onClick}>
          <p>{text}</p>
          <div className="button-container">
            {animation === 0 ? (
              <div>
                {decision1 !== null && (
                  <button
                    className="button-outline"
                    onClick={() => {
                      setDecision1(true);
                    }}
                  >
                    {decision1}
                  </button>
                )}
                {decision2 !== null && (
                  <button
                    className="button-outline"
                    onClick={() => {
                      setDecision2(true);
                    }}
                  >
                    {decision2}
                  </button>
                )}
              </div>
            ) : animation === 1 ? (
              <img
                src="assets/img/gif/keyboard.gif" 
                alt="GIF"
                style={{
                  width: "200px", 
                  height: "150px", 
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SceneDecision;
