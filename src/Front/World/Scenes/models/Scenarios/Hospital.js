import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Hospital(props) {
  const { nodes, materials } = useGLTF("/assets/models/Scenarios/updated_hospital_room.glb");
  return (
    <group {...props} dispose={null} scale={1} position-y={-2}  position-z={-13} position-x={-30} rotation-x={Math.PI /15} rotation-y={- Math.PI/2}>
      <group scale={0.01}>
        <group
          position={[255.017, 266.551, -3495.636]}
          rotation={[2.968, 1.56, -2.956]}
          scale={581.872}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse001_Scaniverse004_main003_0.geometry}
            material={materials["main.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse001_Scaniverse004_main003_0_1.geometry}
            material={materials["main.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse001_Scaniverse004_main004_0.geometry}
            material={materials["main.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse001_Scaniverse004_main005_0.geometry}
            material={materials["main.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse001_Scaniverse004_main008_0.geometry}
            material={materials["main.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse001_Scaniverse004_main007_0.geometry}
            material={materials["main.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse001_Scaniverse004_main006_0.geometry}
            material={materials["main.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse001_Scaniverse004_main015_0.geometry}
            material={materials["main.015"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse001_Scaniverse004_main011_0.geometry}
            material={materials["main.011"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse001_Scaniverse004_main031_0.geometry}
            material={materials["main.031"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse001_Scaniverse004_main027_0.geometry}
            material={materials["main.027"]}
          />
        </group>
        <group
          position={[619.488, 394.735, -4382.887]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_cabinetDoors_0.geometry}
            material={materials.cabinetDoors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_tableTop_0.geometry}
            material={materials.tableTop}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_sink_0.geometry}
            material={materials.sink}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_metal_0.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_smallDrawers_0.geometry}
            material={materials.smallDrawers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Floor_0.geometry}
            material={materials.Floor}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_wall2_0.geometry}
            material={materials.wall2}
          />
        </group>
        <group
          position={[-313.729, 855.979, -3865.164]}
          rotation={[-3.095, 1.089, 3.072]}
          scale={631.321}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse_main_0.geometry}
            material={materials.main}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse_main_0_1.geometry}
            material={materials.main}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse_main_0_2.geometry}
            material={materials.main}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse_main_0_3.geometry}
            material={materials.main}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse_main_0_4.geometry}
            material={materials.main}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse_main_0_5.geometry}
            material={materials.main}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse_main_0_6.geometry}
            material={materials.main}
          />
        </group>
        <group
          position={[771.86, 1109.955, -4325.082]}
          rotation={[-Math.PI, 0.008, Math.PI / 2]}
          scale={6.304}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_metal_0.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_cabinetDoors002_0.geometry}
            material={materials["cabinetDoors.002"]}
          />
        </group>
        <group
          position={[1298.967, 717.652, -4901.589]}
          rotation={[3.14, 0, 0]}
          scale={18.635}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_metal_0.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_HospDoor_0.geometry}
            material={materials.HospDoor}
          />
        </group>
        <group
          position={[482.646, 806.117, -4577.672]}
          rotation={[0, 0.731, 0]}
          scale={795.134}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse004_leftSanitizer_0.geometry}
            material={materials.leftSanitizer}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Scaniverse004_leftSanitizer_0_1.geometry}
            material={materials.leftSanitizer}
          />
        </group>
        <group
          position={[-331.855, 910.146, -3141.748]}
          rotation={[-2.184, 0, 1.609]}
          scale={0.044}
        >
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            geometry={nodes.Object_79.geometry}
            material={materials.blackPlastic}
            skeleton={nodes.Object_79.skeleton}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_stainlessSteel_0.geometry}
          material={materials.stainlessSteel}
          position={[757.82, 646.848, -4535.62]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={21.333}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scaniverse015_thingOnWall1_0.geometry}
          material={materials.thingOnWall1}
          position={[527.549, 537.232, -3776.561]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scaniverse017_main024_0.geometry}
          material={materials["main.024"]}
          position={[509.579, 488.362, -3863.282]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_tv_0.geometry}
          material={materials.material}
          position={[-128.63, 1122.083, -2943.445]}
          rotation={[-Math.PI / 2, 0, 0.879]}
          scale={113.635}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_CEILING_0.geometry}
          material={materials.CEILING}
          position={[610.244, 1567.674, -3757.531]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scaniverse001_handsani_0.geometry}
          material={materials.handsani}
          position={[864.469, 804.806, -4583.749]}
          scale={926.339}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scaniverse003_wallplugin1_0.geometry}
          material={materials.wallplugin1}
          position={[1792.292, 360.165, -3468.334]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scaniverse016_nextToBed_0.geometry}
          material={materials.nextToBed}
          position={[112.254, 360.165, -2753.933]}
          rotation={[0, -1.541, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_Material010_0.geometry}
          material={materials["Material.010"]}
          position={[1793.765, 649.855, -4434.784]}
          rotation={[-Math.PI / 2, -1.571, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_nextToDoor1and2_0.geometry}
          material={materials.nextToDoor1and2}
          position={[1737.847, 720.066, -4305.207]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.816}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_nextToDoor1and2001_0.geometry}
          material={materials["nextToDoor1and2.001"]}
          position={[1798.544, 721.11, -4174.287]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={36.007}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_bloodPressure001_0.geometry}
          material={materials["bloodPressure.001"]}
          position={[-331.165, 833.431, -3139.463]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={40.064}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_blackPlastic_0.geometry}
          material={materials.blackPlastic}
          position={[-332.261, 845.231, -3090.74]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={14.169}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/Scenarios/updated_hospital_room.glb");
export default Hospital;


