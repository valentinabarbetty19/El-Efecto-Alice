/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function AliceHoodie2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/Alice/AliceHoodie2/AliceHoodieAnimations.glb"
  );
  const [rotationx, setRotationx] = useState(0);
  const [rotationz, setRotationz] = useState(0);
  const [rotationy, setRotationy] = useState(0);
  const [positionx, setPositionX] = useState(0);
  const [positiony, setPositionY] = useState(0);
  const [positionz, setPositionZ] = useState(0);
  useEffect(() => {
    for (const key in actions) {
      actions[key].stop();
    }
    if((props.animation === 3) || (props.animation === 4)){
      setPositionZ(-1.8)
      setPositionX(1)
      setPositionY(-3)
      setRotationy( Math.PI / 2 )

      console.log(animations)
      
      const action = actions["SittingCrying"];
     action.play();
    }

    if((props.animation === 5)){
      setPositionZ(-1.8)
      setPositionX(1)
      setPositionY(-3)
      setRotationy( Math.PI / 2 )

      console.log(animations)
      
      const action = actions["LookAround"];
     action.play();
    }

    if((props.animation === 6)){
      setPositionZ(-8)
      setPositionX(1)
      setPositionY(-3)
      setRotationy( Math.PI / 30 )
      
      const action = actions["SittingCrying"];
     action.play();
    }

    if((props.animation === 7)){
      setPositionZ(-8)
      setPositionX(1)
      setPositionY(-3)
      setRotationy( Math.PI / 30 )
      
      const action = actions["SittingCrying"];
     action.play();
    }

    if((props.animation === 68) || (props.animation === 70) || (props.animation === 71) ){
      setPositionZ(0)
      setPositionX(-3)
      setPositionY(-5)
      setRotationy( Math.PI / 2)
      
      const action = actions["Idle"];
     action.play();
    }
    if(props.animation === 69){
      setPositionZ(0)
      setPositionX(-3)
      setPositionY(-5)
      setRotationy( Math.PI / 2)
      
      const action = actions["Talking"];
     action.play();
    }
    if(props.animation === 72){
      setPositionZ(0)
      setPositionX(-3)
      setPositionY(-5)
      setRotationy( Math.PI * 2.2)
      
      const action = actions["Asking"];
     action.play();
    }
    if(props.animation === 73){
      setPositionZ(0)
      setPositionX(-4)
      setPositionY(-5)
      setRotationy( Math.PI * 2.2)
      
      const action = actions["LookAround"];
     action.play();
    }
  }, [props.animation]);
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null} rotation-x={rotationx}
    rotation-z={rotationz}
    rotation-y={rotationy}
    position-x={positionx}
    position-z={positionz}
    position-y={positiony} scale={4}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials["Wolf3D_Eye.014"]}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials["Wolf3D_Eye.014"]}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials["Wolf3D_Body.014"]}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Glasses"
            geometry={nodes.Wolf3D_Glasses.geometry}
            material={materials["Wolf3D_Glasses.014"]}
            skeleton={nodes.Wolf3D_Glasses.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials["Wolf3D_Hair.014"]}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials["Wolf3D_Skin.014"]}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials["Wolf3D_Outfit_Bottom.014"]}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials["Wolf3D_Outfit_Footwear.014"]}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials["Wolf3D_Outfit_Top.014"]}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials["Wolf3D_Teeth.014"]}
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

useGLTF.preload("/assets/models/Alice/AliceHoodie2/AliceHoodieAnimations.glb");
export default AliceHoodie2;
