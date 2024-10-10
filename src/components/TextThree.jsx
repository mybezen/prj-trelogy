/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function GarudaModel() {
  // Assuming 'garuda.glb' is placed in the public/assets folder
  const gltf = useGLTF("/assets/sumpahpemuda.glb");
  return (
    <primitive
      object={gltf.scene}
      scale={[1.7, 1.7, 1.7]} // Adjust the size
      position={[0, -4, 0]} // Adjust the position
      rotation={[0, 0, 0]}
    />
  );
}

function TextScene() {
  return (
    <Canvas style={{ width: "100%", height: "48vh" }}>
      <Suspense fallback={null}>
        <ambientLight intensity={2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={0.5}
          intensity={2}
        />
        <pointLight position={[5, 5, 5]} intensity={2} />
        <directionalLight position={[-5, 5, 5]} intensity={1.5} />

        <GarudaModel />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Suspense>
    </Canvas>
  );
}

export default TextScene;
