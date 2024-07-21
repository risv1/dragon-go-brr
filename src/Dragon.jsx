import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import {
  PerspectiveCamera,
  useProgress,
  Html,
  ScrollControls,
} from "@react-three/drei";
import { Suspense } from "react";

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)}% loaded</Html>;
}

export default function Dragon() {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#000300",
      }}
    >
      <PerspectiveCamera makeDefault position={[0, 500, 1400]} fov={90} far={10000} />
      <directionalLight position={[10, 5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <ScrollControls pages={10}>
          <Model />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
