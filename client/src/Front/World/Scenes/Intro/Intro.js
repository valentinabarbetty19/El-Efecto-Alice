<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useEffect, useState } from "react";
import "./Intro.css";
import Scene from "../Scene/Scene";
import { introArray } from "./data";
import Alice from "../models/Alice";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";

>>>>>>> a45ae1d543fccf575e01707ef2a07bbd7c34734f

import { introArray } from "./data";
import Story from "../Intro/Story";
const Intro = ({ language }) => {
<<<<<<< HEAD

  const info = introArray;
  const route1 = "/game/bifur1"
  const route2 = "/game/bifur2"
  

  return (
    <Story language={language}  info={info} route1={route1} route2={route2}
    />
=======
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSceneDecision, setShowSceneDecision] = useState(false);
  const [decision1, setDecision1] = useState(false);
  const [decision2, setDecision2] = useState(false);
  const changeImage = () => {
    if (currentImageIndex === introArray.length - 1) {
      setShowSceneDecision(true);
    } else {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  };
  useEffect(() => {
    if (decision1) {
      navigate("/game/bifur1");
    } else if (decision2) {
      navigate("/game/bifur2");
    }
  }, [decision1, decision2, navigate]);

  // const changeDecision = () => {
  //   if (decision1) {
  //     navigate("/game/bifur1");
  //   } else if (decision2) {
  //     console.log("bifur222")
  //     // navigate("/game/bifur2");
  //   }
  // };

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
                  ? introArrayDecision[0].mensaje
                  : introArrayDecision[0].message
              }
              img={introArrayDecision[0].imageUrl}
              decision1={
                language === "español"
                  ? introArrayDecision[0].decision1es
                  : introArrayDecision[0].decision1en
              }
              decision2={
                language === "español"
                  ? introArrayDecision[0].decision2es
                  : introArrayDecision[0].decision2en
              }
              setDecision1={setDecision1}
              setDecision2={setDecision2}
              // onClick={changeDecision}
            />
          ) : (
            // Otherwise, render the Scene component
            <Scene
              text={
                language === "español"
                  ? introArray[currentImageIndex].mensaje
                  : introArray[currentImageIndex].message
              }
              img={introArray[currentImageIndex].imageUrl}
              onClick={changeImage}
            />
          )}
        </div>
    </div>
>>>>>>> a45ae1d543fccf575e01707ef2a07bbd7c34734f
  );
};

export default Intro;
