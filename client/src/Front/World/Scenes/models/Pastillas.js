import React, { useRef, useMemo, useContext, createContext } from "react";
import { useGLTF, Merged } from "@react-three/drei";

const context = createContext();
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF("/assets/models/pills.glb");
  const instances = useMemo(
    () => ({
      PillPill: nodes.Pill3_Pill3_0,
      PillMaterial: nodes["Pill4_Material_#24_0"],
    }),
    [nodes]
  );
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => (
        <context.Provider value={instances} children={children} />
      )}
    </Merged>
  );
}

export function Model(props) {
  const instances = useContext(context);
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="57467a747b6b48a6b6ab702891d1a315fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.025}
          >
            <group name="RootNode">
              <group
                name="Pill3"
                position={[0.209, 0, -0.173]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 3]}
              >
                <instances.PillPill name="Pill3_Pill3_0" />
              </group>
              <group
                name="Pill4"
                position={[-0.209, 0, 0.173]}
                rotation={[-Math.PI / 2, 0, 2.531]}
              >
                <instances.PillMaterial name="Pill4_Material_#24_0" />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/pills.glb");