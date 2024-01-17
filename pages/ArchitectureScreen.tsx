import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import OBJViewer from "../components/OBJViewer";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "architecture", "MyStack">;

export default function ArchitectureScreen({}: Props) {
  return (
    <OBJViewer />
  );
}
