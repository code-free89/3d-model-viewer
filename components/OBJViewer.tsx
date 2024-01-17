import React from "react";
import { Asset } from "expo-asset";
import { THREE, Renderer } from "expo-three";
import { AmbientLight, Camera, PerspectiveCamera, Scene, TextureLoader } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GLView } from "expo-gl";

export default function OBJViewer() {
  const [camera, setCamera] = React.useState<Camera | null>(null);

  let timeout: any;

  React.useEffect(() => {
    // Clear the animation loop when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  const onContextCreate = async (gl: any) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
    const sceneColor = 668096;
    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);
    renderer.setClearColor(0x668096);

    const camera = new PerspectiveCamera(70, width / height, 0.01, 1000);
    camera.position.set(2, 5, 5);
    camera.lookAt(0, 0, 0);
    setCamera(camera);

    const ambientLight = new AmbientLight(0x000000);

    const asset = Asset.fromModule(require("../assets/models/obj/MilitaryTomahawk.obj"));
    await asset.downloadAsync();

    const scene = new Scene();
    scene.add(ambientLight);

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      timeout = requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
      gl.endFrameEXP();
    };

    const loader = new OBJLoader();
    loader.load(
      asset.uri,
      (obj) => {
        scene.add(obj);
        animate();
        // Model loaded...
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
