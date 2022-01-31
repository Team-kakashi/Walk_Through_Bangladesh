/** @format */

import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HotelManagerLandingScreen } from "./src/features/hotelManager/screens/hotelManagerLanding.screen";
import { LogInScreen } from "./src/features/authentication/screens/logIn.screen";
import { AccountSelectScreen } from "./src/features/authentication/screens/accountselect.screen";
import { SignupTravellerScreen } from "./src/features/authentication/screens/signup.traveller.screen";
import { SignupHotelManagerScreen } from "./src/features/authentication/screens/signup.hotelmanager.screen";
import { AddRoomScreen } from "./src/features/hotelManager/screens/addRoom.hotelManager.screen";
import { TourGuideLandingScreen } from "./src/features/tourGuide/screens/tourGuideLanding.screen";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useFontsInter,
  Inter_400Regular,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import {
  useFonts as useFontsRobotoSlab,
  RobotoSlab_700Bold,
} from "@expo-google-fonts/roboto-slab";

const Stack = createNativeStackNavigator();

export default function App() {
  const [interLoaded] = useFontsInter({
    Inter_400Regular,
    Inter_900Black,
  });

  let [robotoSlabLoaded] = useFontsRobotoSlab({
    RobotoSlab_700Bold,
  });

  if (!interLoaded || !robotoSlabLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <TourGuideLandingScreen />
    </ThemeProvider>
  );
}
