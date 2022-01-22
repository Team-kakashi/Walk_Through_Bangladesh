/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import { NavigationContainer, StackActions } from "@react-navigation/native";
import UselessTextInput from "./Screens/Login";
import Register from "./Screens/Signup";
import HotelInfo from "./Screens/HotelManager";
import VehicleInfo from "./Screens/VehicleInfo";
import GuideInfo from "./Screens/TourGuideProfile";
import CameraView from "./Screens/Camera";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="GuideInfo" component={GuideInfo} />
      <Stack.Screen name="Camera" component={CameraView} />
      <Stack.Screen name="VehicleInfo" component={VehicleInfo} />
        <Stack.Screen name="HotelManager" component={HotelInfo} />
        <Stack.Screen name="SignUp" component={Register} />
        <Stack.Screen name="Login" component={UselessTextInput} />
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

//hello
