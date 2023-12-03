import React, { useRef, useEffect, useState } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { Navigate, useNavigate } from "react-router-dom";

export function Alice(props) {
  const { nodes, materials } = useGLTF("/assets/models/Alice/Alice.glb");
  const { animations: walkingAnimation } = useFBX(
    "/assets/models/Alice/Animations/Walking.fbx"
  );
  const { animations: turningLeftAnimation } = useFBX(
    "/assets/models/Alice/Animations/hpta.fbx"
  );
  const aliceRef = useRef();

  const navigate = useNavigate();
  const [rotationx, setRotationx] = useState(props.rotationx);
  const [rotationz, setRotationz] = useState(0);
  const [rotationy, setRotationy] = useState(props.rotationy);
  const [positionx, setPositionX] = useState(0);
  const [izqWalk, setIzqWalk] = useState(false);
  const [derWalk, setDerWalk] = useState(false);

  walkingAnimation[0].name = "Walking";
  turningLeftAnimation[0].name = "Turning";

  const { actions } = useAnimations(
    [walkingAnimation[0], turningLeftAnimation[0]],
    aliceRef
  );

  const nextBifur1 = () => {
    setRotationy(Math.PI / 2);
    setRotationz(Math.PI / 2);
    setPositionX(-2.3);
    //
    //actions["Turning"].stop();
    navigate("/game/bifur1");
  };
  const nextBifur2 = () => {
    navigate("/game/bifur2");
  };
  useEffect(() => {
    if (props.animation === 1) {
      const handleKeyDown = (event) => {
        if (event.key === "ArrowLeft") {
          setIzqWalk(true);
          setDerWalk(false);
          window.removeEventListener("keydown", handleKeyDown);
        } else if (event.key === "ArrowRight") {
          setDerWalk(true);
          setIzqWalk(false);
          window.removeEventListener("keydown", handleKeyDown);
        }
      };
  
      window.addEventListener("keydown", handleKeyDown);
  
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [props.animation]);

  useEffect(() => {
    if (props.animation === 1) {
      const speed = 0.02;

      const updateCharacterPosition = () => {
        if (aliceRef.current) {
          if (izqWalk) {
            setRotationx(-Math.PI / 2);
            setRotationz(-Math.PI / 2);
            setPositionX(2);

            aliceRef.current.position.x -= speed;

            if (actions && actions["Walking"]) {
              actions["Walking"].play();
            }

            setTimeout(nextBifur2, 2000);
          }
          if (derWalk) {
            setRotationx(-Math.PI / 2);
            setRotationz(0);
           // setPositionX(-2.3);

            if (actions && actions["Turning"]) {
              actions["Turning"].play();
            }

            // aliceRef.current.position.x += speed;
            setTimeout(nextBifur1, 2100);
          }
          requestAnimationFrame(updateCharacterPosition);
        }
      };

      updateCharacterPosition();

      return () => {
        cancelAnimationFrame(updateCharacterPosition);
      };
    } else {
      setIzqWalk(false);
      setDerWalk(false);
    }
  }, [props.animation, izqWalk, derWalk]);

  
  return (
    <group
      ref={aliceRef}
      {...props}
      dispose={null}
      scale={4.2}
      position-x={positionx}
      position-y={-5}
    >
      <group
        rotation-x={rotationx}
        rotation-z={rotationz}
        rotation-y={rotationy}
      >
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials.Wolf3D_Glasses}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/Alice/Alice.glb");
export default Alice;