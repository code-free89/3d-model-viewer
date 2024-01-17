import { Suspense } from "react";
import { PerspectiveCamera } from "three";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function GLTFViewer({ modelPath }: { modelPath: string }) {
  const camera = new PerspectiveCamera();
  camera.position.set(15, 30, 30);
  camera.lookAt(0, 0, 0);

  useGLTF.preload(modelPath);
  const { scene } = useGLTF(modelPath);

  return (
    <Canvas
      camera={{
        fov: 45,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.0001,
        far: 10000,
        position: [500, 30, 30],
      }}
      style={{
        backgroundColor: "#111111",
        flex: 1,
      }}
    >
      <ambientLight intensity={5} color={"white"} />
      <directionalLight
        position={[10, 10, 10]}
        intensity={10}
        color={"white"}
      />
      <Suspense fallback={null}>
        <primitive object={scene} />
      </Suspense>
    </Canvas>
  );
}
