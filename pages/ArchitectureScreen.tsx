import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";

import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "architecture", "MyStack">;

export default function ArchitectureScreen({}: Props) {
  return (
    <View>
      <Text>This is Architecture screen</Text>
    </View>
  );
}
