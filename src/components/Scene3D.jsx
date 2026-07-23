import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sparkles,
  Text,
  Float,
  MeshTransmissionMaterial,
  Edges,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const WORKSPACES = [
  { label: "01", tint: "#4DD8E8", rot: 0 },
  { label: "02", tint: "#3B82F6", rot: Math.PI / 2 },
  { label: "03", tint: "#B7F26B", rot: Math.PI },
  { label: "04", tint: "#C9A57C", rot: -Math.PI / 2 },
];

// Panel de "ventanas" simuladas dentro de cada cara del cubo,
// evocando un workspace de MATE con Picom/Compiz activo.
function WorkspaceFace({ tint, rot }) {
  return (
    <group rotation={[0, rot, 0]} position={[0, 0, 1.301]}>
      {/* barra superior tipo panel MATE */}
      <mesh position={[0, 0.98, 0.01]}>
        <planeGeometry args={[2.2, 0.16]} />
        <meshBasicMaterial color={tint} transparent opacity={0.55} />
      </mesh>
      {/* ventanas flotantes */}
      {[
        [-0.55, 0.15, 0.62, 0.5],
        [0.42, 0.32, 0.75, 0.68],
        [-0.1, -0.55, 1.1, 0.42],
      ].map(([x, y, w, h], i) => (
        <group key={i} position={[x, y, 0.02]}>
          <mesh>
            <planeGeometry args={[w, h]} />
            <meshBasicMaterial color="#F4EFE3" transparent opacity={0.12} />
          </mesh>
          <lineSegments>
            <edgesGeometry args={[new THREE.PlaneGeometry(w, h)]} />
            <lineBasicMaterial color={tint} transparent opacity={0.8} />
          </lineSegments>
        </group>
      ))}
      {/* dock inferior */}
      <mesh position={[0, -0.95, 0.01]}>
        <planeGeometry args={[1.1, 0.14]} />
        <meshBasicMaterial color="#F4EFE3" transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

function CompizCube() {
  const group = useRef(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.05;
  });

  const glassMaterial = useMemo(
    () => (
      <MeshTransmissionMaterial
        thickness={0.4}
        roughness={0.08}
        transmission={1}
        ior={1.15}
        chromaticAberration={0.02}
        backside
        color="#8FE9EF"
      />
    ),
    []
  );

  return (
    <group ref={group}>
      {/* estructura de vidrio del cubo */}
      <mesh>
        <boxGeometry args={[2.6, 2.6, 2.6]} />
        {glassMaterial}
        <Edges scale={1.001} threshold={15}>
          <lineBasicMaterial color="#4DD8E8" transparent opacity={0.6} />
        </Edges>
      </mesh>

      {WORKSPACES.map((w) => (
        <WorkspaceFace key={w.label} tint={w.tint} rot={w.rot} />
      ))}

      {WORKSPACES.map((w) => (
        <group key={`label-${w.label}`} rotation={[0, w.rot, 0]}>
          <Text
            position={[-0.92, -0.72, 1.32]}
            fontSize={0.16}
            color="#F4EFE3"
            font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff"
            anchorX="left"
          >
            {w.label}
          </Text>
        </group>
      ))}
    </group>
  );
}

function OrbitDecor() {
  return (
    <>
      <Float speed={1.4} rotationIntensity={1.1} floatIntensity={1.4}>
        <mesh position={[3.4, 1.2, -1]}>
          <torusGeometry args={[0.35, 0.09, 16, 48]} />
          <meshStandardMaterial
            color="#3B82F6"
            emissive="#3B82F6"
            emissiveIntensity={0.5}
            roughness={0.3}
          />
        </mesh>
      </Float>
      <Float speed={1.1} rotationIntensity={1.6} floatIntensity={1.8}>
        <mesh position={[-3.2, -1.1, -0.6]}>
          <icosahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial
            color="#B7F26B"
            emissive="#B7F26B"
            emissiveIntensity={0.35}
            roughness={0.4}
            wireframe
          />
        </mesh>
      </Float>
      <Float speed={0.9} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh position={[2.6, -1.8, 1.4]}>
          <octahedronGeometry args={[0.28, 0]} />
          <meshStandardMaterial
            color="#C9A57C"
            emissive="#C9A57C"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>
    </>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0.6, 7.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <color attach="background" args={["#0A1420"]} />
      <fog attach="fog" args={["#0A1420", 8, 16]} />

      <ambientLight intensity={0.45} color="#8FE9EF" />
      <directionalLight position={[4, 5, 4]} intensity={1.1} color="#ffffff" />
      <pointLight position={[-4, -2, -3]} intensity={22} color="#3B82F6" />
      <pointLight position={[3, -3, 3]} intensity={10} color="#8B6B4A" />

      <Suspense fallback={null}>
        <CompizCube />
        <OrbitDecor />
        <Sparkles
          count={70}
          scale={[9, 6, 6]}
          size={2.2}
          speed={0.25}
          color="#8FE9EF"
          opacity={0.55}
        />
      </Suspense>

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.15}
          luminanceSmoothing={0.9}
          intensity={0.55}
          mipmapBlur
        />
      </EffectComposer>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.1}
        minPolarAngle={Math.PI / 2 - 0.5}
        maxPolarAngle={Math.PI / 2 + 0.4}
        rotateSpeed={0.6}
      />
    </Canvas>
  );
}
