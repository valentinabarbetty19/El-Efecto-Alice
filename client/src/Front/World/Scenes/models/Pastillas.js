import React, { useRef, useState, useContext } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../../../context/AuthContext";
import { serviceLogin } from "../../../../Services/serviceLogin";
export function Pastillas(props) {
  const { nodes, materials } = useGLTF("/assets/models/Pastillas/pills.glb");
  const navigate = useNavigate();
  const { setId, setId2, id, emailUser, id2 } = useContext(authContext);

  const [hoveredRed, setHoveredRed] = useState(false);
  const [hoveredBlue, setHoveredBlue] = useState(false);

  const pillBlueRef = useRef();
  const pillRedRef = useRef();
  const ServiceLogin = new serviceLogin();

  // Creamos objetos internos para aplicar la rotación
  const pillBlueRotationRef = useRef();
  const pillRedRotationRef = useRef();

  const handlePointerOverRed = () => setHoveredRed(true);
  const handlePointerOutRed = () => setHoveredRed(false);

  const handlePointerOverBlue = () => setHoveredBlue(true);
  const handlePointerOutBlue = () => setHoveredBlue(false);

  const handlePillClick = (pillType) => {

    let route;
    if (pillType === "red") {
      route = "/game/bifur1/bifur2";
    } else if (pillType === "blue") {
      route = "/game/bifur1/bifur1";
    }

    if (route) {
      navigate(route);
      setId(route)
      ServiceLogin.putUserEscenario(emailUser, route);
    }
  };

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    const swaySpeed = 3.0;

    const maxSwayAngle = 0.2;

    const swayAngle = Math.sin(time * swaySpeed) * maxSwayAngle;

    const scaleValue = 1.3 + Math.sin(time) * 0.2;

    pillRedRef.current.scale.set(scaleValue, scaleValue, scaleValue);
    pillBlueRef.current.scale.set(scaleValue, scaleValue, scaleValue);

    if (hoveredRed) {
      pillRedRotationRef.current.rotation.z = -swayAngle;
    }

    if (hoveredBlue) {
      pillBlueRotationRef.current.rotation.z = -swayAngle;
    }
  });

  return (
    <group {...props} dispose={null}>
      <group scale={1.3} position={[0, 1, -1.2]} rotation={[1, 0, 0]}>
        {/* Azul */}
        <mesh ref={pillBlueRef} castShadow receiveShadow>
          <group ref={pillBlueRotationRef}
            onClick={() => handlePillClick("blue")}>
            <mesh
              geometry={nodes["Pill4_Material_#24_0"].geometry}
              material={materials.Material_24}
              position={[-0.509, 0.3, 0.173]}
              rotation={[-Math.PI / 2, 0, 2.531]}
              onPointerOver={handlePointerOverBlue}
              onPointerOut={handlePointerOutBlue}
            />
          </group>
        </mesh>

        {/* Roja */}
        <mesh ref={pillRedRef} castShadow receiveShadow>
          <group ref={pillRedRotationRef}
            onClick={() => handlePillClick("red")}>
            <mesh
              geometry={nodes.Pill3_Pill3_0.geometry}
              material={materials.Pill3}
              position={[0.509, 0, -0.173]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 3]}
              onPointerOver={handlePointerOverRed}
              onPointerOut={handlePointerOutRed}
            />
          </group>
        </mesh>
      </group>
    </group>
  );
}

export default Pastillas;
useGLTF.preload("/assets/models/Pastillas/pills.glb");
