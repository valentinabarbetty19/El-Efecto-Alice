import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Jonas(props) {
  const { nodes, materials } = useGLTF("/assets/models/Hijo/kid_boy.glb");
  return (
    <group {...props} dispose={null} position-y={0} position-x={0}
    scale={10}>
      <group scale={0.01}>
        <group
          position={[-617.259, 104.176, 105.331]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={[6.72, 7.493, 7.06]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G��z001_Material014_0"].geometry}
            material={materials["Material.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G��z001_Material012_0"].geometry}
            material={materials["Material.012"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G��z001_Material013_0"].geometry}
            material={materials["Material.013"]}
          />
        </group>
        <group
          position={[-630.223, 121.42, 77.894]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[37.663, 36.157, 34.414]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["SA��001_Material_0"].geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["SA��001_Material_0_1"].geometry}
            material={materials.Material}
          />
        </group>
        <group
          position={[-631.04, 87.056, 114.815]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[39.421, 39.421, 37.52]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Kulak001_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Kulak001_Material001_0_1.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group
          position={[-534.88, -0.715, 83.832]}
          rotation={[-Math.PI / 2, -0.846, Math.PI / 2]}
          scale={11.082}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Material005_0.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Material003_0.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Material002_0.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Material004_0.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group
          position={[-616.482, -77.236, 88.663]}
          rotation={[1.626, 0, 0]}
          scale={[-11.62, 11.78, 11.063]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_Material005_0.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_Material009_0.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_Material011_0.geometry}
            material={materials["Material.011"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_Material010_0.geometry}
            material={materials["Material.010"]}
          />
        </group>
        <group
          position={[-615.725, -149.891, 81.694]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[-5.556, 5.712, 5.712]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_Material007_0.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_Material008_0.geometry}
            material={materials["Material.008"]}
          />
        </group>
        <group
          position={[-642.434, -149.891, 81.694]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[-5.556, 5.712, 5.712]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_Material007_0.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_Material008_0.geometry}
            material={materials["Material.008"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Ka��_Sa��_0"].geometry}
          material={materials.material}
          position={[-616.092, 113.647, 111.15]}
          rotation={[-Math.PI / 2, 0.037, 0]}
          scale={[39.159, 36.367, 34.467]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Kafa001_Face_0.geometry}
          material={materials.Face}
          position={[-631.04, 87.056, 114.815]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[39.421, 39.421, 37.52]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Material006_0.geometry}
          material={materials["Material.006"]}
          position={[-630.006, -57.973, 89.896]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[28.059, 28.059, 26.706]}
        />
      </group>
    </group>
  );
}
export default Jonas;
useGLTF.preload("/assets/models/Hijo/kid_boy.glb");