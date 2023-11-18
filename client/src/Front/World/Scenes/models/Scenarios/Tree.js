import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Tree(props) {
  const { nodes, materials } = useGLTF("/assets/models/Scenarios/park_bench.glb");
  return (
    <group {...props} dispose={null} rotation-x={Math.PI / 10} rotation-y={Math.PI / 4}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.006}>
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
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/Scenarios/park_bench.glb");
export default Tree;