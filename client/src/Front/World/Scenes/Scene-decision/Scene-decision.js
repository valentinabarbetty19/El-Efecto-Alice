import React, { useState } from "react";
import "./Scene-decision.css";
//import Typewriter from "typewriter-effect";
import Typewriter from "../../Typewriter";
const SceneDecision = ({
  id,
  language,
  text,
  img,
  decision1,
  decision2,
  setDecision1,
  setDecision2,
  onClick,
  animation = 0,
  photo,
}) => {
  document.body.style.backgroundImage = `url(${img})`;

  return (
    <div>
      <div className="App">
        <div className="content" onClick={onClick}>
        <p><Typewriter keyProp={id} text={text} speed={30} /></p>
          <div className="button-container">
            {animation === 72 ? (
              <div>
                {decision1 !== null && (
                  <button
                    className="button-outline"
                    style={{ marginRight: '10px' }} 
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
                    style={{ marginLeft: '10px' }}
                    onClick={() => {
                      setDecision2(true);
                    }}
                  >
                    {decision2}
                  </button>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SceneDecision;
