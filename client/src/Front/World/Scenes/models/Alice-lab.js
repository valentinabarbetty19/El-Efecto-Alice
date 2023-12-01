import React, { useRef, useEffect, useState } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { Navigate, useNavigate } from "react-router-dom";

export function AliceLab(props) {
  const { nodes, materials } = useGLTF("/assets/models/Alice/Alice.glb");
  const { animations: cardsAnimation } = useFBX(
    "/assets/models/Alice/Animations/Cards.fbx"
  );

  const aliceRef = useRef();

  const [rotationx, setRotationx] = useState(props.rotationx);
  const [rotationz, setRotationz] = useState(props.rotationz);
  const [rotationy, setRotationy] = useState(props.rotationy);
  const [positionx, setPositionx] = useState(props.positionx);
  const [positionz, setPositionz] = useState(props.positionz);
  const [positiony, setPositiony] = useState(props.positiony);

  cardsAnimation[0].name = "Cards";
  const { actions } = useAnimations([cardsAnimation[0]], aliceRef);
  useEffect(() => {
    if (props.animation === 2) {
      actions["Cards"].play();
    }
  }, []);

  return (
    <group
      ref={aliceRef}
      {...props}
      dispose={null}
      scale={3}
      position-x={positionx}
      position-y={-5}
      {...props}
    >
      <group
        rotation-x={rotationx}
        rotation-z={rotationz}
        rotation-y={rotationy}
        position-x={positionx}
        position-z={positionz}
        position-y={positiony}
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
export default AliceLab;
