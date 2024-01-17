import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";

import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "fossils", "MyStack">;

export default function FossilsScreen({}: Props) {
  return (
    <View>
      <Text>This is Fossils screen</Text>
    </View>
  );
}
