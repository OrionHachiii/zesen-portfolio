'use client';

import { Canvas } from '@react-three/fiber';
import { ContactShadows, OrbitControls, RoundedBox } from '@react-three/drei';
import type { ThreeElements } from '@react-three/fiber';

type SceneProps = { type: 'lego' | 'vehicle'; hero?: boolean };

function Brick({ color, ...props }: ThreeElements['group'] & { color: string }) {
  return (
    <group {...props}>
      <RoundedBox args={[1.2, 0.42, 0.68]} radius={0.06} smoothness={4} castShadow><meshStandardMaterial color={color} roughness={0.35} /></RoundedBox>
      {[-0.42, -0.14, 0.14, 0.42].map((x) => <mesh key={x} position={[x, 0.25, 0]} castShadow><cylinderGeometry args={[0.09, 0.09, 0.08, 24]} /><meshStandardMaterial color={color} roughness={0.35} /></mesh>)}
    </group>
  );
}

function LegoConsole() {
  return (
    <group rotation={[0.08, -0.4, -0.06]}>
      <Brick color="#f3cf25" position={[0, -0.65, 0]} scale={[2.55, 1, 2.2]} />
      <Brick color="#ee4c36" position={[-1.25, -0.15, 0]} scale={[0.62, 1.6, 1.55]} />
      <Brick color="#2f63d9" position={[1.25, -0.15, 0]} scale={[0.62, 1.6, 1.55]} />
      <RoundedBox args={[2.25, 1.25, 0.33]} radius={0.1} smoothness={4} position={[0, 0.05, 0.12]} castShadow><meshStandardMaterial color="#202126" roughness={0.28} metalness={0.08} /></RoundedBox>
      <RoundedBox args={[1.45, 0.82, 0.05]} radius={0.05} smoothness={4} position={[0, 0.08, 0.31]}><meshStandardMaterial color="#b9ff4a" emissive="#5bd61e" emissiveIntensity={0.15} /></RoundedBox>
      <mesh position={[-1.35, 0.17, 0.47]} rotation={[Math.PI / 2, 0, 0]} castShadow><cylinderGeometry args={[0.28, 0.28, 0.14, 32]} /><meshStandardMaterial color="#17181c" roughness={0.7} /></mesh>
      <mesh position={[-1.35, 0.43, 0.47]} castShadow><sphereGeometry args={[0.11, 24, 24]} /><meshStandardMaterial color="#222329" /></mesh>
      {[[1.28, 0.28], [1.5, 0.05]].map(([x, y]) => <mesh key={`${x}-${y}`} position={[x, y, 0.48]} rotation={[Math.PI / 2, 0, 0]} castShadow><cylinderGeometry args={[0.11, 0.11, 0.08, 24]} /><meshStandardMaterial color="#f3cf25" /></mesh>)}
    </group>
  );
}

function Wheel({ x, z }: { x: number; z: number }) {
  return <group position={[x, -0.42, z]} rotation={[0, 0, Math.PI / 2]}><mesh castShadow><cylinderGeometry args={[0.42, 0.42, 0.32, 28]} /><meshStandardMaterial color="#151515" roughness={0.82} /></mesh><mesh position={[0, 0.17, 0]}><cylinderGeometry args={[0.16, 0.16, 0.02, 20]} /><meshStandardMaterial color="#f2f0e8" metalness={0.35} roughness={0.35} /></mesh></group>;
}

function Vehicle() {
  return (
    <group rotation={[0.05, -0.55, -0.03]}>
      <RoundedBox args={[2.8, 0.28, 1.55]} radius={0.08} smoothness={4} castShadow><meshStandardMaterial color="#f07a3f" metalness={0.12} roughness={0.4} /></RoundedBox>
      <mesh position={[0, 0.28, 0]} castShadow><cylinderGeometry args={[0.72, 0.88, 0.42, 48]} /><meshStandardMaterial color="#26272a" roughness={0.42} /></mesh>
      <mesh position={[0, 0.53, 0]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.55, 0.055, 12, 48]} /><meshStandardMaterial color="#d9ff45" emissive="#7fae00" emissiveIntensity={0.12} /></mesh>
      {[0, Math.PI / 2, Math.PI / 4, -Math.PI / 4].map((r) => <mesh key={r} position={[0, 0.57, 0]} rotation={[Math.PI / 2, 0, r]}><boxGeometry args={[1.08, 0.055, 0.04]} /><meshStandardMaterial color="#b8bdc8" metalness={0.6} roughness={0.25} /></mesh>)}
      <mesh position={[0, 0.6, 0]}><cylinderGeometry args={[0.1, 0.1, 0.14, 24]} /><meshStandardMaterial color="#111214" /></mesh>
      {[-1, 1].flatMap((x) => [-0.62, 0.62].map((z) => <Wheel key={`${x}-${z}`} x={x * 1.1} z={z} />))}
      <RoundedBox args={[0.78, 0.3, 0.72]} radius={0.05} smoothness={4} position={[-0.82, 0.33, 0]} castShadow><meshStandardMaterial color="#365abf" roughness={0.45} /></RoundedBox>
    </group>
  );
}

export function ProjectScene({ type, hero = false }: SceneProps) {
  return (
    <Canvas dpr={[1, 1.6]} camera={{ position: [4.2, 3.2, 5.2], fov: hero ? 34 : 39 }} shadows gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 7, 5]} intensity={2.4} castShadow />
      <directionalLight position={[-4, 2, -3]} intensity={0.9} color="#8da9ff" />
      {type === 'lego' ? <LegoConsole /> : <Vehicle />}
      <ContactShadows position={[0, -1.08, 0]} opacity={0.32} scale={7} blur={2.6} far={3.8} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 3.2} maxPolarAngle={Math.PI / 1.75} autoRotate={!hero} autoRotateSpeed={0.7} />
    </Canvas>
  );
}
