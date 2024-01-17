import React from "react";
import { Asset } from "expo-asset";
import { THREE, Renderer } from "expo-three";
import { AmbientLight, PerspectiveCamera, Scene } from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { GLView } from "expo-gl";

export default function STLViewer() {
  let timeout: any;
  let model: any;

  React.useEffect(() => {
    // Clear the animation loop when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  const onContextCreate = async (gl: any) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);
    renderer.setClearColor(0x668096);

    const camera = new PerspectiveCamera(70, width / height, 0.01, 1000);
    camera.position.set(2, 5, 5);
    camera.lookAt(0, 0, 0);

    const ambientLight = new AmbientLight(0x000000);

    const asset = Asset.fromModule(require("../assets/models/stl/eyeball.stl"));
    await asset.downloadAsync();

    const scene = new Scene();
    scene.add(ambientLight);

    const animate = () => {
      timeout = requestAnimationFrame(animate);
      if (model) model.rotation.y += 0.004;
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    const loader = new STLLoader();
    loader.load(
      asset.uri,
      (geometry) => {
        const object = new THREE.Mesh(geometry);
        model = object;
        scene.add(object);
        animate();
      },
      (xhr) => {
        console.log(xhr.loaded);
      },
      (error) => {
        console.log("error", error);
      }
    );
  };

  return (
    <GLView
      style={{ flex: 1, backgroundColor: "black" }}
      onContextCreate={onContextCreate}
      key="d"
    />
  );
}
