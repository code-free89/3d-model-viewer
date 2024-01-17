import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";

import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "implement_your", "MyStack">;

export default function ImplementYourScreen({}: Props) {
  return (
    <View>
      <Text>This is ImplementYore screen</Text>
    </View>
  );
}
