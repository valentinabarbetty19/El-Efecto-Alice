import React, { useRef, useEffect, useState } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";

export function Alice(props) {
  const { nodes, materials } = useGLTF("/assets/models/Alice/Alice.glb");
  const aliceRef = useRef();
  const [keyState, setKeyState] = useState({
    ArrowLeft: false,
    ArrowRight: false,
  });
  const [rotation, setRotation] = useState(0)

  const { animations: walkingAnimation } = useFBX(
    "/assets/models/Alice/Animations/Walking.fbx"
  );

  walkingAnimation[0].name = "Walking";

  const { actions } = useAnimations(walkingAnimation, aliceRef);

  

  useEffect(() => {
    // Inicializa la posición de Alice
    if (props.animation === 1) {
      aliceRef.current.position.set(0, -5, 0);
    }
  }, []);
  console.log(props.animation);
  useEffect(() => {
    if (props.animation === 1) {
      const handleKeyDown = (event) => {
        const speed = 0.1;

        if (event.key === "ArrowLeft") {
          aliceRef.current.position.x -= speed;
          setRotation(- Math.PI / 2)
          actions["Walking"].play();
        } else if (event.key === "ArrowRight") {
          aliceRef.current.position.x += speed;
          setRotation(- Math.PI / 2)
          actions["Walking"].play();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [props.animation])
  return (
    <group ref={aliceRef} {...props} dispose={null} scale={4} position-y={-5}>
      <group rotation-x={rotation}>
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
