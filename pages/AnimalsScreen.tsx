import * as ScreenOrientation from "expo-screen-orientation";
import React, { useEffect, useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// @ts-ignore
import modelPath from "../assets/glb/animals/european_roller.glb";

import GLTFViewer from "../components/GLTFViewer";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "animals", "MyStack">;

export default function AnimalsScreen({}: Props) {
  useLayoutEffect(() => {
    ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
  }, []);

  useEffect(() => {
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
    };
  }, []);

  return <GLTFViewer modelPath={modelPath} isLocalAsset />;
}
