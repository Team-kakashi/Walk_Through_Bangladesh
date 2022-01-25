/** @format */

import { StatusBar } from "expo-status-bar";
import * as React from "react";
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

import { HotelManagerLandingScreen } from "./src/features/hotelManager/screens/hotelManagerLanding.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useFontsInter,
  Inter_400Regular,
} from "@expo-google-fonts/inter";

// import {
//   useFonts as useFontsRobotoSlab,
//   RobotoSlab_700Bold,
// } from "@expo-google-fonts/inter";

const Stack = createNativeStackNavigator();

export default function App() {
  let [interLoaded] = useFontsInter({
    Inter_400Regular,
  });

  // let [robotoSlabLoaded] = useFontsRobotoSlab({
  //   RobotoSlab_700Bold,
  // });

  if (!interLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <HotelManagerLandingScreen />
    </ThemeProvider>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="HotelManager" component={HotelInfo} />
    //     <Stack.Screen name="SignUp" component={Register} />
    //     <Stack.Screen name="Login" component={UselessTextInput} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
