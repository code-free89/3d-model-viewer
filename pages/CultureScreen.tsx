import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";

import { RootStackParamList } from "../App";
import PLYViewer from "../components/PLYViewer";

type Props = NativeStackScreenProps<RootStackParamList, "culture", "MyStack">;

export default function CultureScreen({}: Props) {
  return (
    <PLYViewer />
  );
}
