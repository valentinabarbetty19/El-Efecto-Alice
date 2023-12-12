import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Effects } from "@react-three/drei";
import { SepiaShader } from "three/examples/jsm/shaders/SepiaShader";
import { EffectComposer, RenderPass, ShaderPass } from "postprocessing";
import * as THREE from "three";
import { usePostprocessing } from "@react-three/postprocessing";

function SepiaEffect() {
//   const { scene, gl, size, camera } = useThree();
//   const composer = useRef();

//   useEffect(() => {
//     composer.current = new EffectComposer(gl);
//     const renderPass = new RenderPass(scene, camera);
//     composer.current.addPass(renderPass);

//     // Grayscale shader
//     const blackAndWhiteShader = new ShaderPass({
//       fragmentShader: `
//           uniform sampler2D tDiffuse;
//           varying vec2 vUv;
//           void main() {
//             vec4 color = texture2D(tDiffuse, vUv);
//             float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
//             gl_FragColor = vec4(vec3(gray), 1.0);
//           }
//         `,
//     });
//     composer.current.addPass(blackAndWhiteShader);

//     return () => {
//       composer.current = null;
//     };
//   }, [scene, gl, camera]);

//   usePostprocessing(composer);

  return null;
 }
export default SepiaEffect;
