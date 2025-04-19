import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Text, OrbitControls, useTexture } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';

const CategoryCube: React.FC<{ 
  color: string; 
  label: string; 
  position: [number, number, number]; 
  onClick: () => void;
  texturePath: string;
}> = ({ 
  color, label, position, onClick, texturePath
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(texturePath);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.5} 
        roughness={0.2} 
        map={texture} 
      />
      <Text 
        position={[0, 0, 0.76]} 
        scale={[0.4, 0.4, 0.4]}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter_Bold.json"
      >
        {label}
      </Text>
    </mesh>
  );
};

const MediaCubes: React.FC<{ onClick: (path: string) => void }> = ({ onClick }) => {
  const categories = [
    { 
      name: "Comics", 
      color: "#3B82F6", 
      path: "/comics", 
      position: [-6, 0, 0],
      texturePath: "/lovable-uploads/cb91e9bf-60b1-4ef4-9238-e3eeb57dd43a.png" // Comics image
    },
    { 
      name: "Anime", 
      color: "#EC4899", 
      path: "/anime", 
      position: [-4, 0, 0],
      texturePath: "/lovable-uploads/2421bf65-3638-4803-85d1-e50c4f08f92c.png" // Anime image
    },
    { 
      name: "Novels", 
      color: "#10B981", 
      path: "/novels", 
      position: [-2, 0, 0],
      texturePath: "/lovable-uploads/d26559dc-069e-49a9-94b5-997a6e1ba5fc.png" // Novels image
    },
    { 
      name: "K-Dramas", 
      color: "#8B5CF6", 
      path: "/kdramas", 
      position: [0, 0, 0],
      texturePath: "/lovable-uploads/f81ac3b1-e626-4f94-95b6-b030fcbc8968.png" // K-Dramas image
    },
    { 
      name: "Magazines", 
      color: "#F59E0B", 
      path: "/magazines", 
      position: [2, 0, 0],
      texturePath: "/lovable-uploads/786b524d-2e02-4c10-af91-5fe41ac7202a.png" // Magazines image
    },
    { 
      name: "Cartoons", 
      color: "#EF4444", 
      path: "/cartoons", 
      position: [4, 0, 0],
      texturePath: "/lovable-uploads/ebc739d7-ffe8-4e5e-8491-5dd7fac0dec3.png" // Cartoons image
    },
    { 
      name: "Movies", 
      color: "#6366F1", 
      path: "/movies", 
      position: [6, 0, 0],
      texturePath: "/lovable-uploads/d3a4b4bb-2d7c-4ec0-a031-071a52f84c1b.png" // Movies image
    },
    { 
      name: "Games", 
      color: "#22D3EE", 
      path: "/games", 
      position: [8, 0, 0],
      texturePath: "/lovable-uploads/75089134-4b11-4281-833c-9ea35057f733.png" // Games image
    }
  ];

  return (
    <group>
      {categories.map((category, index) => (
        <CategoryCube 
          key={index}
          color={category.color}
          label={category.name}
          position={category.position as [number, number, number]}
          onClick={() => onClick(category.path)}
          texturePath={category.texturePath}
        />
      ))}
    </group>
  );
};

const MediaCube: React.FC = () => {
  const navigate = useNavigate();
  
  const handleClick = (path: string) => {
    navigate(path);
  };
  
  return (
    <div style={{ width: '100%', height: '550px' }}>
      <Canvas camera={{ position: [0, 2, 12], fov: 55 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <MediaCubes onClick={handleClick} />

        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
};

export default MediaCube;
