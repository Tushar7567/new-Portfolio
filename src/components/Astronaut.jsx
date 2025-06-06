/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: wallmasterr (https://sketchfab.com/wallmasterr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/tenhun-falling-spaceman-fanart-9fd80b6a259f41fd99e6f56eee686dc5
Title: Tenhun Falling spaceman (FanArt)
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useMotionValue, useSpring } from "framer-motion";
import { useFrame } from "@react-three/fiber";

export function Astronaut(props) {
  const group = useRef();
  const { animations, scene } = useGLTF(
    "/models/pulse_blade_pilot_fanart.glb"
  );
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 30 });
  useEffect(() => {
    ySpring.set(-1);
  }, [ySpring]);
  useFrame(() => {
    group.current.rotation.y += 0.003; // rotate speed
  });
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0, Math.PI, 0]}
      scale={props.scale || 0.3}
      position={props.position || [2, -1.6, 0]}
    >
      <primitive
        object={scene}
      />
    </group>
  );
}

useGLTF.preload("/models/pulse_blade_pilot_fanart.glb");
