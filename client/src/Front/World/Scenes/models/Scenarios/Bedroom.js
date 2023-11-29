/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: riowahab (https://sketchfab.com/riowahab)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bedroom-test-941493a3c8554fa7a61a74ccee67cbab
Title: Bedroom Test
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bedroom(props) {
  const { nodes, materials } = useGLTF("/assets/models/Scenarios/bedroom_test.glb");
  return (
    <group {...props} dispose={null} scale={0.045} rotation-x={Math.PI /8} rotation-y={Math.PI/10} rotation-z={-Math.PI/20} position-y={-3} position-x={-3} position-z={-10}>
      <group
        position={[34.981, 138.514, -71.428]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["curtain_Material_#281_0"].geometry}
          material={materials.Material_281}
          position={[-34.981, -73.148, -138.514]}
        />
      </group>
      <group position={[-146.434, 26.983, 217.871]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["side_table_Material_#285_0"].geometry}
          material={materials.Material_285}
          position={[91.852, 12.291, 95.456]}
        />
      </group>
      <group position={[-146.434, 26.983, -18.002]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["side_table001_Material_#286_0"].geometry}
          material={materials.Material_286}
          position={[91.852, 12.291, 95.456]}
        />
      </group>
      <group
        position={[-68.561, 31.236, 102.078]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bed_sheet_Material_#279_0"].geometry}
          material={materials.Material_279}
          position={[0.34, -7.181, -31.236]}
        />
      </group>
      <group
        position={[-70.844, 7.563, 101.802]}
        rotation={[-Math.PI / 2, 0, -1.571]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bed_frame_Material_#278_0"].geometry}
          material={materials.Material_278}
          position={[-10.037, -86.072, 3.88]}
        />
      </group>
      <group
        position={[-139.819, 55.296, 137.448]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["pillow_01_Material_#288_0"].geometry}
          material={materials.Material_288}
          position={[35.71, -78.439, -55.296]}
        />
      </group>
      <group
        position={[-139.819, 55.296, 65.717]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["pillow_02_Material_#289_0"].geometry}
          material={materials.Material_289}
          position={[35.71, -78.439, -55.296]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TY_GLASS_glass_0.geometry}
        material={materials.glass}
        position={[190.849, 0, 195.417]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TY_FRAMES_Material_#315_0"].geometry}
        material={materials.Material_315}
        position={[190.849, 0, 195.417]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Object002_Material_#273_0"].geometry}
        material={materials.Material_273}
        position={[190.849, 0, 195.417]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Plane001_Material_#287_0"].geometry}
        material={materials.Material_287}
        position={[-26.978, 278, 134.185]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["wall_Material_#277_0"].geometry}
        material={materials.Material_277}
        position={[190.849, 0, 195.417]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Box005_Material_#274_0"].geometry}
        material={materials.Material_274}
        position={[138.653, 122.94, 231.569]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["light_Material_#282_0"].geometry}
        material={materials.Material_282}
        position={[-147.093, 53.889, 217.71]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["light001_Material_#284_0"].geometry}
        material={materials.Material_284}
        position={[-147.093, 53.889, -18.163]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Box006_Material_#276_0"].geometry}
        material={materials.Material_276}
        position={[-23.456, 0, 325.958]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["blanket_Material_#280_0"].geometry}
        material={materials.Material_280}
        position={[-61.38, 0, 101.738]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["floor_Material_#314_0"].geometry}
        material={materials.Material_314}
        position={[189.865, 0, 195.493]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object003_metal_chrome_0.geometry}
        material={materials.metal_chrome}
        position={[138.653, 122.94, 231.569]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object004_metal_chrome_0.geometry}
        material={materials.metal_chrome}
        position={[-23.456, 0, 325.958]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object005_metal_chrome_0.geometry}
        material={materials.metal_chrome}
        position={[-147.093, 53.889, 217.71]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object006_metal_chrome_0.geometry}
        material={materials.metal_chrome}
        position={[-147.093, 53.889, -18.163]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.9}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/Scenarios/bedroom_test.glb");
export default Bedroom;
