
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

// Remove the import for TextGeometry as we'll use the Text component from drei instead

interface SpinningTextProps {
  text: string;
  color: string;
  position: [number, number, number];
}

const SpinningText: React.FC<SpinningTextProps> = ({ text, color, position }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.3;
      meshRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.2) * 0.2;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <Text 
        position={[0, 0, 0]}
        fontSize={0.5}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
      <meshStandardMaterial color={color} opacity={0.2} transparent />
    </mesh>
  );
};

interface MediaTextProps {
  texts: {
    text: string;
    color: string;
    position: [number, number, number];
  }[];
}

const MediaText: React.FC<MediaTextProps> = ({ texts }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      
      <group>
        {texts.map((item, index) => (
          <SpinningText 
            key={index} 
            text={item.text} 
            color={item.color} 
            position={item.position} 
          />
        ))}
      </group>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default MediaText;
