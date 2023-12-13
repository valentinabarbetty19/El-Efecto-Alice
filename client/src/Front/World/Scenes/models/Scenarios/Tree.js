import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils } from "three";

export function Tree(props) {
  const { nodes, materials } = useGLTF("/assets/models/Scenarios/park_bench.glb");
  const [rotationx, setRotationx] = useState(0);
  const [rotationz, setRotationz] = useState(0);
  const [rotationy, setRotationy] = useState(0);
  const [positionx, setPositionX] = useState(0);
  const [positiony, setPositionY] = useState(0);
  const [positionz, setPositionZ] = useState(0);
  const { camera } = useThree();

  // useFrame(() => {
    
  //   if (props.id_pos === 10){
  //     camera.rotation.x = MathUtils.lerp(camera.rotation.x, 1.2, 0.1);
  //   }    
  // });

  useEffect(() => {

    if((props.id_pos === 8)){

      setPositionZ(-22)
      setPositionX(-12)
      setPositionY(0.5)
      // setRotationy(Math.PI / 4)
      // setRotationz(-Math.PI/900)
      // setRotationx(Math.PI / 10)

    }
    if((props.id_pos === 10)){

      // setPositionZ(-22)
      // setPositionX(-12)
      setPositionY(-1)
      setRotationy(Math.PI / 2)
      // setRotationz(-Math.PI/900)
      // setRotationx(Math.PI / 10)

    }
  }, [props.id_pos]);

  return (
    <group {...props} dispose={null} 
    rotation-x={rotationx}
    rotation-z={rotationz}
    rotation-y={rotationy}
    position-x={positionx}
    position-z={positionz}
    position-y={positiony}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.006} >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Chair_19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Chair_Poster}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Ground1}
          roughness={0}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/Scenarios/park_bench.glb");
export default Tree;