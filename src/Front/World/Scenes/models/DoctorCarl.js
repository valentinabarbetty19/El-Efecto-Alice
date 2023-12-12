/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function DoctorCarl(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/assets/models/DoctorCarl/DoctorCarlAnimations.glb");
  const { actions } = useAnimations(animations, group);
  const [rotationx, setRotationx] = useState(0);
  const [rotationz, setRotationz] = useState(0);
  const [rotationy, setRotationy] = useState(0);
  const [positionx, setPositionX] = useState(0);
  const [positiony, setPositionY] = useState(0);
  const [positionz, setPositionZ] = useState(0);
  const [scale, setScale] = useState(0);
  useEffect(() => {
    for (const key in actions) {
      actions[key].fadeOut(0.5);
    }
    if((props.animation === 26)){
      setPositionZ(-3)
      setPositionX(-3)
      setPositionY(-2)
      setRotationy( Math.PI / 2 )
      
      const action = actions["Idle"];
     action.reset()
     .setEffectiveTimeScale( 1 )
     .setEffectiveWeight( 1 )
     .fadeIn( 0.5 )
     .play();
    }
    if((props.animation === 39)){
      setPositionZ(-5);
      setPositionX(2);
      setPositionY(-8);
      setRotationy( Math.PI / 2.8 )
      setScale(4.8)
      const action = actions["Idle"];
     action.reset()
     .setEffectiveTimeScale( 1 )
     .setEffectiveWeight( 1 )
     .fadeIn( 0.5 )
     .play();
    } else  if((props.animation === 40)){
      setPositionZ(-5);
      setPositionX(2);
      setPositionY(-8);
      setRotationy( Math.PI / 2.8 )
      setScale(4.8)
      const action = actions["Talking"];
     action.reset()
     .setEffectiveTimeScale( 1 )
     .setEffectiveWeight( 1 )
     .fadeIn( 0.5 )
     .play();
    } else if((props.animation === 42)){
      setPositionZ(-5);
      setPositionX(2);
      setPositionY(-8);
      setRotationy( Math.PI / 2 )
      setScale(4.8)
      const action = actions["Laughing"];
     action.reset()
     .setEffectiveTimeScale( 1 )
     .setEffectiveWeight( 1 )
     .fadeIn( 0.5 )
     .play();
    }else {
      setScale(4)
    }
    if((props.animation === 27)){
      setPositionZ(-3)
      setPositionX(-3)
      setPositionY(-2)
      setRotationy( Math.PI / 2 )
      
      const action = actions["Talking"];
     action.reset()
     .setEffectiveTimeScale( 1 )
     .setEffectiveWeight( 1 )
     .fadeIn( 0.5 )
     .play();
    } 
    
  }, [props.animation]);
 

  return (
    <group ref={group} {...props} dispose={null} scale={scale} rotation-x={rotationx}
    rotation-z={rotationz}
    rotation-y={rotationy}
    position-x={positionx}
    position-z={positionz}
    position-y={positiony} >
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials["Wolf3D_Eye.003"]}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials["Wolf3D_Eye.003"]}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials["Wolf3D_Hair.003"]}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials["Wolf3D_Skin.003"]}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials["Wolf3D_Outfit_Bottom.003"]}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials["Wolf3D_Outfit_Footwear.003"]}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials["Wolf3D_Outfit_Top.003"]}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials["Wolf3D_Teeth.003"]}
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

useGLTF.preload("/assets/models/DoctorCarl/DoctorCarlAnimations.glb");
export default DoctorCarl

