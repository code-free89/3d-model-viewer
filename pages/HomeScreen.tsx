import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { TouchableRipple } from "react-native-paper";

import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "home", "MyStack">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TouchableRipple style={styles.link} onPress={() => navigation.push("animals")}>
          <Image source={require("../assets/icons/animals.jpeg")} style={styles.image} />
        </TouchableRipple>
      </View>
      <View style={styles.item}>
        <TouchableRipple style={styles.link} onPress={() => navigation.push("architecture")}>
          <Image source={require("../assets/icons/architecture.jpeg")} style={styles.image} />
        </TouchableRipple>
      </View>
      <View style={styles.item}>
        <TouchableRipple style={styles.link} onPress={() => navigation.push("culture")}>
          <Image source={require("../assets/icons/cultural.jpeg")} style={styles.image} />
        </TouchableRipple>
      </View>
      <View style={styles.item}>
        <TouchableRipple style={styles.link} onPress={() => navigation.push("fossils")}>
          <Image source={require("../assets/icons/fossils.jpeg")} style={styles.image} />
        </TouchableRipple>
      </View>
      <View style={styles.item}>
        <TouchableRipple style={styles.link} onPress={() => navigation.push("implement_your")}>
          <Image source={require("../assets/icons/implement_your.jpeg")} style={styles.image} />
        </TouchableRipple>
      </View>
      <View style={styles.item}>
        <TouchableRipple style={styles.link} onPress={() => navigation.push("upload_own")}>
          <Image source={require("../assets/icons/upload_custom.jpeg")} style={styles.image} />
        </TouchableRipple>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    borderRadius: 64,
    borderWidth: 2,
    borderColor: "#6c6c6c",
    marginHorizontal: 20,
    marginTop: 50,
    marginBottom: 20,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    width: "50%",
    height: "33%",
  },
  link: {
    overflow: "hidden",
    borderRadius: 256,
  },
  image: {
    width: 144,
    height: 144,
  },
});
