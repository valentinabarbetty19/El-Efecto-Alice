import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Brazalete(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/assets/models/Brazalete/brace_let.glb");
  useFrame(() => {
    // Rotate the group on the y-axis (you can adjust the rotation speed by changing the second parameter)
    //groupRef.current.rotation.y += 0.01;
    groupRef.current.rotation.y += 0.01;
  });
  return (
    <group ref={groupRef} {...props} dispose={null} scale={5} rotation-x={Math.PI/2.5}>
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
