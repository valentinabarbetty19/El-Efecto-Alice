/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: sidequest (https://sketchfab.com/sidequest)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/living-room-night-custom-home-environment-761f36d81cda49e781a5b9e3616d5d47
Title: Living Room (Night) - Custom Home Environment
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils } from "three";

export function Livingroom(props) {
  const { camera } = useThree();

  const [rotationx, setRotationx] = useState(0);
  const [rotationz, setRotationz] = useState(0);
  const [rotationy, setRotationy] = useState(0);
  const [positionx, setPositionX] = useState(0);
  const [positiony, setPositionY] = useState(0);
  const [positionz, setPositionZ] = useState(0);

  useFrame(() => {
    if ((props.id_pos === 5) || (props.id_pos === 6)
  ) {
      camera.position.x = MathUtils.lerp(camera.position.x, 12, 0.1);
      camera.position.z = MathUtils.lerp(camera.position.z, 19, 0.1);
      camera.position.y = MathUtils.lerp(camera.position.y, 19, 0.1);

      camera.rotation.x = MathUtils.lerp(camera.rotation.x, 1, 0.1);
      // camera.rotation.y = MathUtils.lerp(camera.rotation.y, 12, 0.1);
      // camera.rotation.z = MathUtils.lerp(camera.rotation.z, 0, 0.1);
    }
  });

  useEffect(() => {

    if((props.id_pos === 5) || (props.id_pos === 6)){

      console.log("Bedroom")
      setPositionZ(-10)
      setPositionX(0)
      setPositionY(-3)
      setRotationy(-Math.PI/1)
      setRotationz(-Math.PI/900)
      setRotationx(Math.PI /50)
    } 
  }, [props.id_pos]);
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/assets/models/Scenarios/living-room.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group 
    {...props} 
    rotation-x={rotationx}
    rotation-z={rotationz}
    rotation-y={rotationy}
    position-x={positionx}
    position-z={positionz}
    position-y={positiony}ref={group}
    dispose={null} scale={5}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Sphere002_0"
                position={[-0.694, 0.298, -0.465]}
                rotation={[0, 1.391, 0]}
                scale={0.899}
              >
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Material_31232}
                />
              </group>
              {/* <group
                name="CoffeeTable_1"
                position={[-0.054, -0.103, -2.101]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.766, 1, 0.672]}
              >
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Material_310}
                />
              </group> */}
              <group
                name="Plane001_2"
                position={[0.233, -0.12, -0.662]}
                rotation={[-Math.PI, 0, -Math.PI]}
              >
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.plane1}
                />
              </group>
              <group
                name="Door_3"
                position={[-2.722, -0.12, 2.154]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1.181, 1, 1]}
              >
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials["14_-_Default"]}
                />
              </group>
              <group
                name="RecordPlayer_4"
                position={[2.193, 0.598, -2.098]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.513, 1.429, 0.697]}
              >
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials["2fwefq"]}
                />
              </group>
              <group
                name="Box043_5"
                position={[2.534, 0.842, -1.317]}
                rotation={[Math.PI, 0, 2.257]}
                scale={1.747}
              >
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials["02_-_Default"]}
                />
              </group>
              <group
                name="Seat_6"
                position={[0.397, 0.327, 4.009]}
                rotation={[-Math.PI, 0, -Math.PI]}
              >
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials["10_-_Default"]}
                />
              </group>
              <group
                name="Roof_7"
                position={[0.233, 3.325, -0.662]}
                rotation={[Math.PI, 0, 0]}
              >
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials["16_-_Default"]}
                />
              </group>
              <group
                name="Box077_8"
                position={[-2.691, 1.848, -1.029]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.77, 0.829, 0.77]}
              >
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials["20_-_Default"]}
                />
              </group>
              <group
                name="Lights_9"
                position={[-1.334, 3.321, -2.747]}
                rotation={[-Math.PI, 0, -Math.PI]}
              >
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.Material_31222}
                />
              </group>
              <group
                name="Box094_10"
                position={[-0.097, -0.131, -1.998]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.932, 1, 1]}
              >
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials["08_-_Default"]}
                />
              </group>
              <group
                name="Storage_11"
                position={[-2.35, 0.231, 0.387]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.839, 0.474, 1.121]}
              >
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials["12_-_Default"]}
                />
              </group>
              <group
                name="Books_12"
                position={[2.611, 0.462, 1.139]}
                rotation={[-Math.PI, -0.087, -Math.PI]}
                scale={0.912}
              >
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials.sandbag_detail2_default}
                />
              </group>
              <group
                name="Box091_13"
                position={[0.116, 2.696, -4.924]}
                rotation={[Math.PI / 2, 0, -Math.PI]}
                scale={[-0.937, 0.733, 1]}
              >
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.Material_31212}
                />
              </group>
              <group
                name="Box121_14"
                position={[-1.005, 1.792, 4.349]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1.126, 1.126, 0.941]}
              >
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials["15_-_Default"]}
                />
              </group>
              <group
                name="Plane003_15"
                position={[2.903, 1.646, -2.497]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={4.335}
              >
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials["21_-_Default"]}
                />
              </group>
              <group
                name="Walls_16"
                position={[0.233, -0.12, -0.662]}
                rotation={[-Math.PI, 0, -Math.PI]}
              >
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials.Material_31231}
                />
              </group>
              <group
                name="Curtain001_17"
                position={[-0.045, -0.064, -2.128]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[1.001, 0.991, 1.001]}
              >
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials.Material_31236}
                />
              </group>
              <group
                name="SofaFinal_18"
                position={[-0.047, -0.063, -2.099]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1.029, 1.207, 1.053]}
              >
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials.Material_31234}
                />
              </group>
              <group
                name="Rail_19"
                position={[-0.054, -0.213, -2.005]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.75, 0.777, 0.777]}
              >
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials.Material_31237}
                />
              </group>
              <group
                name="fwaf_20"
                position={[0.233, -0.12, -0.662]}
                rotation={[-Math.PI, 0, -Math.PI]}
              >
                <group name="FinalShelvesef_21" scale={[1, 1.619, 1]}>
                  <mesh
                    name="Object_45"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_45.geometry}
                    material={materials["04_-_Default"]}
                  />
                </group>
              </group>
              <group
                name="Group002_22"
                position={[0.233, -0.12, -0.662]}
                rotation={[-Math.PI, 0, -Math.PI]}
              >
                <group name="fireGlas_23" scale={[0.961, 1.01, 1.01]}>
                  <mesh
                    name="Object_48"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_48.geometry}
                    material={materials.Material_31240}
                  />
                </group>
                <group
                  name="Chimney_24"
                  rotation={[0, Math.PI / 2, 0]}
                  scale={0.762}
                >
                  <mesh
                    name="Object_50"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_50.geometry}
                    material={materials.Material_1197}
                  />
                </group>
                <group name="Fireplace_25" scale={[0.952, 1, 1]}>
                  <mesh
                    name="Object_52"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_52.geometry}
                    material={materials.fireplac}
                  />
                </group>
              </group>
              <group
                name="Decorations_26"
                position={[-0.054, -0.103, -2.101]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[0.683, 0.684, 0.684]}
              >
                <mesh
                  name="Object_54"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials.Material_31233}
                />
              </group>
              <group
                name="GLOBEY_27"
                position={[0.397, 0.327, 4.009]}
                rotation={[-Math.PI, 0, -Math.PI]}
              >
                <group
                  name="GlobeSphere_28"
                  rotation={[Math.PI / 2, 0, -Math.PI / 9]}
                  scale={0.944}
                >
                  <mesh
                    name="Object_57"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_57.geometry}
                    material={materials.Material_31243}
                  />
                </group>
                <group
                  name="GlobeBase_29"
                  position={[-2.144, 0.407, -0.064]}
                  rotation={[0, Math.PI / 9, 0]}
                  scale={1.528}
                >
                  <mesh
                    name="Object_59"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_59.geometry}
                    material={materials.Material_31244}
                  />
                </group>
                <group
                  name="plantz_30"
                  rotation={[-2.995, -0.264, -2.798]}
                  scale={0.494}
                >
                  <mesh
                    name="Object_61"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_61.geometry}
                    material={materials.Material_31245}
                  />
                </group>
              </group>
              <group
                name="Group001_31"
                position={[0.233, -0.12, -0.662]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 1.619, 1]}
              >
                <group name="Box124_32" scale={[1.046, 0.646, 1.046]}>
                  <mesh
                    name="Object_64"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_64.geometry}
                    material={materials.Material_31247}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/Scenarios/living-room.glb");
export default Livingroom