/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three';

export function AliceJeans(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/assets/models/Alice/AliceJeans/AliceJeansAnimations.glb");
  const { actions } = useAnimations(animations, group);
  const [rotationx, setRotationx] = useState(0);
  const [rotationz, setRotationz] = useState(0);
  const [rotationy, setRotationy] = useState(0);
  const [positionx, setPositionX] = useState(0);
  const [positiony, setPositionY] = useState(0);
  const [positionz, setPositionZ] = useState(0);
  const [scale, setScale] = useState(0)
  const [izqWalk, setIzqWalk] = useState(false);
  const [derWalk, setDerWalk] = useState(false);
 




  useEffect(() => {
    console.log(actions)
    for (const key in actions) {
      actions[key].stop();
    }
    
    if (props.animation === 12) {
      setPositionZ(1)
      setPositionX(-3)
      setPositionY(-3.9)
      setRotationy( Math.PI / 1.2 )
      console.log(actions)

    const action = actions["Crying"];
    action.play();
    }
    
    if((props.animation === 13)){
      setPositionZ(-3)
      setPositionX(3.4)
      setPositionY(-3.9)
      setRotationy( Math.PI * 3.5)

      console.log(animations)
      
      const action = actions["Dancing"];
     action.play();
    }
    if ((props.animation === 51)) {
      setPositionZ(-13);
      setPositionX(-4);
      setPositionY(-4);
      setRotationy(Math.PI * 2.2);
    setScale(5)
      const action = actions["Worried"];
      action.reset()
        .setEffectiveTimeScale(1)
        .setEffectiveWeight(1)
        .fadeIn(0.5) // Set the loop type to LoopOnce
        .play();
    } else if ((props.animation === 52)) {
      setPositionZ(-13);
      setPositionX(-4);
      setPositionY(-3);
      setRotationy(Math.PI * 2.2);
      const action = actions["Worried"];
      action.reset()
        .setEffectiveTimeScale(1)
        .setEffectiveWeight(1)
        .fadeIn(0.5) // Set the loop type to LoopOnce
        .play();
        setScale(4.5)
    } else if ((props.animation === 53)) {
    
      setPositionZ(-1);
      setPositionX((prevX) => prevX - 0.06);
      setPositionY(-8);
      setRotationy(- Math.PI / 2);
      const action = actions["RunDrunkPlace"];
      group.current.position.x -= 1; 
      action.reset()
        .setEffectiveTimeScale(1)
        .setEffectiveWeight(1)
        .fadeIn(0.5) // Set the loop type to LoopOnce
        .play();
        setScale(5)
      } else if ((props.animation === 55)) {
    
        setPositionZ(2);
        setPositionX(-0.8);
        setPositionY(-0.5);
        setRotationy( Math.PI / 1.5);
        const action = actions["Screaming"];
        action.reset()
          .setEffectiveTimeScale(1)
          .setEffectiveWeight(1)
          .fadeIn(0.5) // Set the loop type to LoopOnce
          .play();
          setScale(1)
        } else if ((props.animation === 59)) {
          setPositionZ(2);
        setPositionX(1);
        setPositionY(-0.5);
        setRotationy( Math.PI / 2);
          const action = actions["Crying"];
          action.reset()
            .setEffectiveTimeScale(1)
            .setEffectiveWeight(1)
            .fadeIn(0.5) // Set the loop type to LoopOnce
            .play();
            setScale(1)
        } else if ((props.animation === 60)) {
          setPositionZ(2);
        setPositionX(1);
        setPositionY(-0.5);
        setRotationy( Math.PI / 2);
          const action = actions["Talking"];
          action.reset()
            .setEffectiveTimeScale(1)
            .setEffectiveWeight(1)
            .fadeIn(0.5) // Set the loop type to LoopOnce
            .play();
            setScale(1)
        } else if ((props.animation === 61)) {
          setPositionZ(2);
        setPositionX(1);
        setPositionY(-0.5);
        setRotationy( Math.PI / 2);
          const action = actions["Idle"];
          action.reset()
            .setEffectiveTimeScale(1)
            .setEffectiveWeight(1)
            .fadeIn(0.5) // Set the loop type to LoopOnce
            .play();
            setScale(1)
        } else if ((props.animation === 54)) {
          setPositionZ(-10);
        setPositionX(-5);
        setPositionY(-0.5);
        setRotationy( Math.PI * 2.1)
          const action = actions["Asking"];
          action.reset()
            .setEffectiveTimeScale(1)
            .setEffectiveWeight(1)
            .fadeIn(0.5) // Set the loop type to LoopOnce
            .play();
            setScale(4)
        } 
    else {
      setScale(4)
    }
    
  }, [props.animation, group.current]);

  useFrame(() => {
    if (props.animation === 53) {
      setPositionX((prevX) => prevX - 0.2);
    }
  });

  useEffect(() => {
    let animationFrameId;
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        setIzqWalk(true);
        setDerWalk(false);
      } else if (event.key === "ArrowRight") {
        setDerWalk(true);
        setIzqWalk(false);
      }
    };
  
    const handleKeyUp = (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        setIzqWalk(false);
        setDerWalk(false);
        for (const key in actions) {
          actions[key].stop();
        }
        actions["Idle"].play();
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  
    const updateCharacterPosition = () => {
      if (group.current) {
        if (izqWalk) {
          if (group.current.position.x === -5 &&
              group.current.position.y === 0.5 &&
              group.current.position.z === -10) {
            group.current.position.x -= 0.06;
            group.current.position.z -= 0.04;
            group.current.position.y += 0.015;
            setRotationy(-Math.PI / 8);
            actions["WalkPlace"].play();
          } else {
            group.current.position.x -= 0.06;
            group.current.position.z -= 0.04;
            group.current.position.y += 0.015;
            setRotationy(-Math.PI / 2);
            actions["WalkPlace"].play();
          }
        }
        
        // Manejar la flecha derecha para revertir el movimiento
        if (derWalk) {
          if (group.current.position.x !== -5 || group.current.position.y !== 0.5 || group.current.position.z !== -10) {
            group.current.position.x += 0.06; // Ajusta estos valores según tus necesidades
            group.current.position.z += 0.04; // Ajusta estos valores según tus necesidades
            group.current.position.y -= 0.015; // Ajusta estos valores según tus necesidades
            setRotationy(Math.PI / 2); // Puedes ajustar el ángulo según tus necesidades
            actions["WalkPlace"].play();
          }
        }
         else if (derWalk) {
          group.current.position.x += 0.06;
          group.current.position.z -= 0.04;
          group.current.position.y += 0.015;
          setRotationy(Math.PI * 0.8);
          actions["WalkPlace"].play();
        }
        animationFrameId = requestAnimationFrame(updateCharacterPosition);
      }
    };
  
    updateCharacterPosition();
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [izqWalk, derWalk]);

  return (
    <group ref={group} {...props} dispose={null}
    rotation-x={rotationx}
    rotation-z={rotationz}
    rotation-y={rotationy}
    position-x={positionx}
    position-z={positionz}
    position-y={positiony}
    scale={scale}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials["Wolf3D_Eye.005"]}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials["Wolf3D_Eye.005"]}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials["Wolf3D_Body.005"]}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Glasses"
            geometry={nodes.Wolf3D_Glasses.geometry}
            material={materials["Wolf3D_Glasses.005"]}
            skeleton={nodes.Wolf3D_Glasses.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials["Wolf3D_Glasses.005"]}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials["Wolf3D_Skin.005"]}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials["Wolf3D_Outfit_Bottom.005"]}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials["Wolf3D_Outfit_Footwear.005"]}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials["Wolf3D_Outfit_Top.005"]}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials["Wolf3D_Teeth.005"]}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/Alice/AliceJeans/AliceJeansAnimations.glb");
export default AliceJeans;

