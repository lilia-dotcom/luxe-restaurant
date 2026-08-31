import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function GoldenMaterial() {
  return (
    <meshStandardMaterial
      color="#c8a45c"
      metalness={0.95}
      roughness={0.16}
    />
  );
}

function Plate() {
  return (
    <Float
      speed={1.2}
      rotationIntensity={0.12}
      floatIntensity={0.25}
    >
      <group>
        {/* Plate */}
        <mesh rotation={[0.2, 0, 0]}>
          <cylinderGeometry args={[1.8, 1.8, 0.18, 64]} />
          <meshStandardMaterial
            color="#e7dcc8"
            roughness={0.18}
            metalness={0.12}
          />
        </mesh>

        {/* Gold rim */}
        <mesh position={[0, 0.1, 0]}>
          <torusGeometry args={[1.52, 0.035, 24, 80]} />
          <GoldenMaterial />
        </mesh>

        {/* Food */}
        <mesh position={[0, 0.27, 0]}>
          <sphereGeometry args={[0.5, 48, 48]} />
          <meshStandardMaterial
            color="#321d12"
            roughness={0.25}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Fork() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.z =
      -0.45 + Math.sin(state.clock.elapsedTime * 0.7) * 0.04;

    ref.current.rotation.y =
      state.mouse.x * 0.12;
  });

  return (
    <group
      ref={ref}
      position={[-2.05, 0.05, 0.1]}
      rotation={[0.12, 0, -0.45]}
      scale={0.72}
    >
      {/* Handle */}
      <mesh position={[0, -1.25, 0]}>
        <cylinderGeometry args={[0.075, 0.1, 2.6, 32]} />
        <GoldenMaterial />
      </mesh>

      {/* Fork neck */}
      <mesh position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.65, 32]} />
        <GoldenMaterial />
      </mesh>

      {/* Fork prongs */}
      {[-0.18, -0.06, 0.06, 0.18].map((x) => (
        <mesh
          key={x}
          position={[x, 0.72, 0]}
        >
          <cylinderGeometry args={[0.035, 0.035, 0.75, 20]} />
          <GoldenMaterial />
        </mesh>
      ))}
    </group>
  );
}

function Knife() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.z =
      0.45 + Math.sin(state.clock.elapsedTime * 0.7 + 1) * 0.04;

    ref.current.rotation.y =
      state.mouse.x * 0.12;
  });

  return (
    <group
      ref={ref}
      position={[2.05, 0.05, 0.1]}
      rotation={[0.12, 0, 0.45]}
      scale={0.72}
    >
      {/* Handle */}
      <mesh position={[0, -1.25, 0]}>
        <cylinderGeometry args={[0.09, 0.11, 2.5, 32]} />
        <GoldenMaterial />
      </mesh>

      {/* Blade */}
      <mesh position={[0, 0.42, 0]}>
        <boxGeometry args={[0.24, 1.55, 0.08]} />
        <GoldenMaterial />
      </mesh>
    </group>
  );
}
function SceneContent() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.elapsedTime;

    // حركة خفيفة مع الماوس
    ref.current.rotation.y = state.mouse.x * 0.08;
    ref.current.rotation.x = state.mouse.y * 0.04;

    // حركة cinematic بطيئة
    ref.current.position.y = Math.sin(time * 0.7) * 0.08;
  });

  return (
    <group ref={ref}>
      <Plate />
      <Fork />
      <Knife />
    </group>
  );
}

function Scene3D() {
  return (
    <Canvas
      camera={{
        position: [0, 0.4, 7],
        fov: 42,
      }}
      dpr={[1, 1.8]}
    >
      <ambientLight intensity={0.65} />

      <spotLight
        position={[4, 6, 5]}
        intensity={12}
        angle={0.4}
        penumbra={1}
      />

      <pointLight
        position={[-4, 2, 3]}
        intensity={5}
      />

      <SceneContent />

      <Environment preset="night" />
    </Canvas>
  );
}

export default Scene3D;