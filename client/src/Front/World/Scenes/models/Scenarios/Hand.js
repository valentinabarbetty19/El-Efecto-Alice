import { useGLTF } from "@react-three/drei";

export function Hand(props) {
  const { nodes, materials } = useGLTF("/assets/models/Scenarios/hand.glb");
  return (
    <group {...props} dispose={null}>
      <group
        scale={0.69}
        // position={[1.546, 1.244, -0.719]}
        // rotation={[3.125, -0.552, 9.818]}
        // position={[0.946, 1.344, -1.619]}
        // rotation={[3.125, -0.552, 9.818]}
        position={[2.946, 0.644, 0.319]}
        rotation={[3.775, 0.572, 4.018]}
        
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Material_0}
        />
      </group>
    </group>
  );
}

export default Hand;
useGLTF.preload("/assets/models/Scenarios/hand.glb");
