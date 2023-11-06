import React, { useEffect, useState } from "react";
import "./Intro.css";
import Scene from "../Scene/Scene";
import { introArray } from "./data";
import Alice from "../models/Alice";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";

import SceneDecision from "../Scene-decision/Scene-decision";

import Vecino from "../models/Vecino";

const Story = ({ language, info, route1, route2 }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [decision1, setDecision1] = useState(false);
  const [decision2, setDecision2] = useState(false);

  const changeImage = () => {
    if (currentImageIndex === info.length - 1) {
      if (decision1) {
        navigate(route1);
      } else if (decision2) {
        navigate(route2);
      }
    } else {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  };
  useEffect(() => {
    if (currentImageIndex === info.length - 1) {
      if (decision1) {
        navigate(route1);
      } else if (decision2) {
        navigate(route2);
      }
    }
  }, [currentImageIndex, decision1, decision2, info, navigate, route1, route2]);

  const shouldShowAlice = info[currentImageIndex].alice === true;
  const shouldShowAlex = info[currentImageIndex].alex === true;
  const shouldShowJonas = info[currentImageIndex].jonas === true;
  const shouldShowEyder = info[currentImageIndex].eyder === true;
  const shouldShowCarl = info[currentImageIndex].carl === true;
  const shouldShowJimmy = info[currentImageIndex].jimmy === true;
  const shouldShowNarrador = info[currentImageIndex].narrador === true;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Canvas style={{ width: "100vw", height: "80vh" }}>
        <ambientLight intensity={2} />

        {shouldShowAlice && <Alice />}
        {shouldShowAlex && <Vecino />}
      </Canvas>
      <div>
        <SceneDecision
          text={
            language === "español"
              ? info[currentImageIndex].mensaje
              : info[currentImageIndex].message
          }
          img={info[currentImageIndex].imageUrl}
          onClick={() => changeImage()}
          decision1={
            language === "español"
              ? info[currentImageIndex].decision1es
              : info[currentImageIndex].decision1en
          }
          decision2={
            language === "español"
              ? info[currentImageIndex].decision2es
              : info[currentImageIndex].decision2en
          }
          setDecision1={setDecision1}
          setDecision2={setDecision2}
          // onClick={changeDecision}
        />
      </div>
    </div>
  );
};

export default Story;
