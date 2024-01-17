import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

import HomeScreen from "./pages/HomeScreen";
import AnimalsScreen from "./pages/AnimalsScreen";
import ArchitectureScreen from "./pages/ArchitectureScreen";
import CultureScreen from "./pages/CultureScreen";
import FossilsScreen from "./pages/FossilsScreen";
import ImplementYourScreen from "./pages/ImplementYourScreen";
import UploadOwnScreen from "./pages/UploadOwnScreen";
import { StatusBar } from "expo-status-bar";

export type RootStackParamList = {
  home: undefined;

  animals: undefined;
  architecture: undefined;
  culture: undefined;
  fossils: undefined;
  implement_your: undefined;
  upload_own: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="animals" component={AnimalsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="architecture" component={ArchitectureScreen} options={{ headerShown: false }} />
        <Stack.Screen name="culture" component={CultureScreen} options={{ headerShown: false }} />
        <Stack.Screen name="fossils" component={FossilsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="implement_your" component={ImplementYourScreen} options={{ headerShown: false }} />
        <Stack.Screen name="upload_own" component={UploadOwnScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
