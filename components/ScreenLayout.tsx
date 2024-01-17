import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

const ScreenLayout = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

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
});

export default ScreenLayout;
