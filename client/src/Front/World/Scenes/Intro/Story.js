import React, { useEffect, useState } from "react";
import "./Intro.css";

import Alice from "../models/Alice-hoodie";

import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";

import SceneDecision from "../Scene-decision/Scene-decision";

import Vecino from "../models/Vecino";
import Pastillas from "../models/Pastillas";
import Alex from "../models/Alex";
import Jonas from "../models/Jonas";
import { CameraControls } from "@react-three/drei";
import Lab from "../models/Scenarios/Lab";
import Hand from "../models/Scenarios/Hand";
import AliceLab from "../models/Scenarios/Alice-lab";
import Brazalete from "../models/Brazalete";
import Bedroom from "../models/Scenarios/Bedroom";
import Livingroom from "../models/Scenarios/Livingroom";
import Tree from "../models/Scenarios/Tree";
import Hospital from "../models/Scenarios/Hospital";
import Manicomio from "../models/Scenarios/Manicomio";
import Street from "../models/Street";
import StreetDecision from "../models/Scenarios/Street-decision";
import AliceJeans from "../models/AliceJeans";
import AliceParty from "../models/Alice-party";

const Story = ({ language, id, info, route1, route2, animation }) => {
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
  const shouldShowAliceLab = info[currentImageIndex].aliceLab === true;
  const shouldShowLab = info[currentImageIndex].lab === true;
  const shouldShowBracelet = info[currentImageIndex].bracelet === true;
  const shouldShowBedRoom = info[currentImageIndex].bedroom === true;
  const shouldShowLivingRoom = info[currentImageIndex].livingroom === true;
  const shouldShowTree = info[currentImageIndex].tree === true;
  const shouldShowCarl = info[currentImageIndex].carl === true;
  const shouldShowJimmy = info[currentImageIndex].jimmy === true;
  const shouldShowHospital = info[currentImageIndex].hospital === true;
  const shouldShowManicomio = info[currentImageIndex].manicomio === true;
  const shouldShowPastillas = info[currentImageIndex].pastillas === true;
  const shouldShowMano = info[currentImageIndex].mano === true;
  const shouldShowStreet = info[currentImageIndex].street === true;
  const shouldShowStreetDecision = info[currentImageIndex].street_decision === true;
  const shouldShowAliceJeans = info[currentImageIndex].aliceJeans === true;
  const shouldShowAliceDress = info[currentImageIndex].aliceDress === true;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ transform: 'translateY(30px)' }}>
      <Canvas style={{ width: '100vw', height: '90vh' }}>
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
        {shouldShowLab && <Lab />}
        {shouldShowHospital && <Hospital />}
        {shouldShowAliceJeans && <AliceJeans />}
        {shouldShowAliceDress && <AliceParty />}
        {shouldShowStreet && <Street />}
        {shouldShowStreetDecision && <StreetDecision />}
        {shouldShowLab && <AliceLab animation={info[currentImageIndex].animation}
            rotationx={info[currentImageIndex].rotationx}
            rotationz={info[currentImageIndex].rotationz}
            rotationy={info[currentImageIndex].rotationy}
            positionx={info[currentImageIndex].positionx}
            positionz={info[currentImageIndex].positionz}
            positiony={info[currentImageIndex].positiony}/>}
        {shouldShowPastillas && <Pastillas />}
        {shouldShowMano && <Hand />}
        {shouldShowEyder && <Vecino />}
        {shouldShowBracelet && <Brazalete />}
        {shouldShowAlex && <Alex />}
        {shouldShowJonas && <Jonas />}
        {shouldShowBedRoom && <Bedroom />}
        {shouldShowLivingRoom && <Livingroom />}
        {shouldShowTree && <Tree />}
        {shouldShowManicomio && <Manicomio />}
      </Canvas>
    </div>
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
