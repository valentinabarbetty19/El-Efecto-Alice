import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Brazalete(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/assets/models/Brazalete/brace_let.glb");
  useFrame(() => {
    if((props.id_pos === 2) || (props.id_pos === 11)){
    groupRef.current.rotation.y += 0.01;
    }
  });

  const [rotationx, setRotationx] = useState(0);
  const [rotationz, setRotationz] = useState(0);
  const [rotationy, setRotationy] = useState(0);
  const [positionx, setPositionX] = useState(0);
  const [positiony, setPositionY] = useState(0);
  const [positionz, setPositionZ] = useState(0);

  useEffect(() => {

    if((props.id_pos === 2)){
      setRotationy(Math.PI)
      setRotationx(Math.PI/2.5)
    } 
    if((props.id_pos === 7)){
      setPositionX(-2.4)
      setPositionY(-1)
      setPositionZ(-10)
      setRotationy(Math.PI)
      setRotationx(Math.PI/2.5)
    } 
    if((props.id_pos === 11)){
      setPositionX(-2.4)
      setPositionY(-0.7)
      setPositionZ(-10)
      setRotationy(Math.PI)
      setRotationx(Math.PI/2.5)
    } 
  }, [props.id_pos]);

  return (
    <group 
    // rotation-x={rotationx}
    rotation-z={rotationz}
    rotation-y={rotationy}
    position-x={positionx}
    position-z={positionz}
    position-y={positiony}
    ref={groupRef} {...props} 
    dispose={null} scale={4} 
    rotation-x={Math.PI/2.5}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials["Material.001"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/Brazalete/brace_let.glb");
export default Brazalete;
