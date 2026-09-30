'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Center } from '@react-three/drei';
import * as THREE from 'three';

function createCardboardTexture() {
  if (typeof document === 'undefined') return null;

  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#C5A070';
  ctx.fillRect(0, 0, 1024, 1024);

  for (let i = 0; i < 45000; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 1024;
    const opacity = Math.random() * 0.08;
    ctx.fillStyle = Math.random() > 0.5 ? `rgba(60, 35, 10, ${opacity})` : `rgba(255, 245, 230, ${opacity})`;
    ctx.fillRect(x, y, 2, 2);
  }

  ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
  for (let y = 0; y < 1024; y += 8) {
    ctx.fillRect(0, y, 1024, 2);
  }

  ctx.fillStyle = 'rgba(215, 175, 125, 0.9)';
  ctx.fillRect(440, 0, 144, 1024);
  ctx.fillStyle = 'rgba(160, 120, 75, 0.4)';
  ctx.strokeRect(440, 0, 144, 1024);

  const fontVariables = getComputedStyle(document.documentElement);
  const displayFont = fontVariables.getPropertyValue('--font-plus-jakarta').trim() || 'sans-serif';
  const sansFont = fontVariables.getPropertyValue('--font-inter').trim() || 'sans-serif';

  ctx.save();
  ctx.translate(512, 420);
  ctx.fillStyle = '#1A1815';
  ctx.font = `900 44px ${displayFont}`;
  ctx.textAlign = 'center';
  ctx.letterSpacing = '4px';
  ctx.fillText('AR PACKAGES', 0, 0);

  ctx.font = `bold 16px ${sansFont}`;
  ctx.fillStyle = '#3E2E1E';
  ctx.fillText('EST. 1999 • CORRUGATED CARTONS', 0, 30);

  ctx.font = 'bold 13px monospace';
  ctx.fillStyle = '#5A432D';
  ctx.fillText('ISO 9001:2015 & HALAL CERTIFIED', 0, 52);

  ctx.strokeStyle = '#1A1815';
  ctx.lineWidth = 3;
  ctx.strokeRect(-130, -70, 260, 4);
  ctx.restore();

  ctx.save();
  ctx.translate(220, 800);
  ctx.fillStyle = '#221E1A';
  ctx.font = 'bold 15px monospace';
  ctx.fillText('HANDLE WITH CARE', 0, 0);
  ctx.fillText('THIS SIDE UP  ↑ ↑', 0, 24);
  ctx.fillText('100% RECYCLABLE ♻', 0, 48);

  ctx.fillStyle = '#1A1815';
  for (let b = 0; b < 240; b += 6 + Math.floor(Math.random() * 8)) {
    const width = (b % 12 === 0) ? 4 : 2;
    ctx.fillRect(400 + b, -25, width, 55);
  }
  ctx.font = '12px monospace';
  ctx.fillText('*ARP-KHI-1999-QC*', 450, 45);
  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

function createFluteEdgeTexture() {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#B38B5B';
  ctx.fillRect(0, 0, 512, 128);

  ctx.strokeStyle = '#634423';
  ctx.lineWidth = 4;
  ctx.beginPath();
  for (let x = 0; x < 512; x++) {
    const y = 64 + Math.sin(x * 0.2) * 38;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  ctx.fillStyle = '#785025';
  ctx.fillRect(0, 0, 512, 12);
  ctx.fillRect(0, 116, 512, 12);

  return new THREE.CanvasTexture(canvas);
}

function CorrugatedCarton({ mousePos, isHovered, setIsHovered }) {
  const boxRef = useRef();
  const kraftTexture = useMemo(() => createCardboardTexture(), []);

  useFrame((state) => {
    if (!boxRef.current) return;
    const targetRotY = (mousePos.x * 0.45) + (state.clock.elapsedTime * 0.12);
    const targetRotX = (mousePos.y * 0.3) + 0.15;
    const targetPosY = isHovered ? 0.35 : 0.1;

    boxRef.current.rotation.y = THREE.MathUtils.lerp(boxRef.current.rotation.y, targetRotY, 0.05);
    boxRef.current.rotation.x = THREE.MathUtils.lerp(boxRef.current.rotation.x, targetRotX, 0.05);
    boxRef.current.position.y = THREE.MathUtils.lerp(boxRef.current.position.y, targetPosY, 0.08);
  });

  return (
    <group
      ref={boxRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      position={[0, 0, 0]}
    >
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.5, 2.1, 2.5]} />
        <meshStandardMaterial
          map={kraftTexture}
          roughness={0.88}
          metalness={0.04}
          bumpScale={0.02}
        />
      </mesh>

      <mesh position={[0, 1.055, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[0.5, 2.52]} />
        <meshStandardMaterial
          color="#D4B48A"
          roughness={0.6}
          transparent
          opacity={0.92}
        />
      </mesh>

      <mesh position={[0, 0, 1.255]}>
        <planeGeometry args={[2.46, 0.04]} />
        <meshStandardMaterial color="#886036" roughness={1} />
      </mesh>
    </group>
  );
}

function StackedPackagingElements() {
  const fluteTexture = useMemo(() => createFluteEdgeTexture(), []);

  return (
    <group position={[-2.2, -0.6, -0.8]} rotation={[0, 0.45, 0]}>
      <mesh position={[0, 0.15, 0]} rotation={[-0.1, 0, 0.15]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 0.08, 1.8]} />
        <meshStandardMaterial color="#B58F63" roughness={0.9} />
      </mesh>

      <mesh position={[0.1, 0.28, -0.1]} rotation={[-0.05, 0.2, 0.08]} castShadow receiveShadow>
        <boxGeometry args={[2.1, 0.08, 1.7]} />
        <meshStandardMaterial color="#C29D72" roughness={0.85} />
      </mesh>

      <mesh position={[0.2, 0.42, 0.1]} rotation={[0, 0.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.0, 0.09, 1.6]} />
        <meshStandardMaterial
          color="#A88255"
          roughness={0.9}
          bumpMap={fluteTexture}
          bumpScale={0.05}
        />
      </mesh>
    </group>
  );
}

function FloatingAccents() {
  return (
    <>
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh position={[2.6, 1.5, -1.2]} rotation={[0.4, 0.6, 0.2]}>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial color="#C5A070" roughness={0.7} wireframe />
        </mesh>
      </Float>

      <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh position={[-2.8, 1.8, -1.5]} rotation={[0.8, -0.3, 0.5]}>
          <octahedronGeometry args={[0.35, 0]} />
          <meshStandardMaterial color="#E0C097" roughness={0.6} />
        </mesh>
      </Float>
    </>
  );
}

export default function PackagingScene() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch (e) {
      setHasWebGL(false);
    }

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = -(e.clientY / innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8 bg-slate-50">
        <div className="relative w-72 h-72 rounded-2xl bg-white border border-kraft-300 flex flex-col items-center justify-center shadow-lg">
          <div className="w-40 h-40 border-4 border-dashed border-kraft-400 rounded-xl flex items-center justify-center mb-3">
            <span className="text-lg font-bold tracking-wider text-slate-800">AR PACKAGES</span>
          </div>
          <span className="text-xs font-mono text-kraft-700 font-bold">SINCE 1999 • KHI PAKISTAN</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[440px] lg:h-[520px] select-none cursor-grab active:cursor-grabbing bg-gradient-to-b from-slate-50/50 to-white">
      <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[11px] font-mono text-slate-700 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-kraft-500 animate-ping" />
        Interactive 3D • Move Mouse &amp; Hover
      </div>

      <Canvas
        camera={{ position: [0, 1.2, 5.8], fov: 42 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={1.3} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.9}
          color="#FFF8F0"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight
          position={[-6, 4, -4]}
          intensity={0.9}
          color="#C5A070"
        />
        <pointLight position={[0, -2, 2]} intensity={0.4} color="#D4B896" />

        <Center position={[0, -0.1, 0]}>
          <CorrugatedCarton
            mousePos={mousePos}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
          <StackedPackagingElements />
          <FloatingAccents />
        </Center>

        <ContactShadows
          position={[0, -1.3, 0]}
          opacity={0.4}
          scale={10}
          blur={2.5}
          far={4}
          color="#2B1E12"
        />
      </Canvas>
    </div>
  );
}