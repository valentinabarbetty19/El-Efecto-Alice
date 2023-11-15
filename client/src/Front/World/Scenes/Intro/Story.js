import React, { useEffect, useState } from "react";
import "./Intro.css";

import Alice from "../models/Alice";

import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";

import SceneDecision from "../Scene-decision/Scene-decision";

import Vecino from "../models/Vecino";
import Alex from "../models/Alex";
import Jonas from "../models/Jonas";
import { CameraControls } from "@react-three/drei";

const Story = ({ language, id, info, route1, route2, animation }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [decision1, setDecision1] = useState(false);
  const [decision2, setDecision2] = useState(false);

  const changeImage = () => {
    if (currentImageIndex === info.length - 1) {
      if (decision1) {
        //setDecision1(id)
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
        <CameraControls />
        <ambientLight intensity={2} />

        {shouldShowAlice && (
          <Alice
            animation={info[currentImageIndex].animation}
            rotationx={info[currentImageIndex].rotationx}
            rotationz={info[currentImageIndex].rotationz}
            rotationy={info[currentImageIndex].rotationy}
          />
        )}
        {shouldShowEyder && <Vecino />}
        {shouldShowAlex && <Alex />}
        {shouldShowJonas && <Jonas />}
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
          animation={info[currentImageIndex].animation}
          photo={info[currentImageIndex].photo}
          // onClick={changeDecision}
        />
      </div>
    </div>
  );
};

export default Story;
