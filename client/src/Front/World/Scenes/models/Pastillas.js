
import React, { useRef, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Pastillas (props) {
  const { nodes, materials } = useGLTF("/assets/models/Pastillas/pills.glb");

  const [hoveredRed, setHoveredRed] = useState(false);
  const [hoveredBlue, setHoveredBlue] = useState(false);
  const [activeBlue, setActiveBlue] = useState(false)
  const [activeRed, setActiveRed] = useState(false)
  const pillBlueRef = useRef();
  const pillRedRef = useRef();

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    // Animación de escala para las pastillas
    const scaleValue = 1.3 + Math.sin(time) * 0.2; 

    pillRedRef.current.scale.set(scaleValue, scaleValue, scaleValue);
    pillBlueRef.current.scale.set(scaleValue, scaleValue, scaleValue);
  });


  return (
    <group {...props} dispose={null}>
      {/* <Html>
          <input type="text" name="pills" />
      </Html> */}
      <group scale={1.3}
       position={[0, 1, -1.2]} 
       rotation={[1, 0, 0]} 
      //  onPointerOver={() => {console.log("Mouse sobre la pastilla");setHoveredRed(true)}}
       >

        {/* Azul */}
        <mesh ref={pillBlueRef}
          castShadow
          receiveShadow
          geometry={nodes["Pill4_Material_#24_0"].geometry}
          material={materials.Material_24}
          position={[-0.509, 0.3, 0.173]}
          rotation={[-Math.PI / 2, 0, 2.531]}
          onClick={() => console.log("Ppill azul")}
          onPointerOver={() => setHoveredBlue(true)}
          onPointerOut={() => setHoveredBlue(false)}
          cursor={hoveredBlue ? "pointer" : "auto"}
        />

        {/* Roja */}
        <mesh ref={pillRedRef}
          castShadow
          receiveShadow
          geometry={nodes.Pill3_Pill3_0.geometry}
          material={materials.Pill3}
          position={[0.509, 0, -0.173]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 3]}
          onClick={() => setActiveRed(activeRed)}
          onPointerOver={() => setHoveredRed(true)}
          onPointerOut={() => setHoveredRed(false)}
          cursor={hoveredRed ? "pointer" : "auto"}
        />
      </group>
    </group>
  );
}
export default Pastillas;
useGLTF.preload("/assets/models/Pastillas/pills.glb");