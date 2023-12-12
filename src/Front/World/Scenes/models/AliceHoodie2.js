/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";

export function AliceHoodie2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/Alice/AliceHoodie2/AliceHoodieNewAnimations.glb"
  );
  const [rotationx, setRotationx] = useState(0);
  const [rotationz, setRotationz] = useState(0);
  const [rotationy, setRotationy] = useState(0);
  const [positionx, setPositionX] = useState(0);
  const [positiony, setPositionY] = useState(0);
  const [positionz, setPositionZ] = useState(0);
  const [scale, setScale] = useState(0);
  const navigate = useNavigate();
  const [izqWalk, setIzqWalk] = useState(false);
  const [derWalk, setDerWalk] = useState(false);

  useEffect(() => {
    
    console.log(actions)
    for (const key in actions) {
      actions[key].fadeOut(0.5);
    }
    if((props.animation === 3)){
      setPositionZ(-1.8)
      setPositionX(1)
      setPositionY(-3)
      setRotationy( Math.PI / 2 )

      
      const action = actions["SittingCrying"];
     action.reset()
     .setEffectiveTimeScale( 1 )
     .setEffectiveWeight( 1 )
     .fadeIn(0.01)
     .play();
    }
    if((props.animation === 4)){
      setPositionZ(-1.8)
      setPositionX(-1)
      setPositionY(-3)
      setRotationy( Math.PI / 8999 )
      
      const action = actions["SittingCrying"];
     action.reset()
     .setEffectiveTimeScale( 1 )
     .setEffectiveWeight( 1 )
     .fadeIn(2 )
     .play();
    }
    if((props.animation === 5)){
      // setPositionZ(-1.8)
      // setPositionX(1)
      // setPositionY(-3)
      // setRotationy( Math.PI / 2 )

      setPositionZ(-10)
      setPositionX(1)
      setPositionY(-3)
      setRotationy( Math.PI / 8999 )
      // setRotationx( Math.PI / 2 )
      console.log("valentina es muy gei")
      
      const action = actions["StandingScared"];
      action.reset()
      .setEffectiveTimeScale( 1 )
      .setEffectiveWeight( 1 )
      .fadeIn(0.01)
      .play();
    }
    if((props.animation === 6)){
      setPositionZ(-8)
      setPositionX(1)
      setPositionY(-3)
      setRotationy( Math.PI / 30 )
      
      const action = actions["SittingCrying"];
     action.reset()
     .setEffectiveTimeScale( 1 )
     .setEffectiveWeight( 1 )
     .fadeIn(0.01)
     .play();
    }
    if((props.animation === 7)){
      setPositionZ(-8)
      setPositionX(1)
      setPositionY(-3)
      setRotationy( Math.PI / 30 )
      
      const action = actions["SittingCrying"];
     action.reset()
     .setEffectiveTimeScale( 1 )
     .setEffectiveWeight( 1 )
     .fadeIn(0.02)
     .play();
    }
    if((props.animation === 8)){
      setPositionZ(-8)
      setPositionX(-7)
      setPositionY(-3)
      setRotationy( Math.PI /1 )
      console.log(actions)
      
      const action = actions["Looking"];
      action.reset()
      .setEffectiveTimeScale( 1 )
      .setEffectiveWeight( 1 )
      .fadeIn(0.01)
      .play();
    } 
    if((props.animation === 10)){
      setScale(1.2)
      setPositionZ(1)
      setPositionX(-2)
      setPositionY(-1)
      setRotationy( Math.PI / 8 )

      setScale(1.2)
      
      const action = actions["Agony"];
      action.reset()
      .setEffectiveTimeScale( 1 )
      .setEffectiveWeight( 1 )
      .fadeIn(0.01)
      .play();
    } else {
      setScale(4)
    }
    if((props.animation === 11)){
      setPositionZ(-1)
      setPositionX(8)
      setPositionY(-3.5)
      setRotationy( Math.PI / -2 )

      console.log(animations)
      
      const action = actions["SitRubbingArm"];
      action.reset()
      .setEffectiveTimeScale( 1 )
      .setEffectiveWeight( 1 )
      .fadeIn(0.01)
      .play();
    }

    if((props.animation === 14)){
      setPositionZ(-1)
      setPositionX(1)
      setPositionY(-3.5)
      setRotationy( Math.PI / 8999 )

      console.log(animations)
      
      const action = actions["SitRubbingArm"];
      action.reset()
      .setEffectiveTimeScale( 1 )
      .setEffectiveWeight( 1 )
      .fadeIn(0.01)
      .play();
    }

    if( (props.animation === 24) || (props.animation === 68) || (props.animation === 70) || (props.animation === 71) || (props.animation === 16) || (props.animation === 18) || (props.animation === 20) ){
    
      setPositionZ(0)
      setPositionX(-3)
      setPositionY(-5)
      setRotationy( Math.PI / 2)
      
      const action = actions["Idle"];
     action.reset()
     .setEffectiveTimeScale( 1 )
     .setEffectiveWeight( 1 )
     .fadeIn(2)
     .play();
    }
    if((props.animation === 21) || (props.animation === 25) || (props.animation === 23) || (props.animation === 17)  || (props.animation === 19) ){
      setPositionZ(0)
      setPositionX(-3)
      setPositionY(-5)
      setRotationy( Math.PI / 2)
      
      const action = actions["Talking"];
     action.reset()
     .setEffectiveTimeScale( 1 )
     .setEffectiveWeight( 1 )
     .fadeIn(2 )
     .play();;
    }
   
    if((props.animation === 26)){
      setPositionZ(-3)
      setPositionX(3)
      setPositionY(-2)
      setRotationy( - Math.PI /2)
     actions["SittingTalking"].reset()
     .setEffectiveTimeScale( 1 )
     .setEffectiveWeight( 1 )
     .fadeIn( 0.01 )
     .play();
    }
    if((props.animation === 27)){
      setPositionZ(-3)
      setPositionX(3)
      setPositionY(-2)
      setRotationy( - Math.PI /2)
     actions["Sitting"].reset()
     .setEffectiveTimeScale( 1 )
     .setEffectiveWeight( 1 )
     .fadeIn( 0.01 )
     .play();
    }
    if((props.animation === 38)){
      setPositionZ(3)
      setPositionX(0)
      setPositionY(-1.5)
      setScale(1.2)
      
     actions["Greet"].reset()
     .setEffectiveTimeScale( 1 )
     .setEffectiveWeight( 1 )
     .fadeIn( 0.5 )
     .play();
    } else {
      setScale(4)
    }
   
    
  }, [props.animation]);

  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null} rotation-x={rotationx}
    rotation-z={rotationz}
    rotation-y={rotationy}
    position-x={positionx}
    position-z={positionz}
    position-y={positiony} 
    scale={scale}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials["Wolf3D_Eye.014"]}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials["Wolf3D_Eye.014"]}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials["Wolf3D_Body.014"]}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Glasses"
            geometry={nodes.Wolf3D_Glasses.geometry}
            material={materials["Wolf3D_Glasses.014"]}
            skeleton={nodes.Wolf3D_Glasses.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials["Wolf3D_Hair.014"]}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials["Wolf3D_Skin.014"]}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials["Wolf3D_Outfit_Bottom.014"]}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials["Wolf3D_Outfit_Footwear.014"]}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials["Wolf3D_Outfit_Top.014"]}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials["Wolf3D_Teeth.014"]}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
      {props.children}
    </group>
  );
}

useGLTF.preload("/assets/models/Alice/AliceHoodie2/AliceHoodieNewAnimations.glb");
export default AliceHoodie2;

