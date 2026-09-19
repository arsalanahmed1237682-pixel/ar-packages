'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function RotatingBox() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.15 + 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2.2, 2.2, 2.2]} />
        <meshStandardMaterial
          color="#BA9365"
          roughness={0.75}
        />
      </mesh>
      <mesh position={[0, 1.11, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.45, 2.22]} />
        <meshStandardMaterial color="#886036" roughness={0.6} />
      </mesh>
    </Float>
  );
}

export default function MiniCarton() {
  return (
    <div className="w-full h-full pointer-events-none opacity-40 md:opacity-75">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 5, 3]} intensity={2} color="#FFE6C7" />
        <directionalLight position={[-3, -2, -2]} intensity={0.6} color="#A67C52" />
        <RotatingBox />
      </Canvas>
    </div>
  );
}