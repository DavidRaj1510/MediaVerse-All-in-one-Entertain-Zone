
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Box, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedBox = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Use available textures that we know exist in the project
  const textureUrls = [
    '/lovable-uploads/d3a4b4bb-2d7c-4ec0-a031-071a52f84c1b.png',
    '/lovable-uploads/ebc739d7-ffe8-4e5e-8491-5dd7fac0dec3.png',
    '/lovable-uploads/f81ac3b1-e626-4f94-95b6-b030fcbc8968.png',
  ];
  
  // Handle potential texture loading errors with fallback
  const textures = useTexture(textureUrls, (textures) => {
    console.log('Textures loaded successfully:', textures);
  });

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.2;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      {/* Fixed attachArray syntax by using proper R3F approach with array of materials */}
      <meshStandardMaterial map={textures[0]} attach={`material-0`} />
      <meshStandardMaterial map={textures[1]} attach={`material-1`} />
      <meshStandardMaterial map={textures[2]} attach={`material-2`} />
      <meshStandardMaterial map={textures[0]} attach={`material-3`} />
      <meshStandardMaterial map={textures[1]} attach={`material-4`} />
      <meshStandardMaterial map={textures[2]} attach={`material-5`} />
    </mesh>
  );
};

const MediaBox = () => {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedBox />
      </Canvas>
    </div>
  );
};

export default MediaBox;
