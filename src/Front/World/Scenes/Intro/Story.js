import React, { useEffect, useRef, useState } from "react";
import "./Intro.css";

import Alice, { AliceHoodie } from "../models/Alice-hoodie";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import SceneDecision from "../Scene-decision/Scene-decision";

import Vecino from "../models/Vecino";
import Pastillas from "../models/Pastillas";
import Alex, { Esposo } from "../models/Alex";
import Jonas from "../models/Jonas";
import {
  CameraControls,
  Effects,
  Html,
  Text,
  ShaderPass,
  Environment,
} from "@react-three/drei";
import Lab from "../models/Scenarios/Lab";
import Hand from "../models/Scenarios/Hand";
import AliceLab from "../models/Alice-lab";
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
import AliceHoodie2 from "../models/AliceHoodie2";
import AliceNobel from "../models/AliceNobel";
import DoctorCarl from "../models/DoctorCarl";
import DoctorJimin from "../models/DoctorJimin";
import Video from "../Video/Video";
import Car from "../models/Car";
import Signs from "../models/Signs";
import SepiaEffect from "./Filter";
import Arrow from "../models/Scenarios/Arrow";
import Arrow2 from "../models/Scenarios/Arrow2";

import {
  Bloom,
  BrightnessContrast,
  ColorAverage,
  DepthOfField,
  EffectComposer,
  Glitch,
  HueSaturation,
  Noise,
  Pixelation,
  Scanline,
  ToneMapping,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useControls } from "leva";

