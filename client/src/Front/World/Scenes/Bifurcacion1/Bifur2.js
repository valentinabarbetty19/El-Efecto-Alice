import React, { useState } from "react";
import Scene from "../Scene/Scene";
import { bifur2Array } from "./data";
import Alice from "../models/Alice";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";


import SceneDecision from "../Scene-decision/Scene-decision";
import { bifur2ArrayDecision } from "./dataOption";
const Bifur2 = ({ language }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSceneDecision, setShowSceneDecision] = useState(false);
  const [decision1, setDecision1] = useState(false);
  const [decision2, setDecision2] = useState(false);
  const changeImage = () => {
    if (currentImageIndex === bifur2Array.length - 1) {
      setShowSceneDecision(true);
    } else {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  };
  const changeDecision = () => {
    // console.log("holaaaa" + decision1, decision2);
    // if (decision1) {
    //   navigate("/game/bifur1");
    // } else {
    //   navigate("/game/bifur2");
    // }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Canvas style={{ width: "100vw", height: "80vh" }}>
        <ambientLight intensity={2} />
    
        <Alice />
      </Canvas>
      <div>
          {showSceneDecision ? (
            // If showSceneDecision is true, render the SceneDecision component
            <SceneDecision
              text={
                language === "español"
                  ? bifur2ArrayDecision[0].mensaje
                  : bifur2ArrayDecision[0].message
              }
              img={bifur2ArrayDecision[0].imageUrl}
              decision1={
                language === "español"
                  ? bifur2ArrayDecision[0].decision1es
                  : bifur2ArrayDecision[0].decision1en
              }
              decision2={
                language === "español"
                  ? bifur2ArrayDecision[0].decision2es
                  : bifur2ArrayDecision[0].decision2en
              }
              setDecision1={setDecision1}
              setDecision2={setDecision2}
              onClick={changeDecision}
            />
          ) : (
            // Otherwise, render the Scene component
            <Scene
              text={
                language === "español"
                  ? bifur2Array[currentImageIndex].mensaje
                  : bifur2Array[currentImageIndex].message
              }
              img={bifur2Array[currentImageIndex].imageUrl}
              onClick={changeImage}
            />
          )}
        </div>
    </div>
  );
};

export default Bifur2;
