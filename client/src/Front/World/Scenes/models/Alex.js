/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { UNSAFE_mapRouteProperties } from "react-router";

export function Esposo(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/Esposo/EsposoAnimations.glb"
  );
  const { actions } = useAnimations(animations, group);
  const [rotationx, setRotationx] = useState(0);
  const [rotationz, setRotationz] = useState(0);
  const [rotationy, setRotationy] = useState(0);
  const [positionx, setPositionX] = useState(0);
  const [positiony, setPositionY] = useState(0);
  const [positionz, setPositionZ] = useState(0);
  const [scale, setScale] = useState(0)

  useEffect(() => {
    for (const key in actions) {
      actions[key].fadeOut(0.5);
    }
    if(props.animation === 66){
      setPositionZ(-15)
      setPositionX(10)
      setPositionY(0)
      //setRotationx( -Math.PI / 0.55)
      setRotationy( -Math.PI / 2)
      const action = actions["Dancing"];
     action.reset()
     .setEffectiveTimeScale(1)
     .setEffectiveWeight(1)
     .fadeIn(0.5) // Set the loop type to LoopOnce
     .play();
     setScale(5)
    }
    else if ((props.animation === 59) || (props.animation === 60)) {
      setPositionZ(2);
        setPositionX(2);
        setPositionY(-0.5);
        setRotationy(- Math.PI / 1.8);
        setScale(1)
      const action = actions["Idle"];
      action.reset()
        .setEffectiveTimeScale(1)
        .setEffectiveWeight(1)
        .fadeIn(0.5) // Set the loop type to LoopOnce
        .play();
        
    } else if ((props.animation === 61)) {
      setPositionZ(2);
        setPositionX(2);
        setPositionY(-0.5);
        setRotationy(- Math.PI / 1.8);
        setScale(1)
      const action = actions["Talking"];
      action.reset()
        .setEffectiveTimeScale(1)
        .setEffectiveWeight(1)
        .fadeIn(0.5) // Set the loop type to LoopOnce
        .play();
        
    } else {
      setScale(4.5)
    }
    
  }, [props.animation]);
  return (
    <group ref={group} {...props} scale={scale} dispose={null} 
    rotation-x={rotationx}
        rotation-z={rotationz}
        rotation-y={rotationy}
        position-x={positionx}
        position-z={positionz}
        position-y={positiony}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials["Wolf3D_Eye.004"]}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials["Wolf3D_Eye.004"]}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials["Wolf3D_Body.004"]}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Glasses"
            geometry={nodes.Wolf3D_Glasses.geometry}
            material={materials["Wolf3D_Glasses.004"]}
            skeleton={nodes.Wolf3D_Glasses.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials["Wolf3D_Hair.004"]}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials["Wolf3D_Skin.004"]}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials["Wolf3D_Outfit_Bottom.004"]}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials["Wolf3D_Outfit_Footwear.004"]}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials["Wolf3D_Outfit_Top.004"]}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials["Wolf3D_Teeth.004"]}
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

useGLTF.preload("/assets/models/Esposo/EsposoAnimations.glb");

export default Esposo;
