import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// @ts-ignore
import modelPath from "../assets/models/glb/european_roller.glb";

import { RootStackParamList } from "../App";
import GLTFViewer from "../components/GLTFViewer";

type Props = NativeStackScreenProps<RootStackParamList, "animals", "MyStack">;

export default function AnimalsScreen({}: Props) {
  return <GLTFViewer modelPath={modelPath} />;
}
