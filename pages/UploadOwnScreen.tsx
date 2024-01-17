import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";

import { RootStackParamList } from "../App";
import ScreenLayout from "../components/ScreenLayout";

type Props = NativeStackScreenProps<RootStackParamList, "upload_own", "MyStack">;

export default function UploadOwnScreen({}: Props) {
  return (
    <ScreenLayout>
      <Text>This is UploadOwn screen</Text>
    </ScreenLayout>
  );
}
