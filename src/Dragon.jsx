import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";

export default function Dragon() {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <PerspectiveCamera makeDefault position={[0, 20, 50]} fov={90} />
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