const Story = ({ language, info, route1, route2 }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [decision1, setDecision1] = useState(false);
  const [decision2, setDecision2] = useState(false);

  const changeImage = () => {
    if (currentImageIndex === info.length - 1) {
      // Si estás en la última imagen, no hagas nada al tocar fuera del área
      return;
    }
    
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };
  
  // Resto del código...
  
  useEffect(() => {
    if (currentImageIndex === info.length - 1) {
      // if (decision1) {
      //   navigate(route1);
      // } else if (decision2) {
      //   navigate(route2);
      // }
    }
  }, [currentImageIndex, decision1, decision2, info, navigate, route1, route2]);

  const shouldShowAlice = info[currentImageIndex].alice === true;
  const shouldShowArrow = info[currentImageIndex].arrow === true;
  const shouldShowArrow2 = info[currentImageIndex].arrow2 === true;
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
  const shouldShowStreetDecision =
    info[currentImageIndex].street_decision === true;
  const shouldShowAliceJeans = info[currentImageIndex].aliceJeans === true;
  const shouldShowAliceDress = info[currentImageIndex].aliceDress === true;
  const shouldShowAliceHoodie2 = info[currentImageIndex].aliceHoodie2 === true;
  const shouldShowAliceNobel = info[currentImageIndex].aliceNobel === true;
  const shouldShowDoctorCarl = info[currentImageIndex].doctorCarl === true;
  const shouldShowDoctorJimin = info[currentImageIndex].doctorJimin === true;
  const shouldShowEsposo = info[currentImageIndex].esposo === true;
  const shouldShowVecino = info[currentImageIndex].vecino === true;
  const shouldShowAmbienteTree = info[currentImageIndex].ambiente === true;


  const shouldShowCar = info[currentImageIndex].car === true;
  const shouldShowSigns = info[currentImageIndex].sign === true;
  const audioRef = useRef(null);
  const boxRef = useRef();
  const [hovered, setHover] = useState(false);
  useEffect(() => {
    // Cleanup function to pause and reset the audio when props.sonido changes
    const cleanupAudio = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };

    // Check if the sound should be played based on props.sonido
    if (
      info[currentImageIndex].sonido === 1 ||
      info[currentImageIndex].sonido === 2 ||
      info[currentImageIndex].sonido === 3 ||
      info[currentImageIndex].sonido === 4 ||
      info[currentImageIndex].sonido === 5 ||
      info[currentImageIndex].sonido === 6 ||
      info[currentImageIndex].sonido === 7 ||
      info[currentImageIndex].sonido === 8 ||
      info[currentImageIndex].sonido === 9 ||
      info[currentImageIndex].sonido === 10 ||
      info[currentImageIndex].sonido === 11 ||
      info[currentImageIndex].sonido === 12 ||
      info[currentImageIndex].sonido === 13 ||
      info[currentImageIndex].sonido === 14 ||
      info[currentImageIndex].sonido === 15
    ) {
      // Cleanup previous audio if it exists
      cleanupAudio();

      // Create a new audio element
      let audioSrc = "";
      if (info[currentImageIndex].sonido === 1) {
        audioSrc = "/assets/Audio/Cry.mp3";
      } else if (info[currentImageIndex].sonido === 2) {
        audioSrc = "/assets/Audio/GritoTrueno.mp3";
      } else if (info[currentImageIndex].sonido === 3) {
        audioSrc = "/assets/Audio/BoyLaugh.mp3";
      } else if (info[currentImageIndex].sonido === 4) {
        audioSrc = "/assets/Audio/lluvia_truenos.mp3";
      } else if (info[currentImageIndex].sonido === 5) {
        audioSrc = "/assets/Audio/GritoTrueno.mp3";
      } else if (info[currentImageIndex].sonido === 6) {
        audioSrc = "/assets/Audio/LluviaLlanto.mp3";
      } else if (info[currentImageIndex].sonido === 7) {
        audioSrc = "/assets/Audio/HappySong.mp3";
      } else if (info[currentImageIndex].sonido === 8) {
        audioSrc = "/assets/Audio/Door.mp3";
      } else if (info[currentImageIndex].sonido === 9) {
        audioSrc = "/assets/Audio/Wormhole2.mp3";
      } else if (info[currentImageIndex].sonido === 10) {
        audioSrc = "/assets/Audio/ClapAudience.mp3";
      } else if (info[currentImageIndex].sonido === 11) {
        audioSrc = "/assets/Audio/CarScream.mp3";
      } else if (info[currentImageIndex].sonido === 12) {
        audioSrc = "/assets/Audio/Car.mp3";
      } else if (info[currentImageIndex].sonido === 13) {
        audioSrc = "/assets/Audio/Butter.mp3";
      } else if (info[currentImageIndex].sonido === 14) {
        audioSrc = "/assets/Audio/Screams.mp3";
      } else if (info[currentImageIndex].sonido === 15) {
        audioSrc = "/assets/Audio/Beep.mp3";
      }

      audioRef.current = new Audio(audioSrc);

      // Play the sound
      audioRef.current.play();
    }

    // Return the cleanup function
    return cleanupAudio;
  }, [info[currentImageIndex].sonido]);
  // const { focusDistance, focalLength, bokehScale, blendFunction, height, brightness, constrast, middleGrey, maxLuminance , scanlineDensity, saturation, hue } =
  //   useControls({
  //     focusDistance: {
  //       min: 0,
  //       max: 1,
  //       value: 0,
  //     },
  //     focalLength: {
  //       min: 0,
  //       max: 2,
  //       value: 0.2,
  //     },
  //     bokehScale: {
  //       min: 0,
  //       max: 10,
  //       value: 4.2,
  //     },
  //     height: {
  //       min: 0,
  //       max: 1024,
  //       value: 480,
  //     },
  //     scanlineDensity: {
  //       min: 0,
  //       max: 4,
  //       value: 0.42,
  //     },
  //     saturation: {
  //       value: 0,
  //       min: 0,
  //       max: Math.PI,
  //       step: 0.1
  //     },
  //     hue: {
  //       value: 0,
  //       min: 0,
  //       max: Math.PI,
  //       step: 0.1
  //     },brightness: {
  //       value: 0,
  //       min: -1,
  //       max: 1,
  //       step: 0.1
  //     },
  //     constrast: {
  //       value: 0,
  //       min: -1,
  //       max: 1,
  //       step: 0.1
  //     },middleGrey: {
  //       min: 0,
  //       max: 1,
  //       value: 0.6,
  //       step: 0.1
  //     },
  //     maxLuminance: {
  //       min: 0,
  //       max: 64,
  //       value: 16,
  //       step: 1
  //     }, blendFunction: {
  //       label: "Blend Function",
  //       options: [
  //         BlendFunction.OVERLAY,
  //         BlendFunction.NORMAL,
  //         BlendFunction.ADD,
  //         BlendFunction.COLOR_BURN,
  //         BlendFunction.COLOR_DODGE,
  //         BlendFunction.DARKEN,
  //         BlendFunction.LIGHTEN,
  //         BlendFunction.MULTIPLY
  //       ]
  //     }
  //   });
  // const focusDistance = 0;
  // const focalLength = 0.2;
  // const bokehScale = 4.2;
  // const height = 480;
  // const scanlineDensity = 0.42;
  // const saturation = 0;
  // const hue = 0;
  // const brightness = -0.08;
  // const constrast = -0.5;
  // const middleGrey = 0.6;
  // const maxLuminance = 16;
  // const blendFunction = BlendFunction.OVERLAY;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ transform: "translateY(30px)" }}>
        {info[currentImageIndex].video === true ? (
          <Video />
        ) : (
          <Canvas style={{ width: "100vw", height: "90vh" }}>
            {/* <SepiaEffect /> */}
            {info[currentImageIndex].sad === true ? (
              // <EffectComposer>
              //   {/* Include your post-processing components here */}
              //   <BrightnessContrast
              //     brightness={brightness}
              //     contrast={constrast}
              //   />
              //   <Vignette eskil={false} offset={0.3} darkness={0.9} />
              // </EffectComposer>
              <EffectComposer>
              {/* <DepthOfField
                focusDistance={focusDistance}
                focalLength={focalLength}
                bokehScale={bokehScale}
                height={height}
              />
              <Bloom mipmapBlur luminanceThreshold={1} intensity={2.4} />
            
              <HueSaturation
                blendFunction={BlendFunction.NORMAL} // blend mode
                hue={hue} saturation={-0.2} // saturation in radians
              /> */}
               {/* <BrightnessContrast brightness={brightness} contrast={constrast} /> */}
               <ToneMapping middleGrey={0.6} maxLuminance={1} />
               {/* <Glitch /> */}
               <Vignette eskil={false} offset={0.3} darkness={0.9} />
               <ColorAverage blendFunction={BlendFunction.DARKEN} />
            </EffectComposer>
            ) : null}
            <CameraControls />
            <ambientLight intensity={2} />

            {shouldShowAlice && (
              <AliceHoodie animation={info[currentImageIndex].animation} />
            )}
            {shouldShowLab && <Lab id_pos={info[currentImageIndex].id} />}

            {shouldShowHospital && <Hospital />}
            {shouldShowAliceJeans && (
              <AliceJeans animation={info[currentImageIndex].animation} />
            )}
            {shouldShowAliceDress && (
              <AliceParty animation={info[currentImageIndex].animation} />
            )}
            {shouldShowAliceHoodie2 && (
              <AliceHoodie2 animation={info[currentImageIndex].animation} />
            )}
            {shouldShowAliceNobel && (
              <AliceNobel animation={info[currentImageIndex].animation} />
            )}
            {shouldShowDoctorCarl && (
              <DoctorCarl animation={info[currentImageIndex].animation} />
            )}
            {shouldShowDoctorJimin && (
              <DoctorJimin animation={info[currentImageIndex].animation} />
            )}
            {shouldShowVecino && (
              <Vecino animation={info[currentImageIndex].animation} />
            )}
            {shouldShowEsposo && (
              <Esposo animation={info[currentImageIndex].animation} />
            )}
            {shouldShowStreet && <Street />}
            {shouldShowStreet && <Car />}
            {shouldShowStreetDecision && <StreetDecision />}
            {shouldShowAliceLab && (
              <AliceLab
                animation={info[currentImageIndex].animation}
              />
            )}
            {shouldShowPastillas && <Pastillas />}
            {shouldShowSigns && <Signs />}
            {shouldShowMano && <Hand />}
            {shouldShowBracelet && (
              <Brazalete id_pos={info[currentImageIndex].id} />
            )}
            {shouldShowAlex && <Alex />}
            {shouldShowJonas && (
              <Jonas animation={info[currentImageIndex].animation} />
            )}
            {shouldShowBedRoom && (
              <Bedroom id_pos={info[currentImageIndex].id} />
            )}
            {shouldShowLivingRoom && (
              <Livingroom id_pos={info[currentImageIndex].id} />
            )}
            {shouldShowTree && <Tree id_pos={info[currentImageIndex].id}/>}
            {shouldShowManicomio && <Manicomio />}
            {shouldShowArrow && (
              <Arrow id_pos={info[currentImageIndex].id} />
            )}

            {shouldShowArrow2 && (
            <Arrow2 id_pos={info[currentImageIndex].id} />
            )}

            {shouldShowAmbienteTree && <Environment
            files="/assets/environments/satara_night_no_lamps_1k.hdr"
            background={true}
            id_pos={info[currentImageIndex].id}
            

        />}
          </Canvas>
        )}
      </div>
      <div>
        <div>
          <SceneDecision
            text={
              language === "español"
                ? info[currentImageIndex].mensaje
                : info[currentImageIndex].message
            }
            img={info[currentImageIndex].imageUrl}
            onClick={() => changeImage()}
            id={info[currentImageIndex].id}
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
    </div>
  );
};

export default Story;
