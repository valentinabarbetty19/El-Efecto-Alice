import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";

export function Arrow(props) {
  const { nodes, materials } = useGLTF("/assets/models/Scenarios/arrow.glb");
  const [time, setTime] = useState(0);
  const [positionx, setPositionX] = useState(0);
  const [positiony, setPositionY] = useState(0);
  const [positionz, setPositionZ] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (props.id_pos === 54) {
      // Ajusta la posición inicial de la flecha
      setPositionX(50);         
      setPositionY(39);      //abajo
      setPositionZ(-100); //izquierda
    }

    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 0.01); // Ajusta la velocidad de la animación ajustando este valor
    }, 5); // Ajusta la frecuencia de actualización de la animación

    return () => clearInterval(intervalId);
  }, []); // Sin dependencias para que el useEffect solo se ejecute una vez

  // Conserva la animación original en los ejes X y Z
  const animatedPositionX = Math.sin(time) * -1;
  const animatedPositionZ = Math.cos(time) * -1;

  return (
    <group
      position={[positionx + animatedPositionX, positiony, positionz + animatedPositionZ]}
      {...props}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.arrow}
      />
    </group>
  );
}

export default Arrow;
useGLTF.preload("/assets/models/Scenarios/arrow.glb");
