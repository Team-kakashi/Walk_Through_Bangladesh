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
import { SignupBloggerScreen } from "./src/features/authentication/screens/signup.blogger.screen";
import { SignupTourGuideScreen } from "./src/features/authentication/screens/signup.tourguide.screen";
import { SignupVehicleOwnerScreen } from "./src/features/authentication/screens/signup.vehicleowner.screen";
import { AddRoomScreen } from "./src/features/hotelManager/screens/addRoom.hotelManager.screen";
import { TourGuideLandingScreen } from "./src/features/tourGuide/screens/tourGuideLanding.screen";
import { AddServiceScreen } from "./src/features/tourGuide/screens/addService.tourGuide.screen";
import { TravelBloggerLandingScreen } from "./src/features/travelBlogger/screens/travelBloggerLanding.screen";
import { WriteBlogScreen } from "./src/features/travelBlogger/screens/writeBlog.travelBlogger.screen";

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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LogInScreen"
            component={LogInScreen}
          />
          <Stack.Screen
            name="AccountSelectScreen"
            component={AccountSelectScreen}
          />
          <Stack.Screen
            name="SignupTravellerScreen"
            component={SignupTravellerScreen}
          />
          <Stack.Screen
            name="SignupHotelManagerScreen"
            component={SignupHotelManagerScreen}
          />
          <Stack.Screen
            name="SignupBloggerScreen"
            component={SignupBloggerScreen}
          />
          <Stack.Screen
            name="SignupTourGuideScreen"
            component={SignupTourGuideScreen}
          />
          <Stack.Screen
            name="SignupVehicleOwnerScreen"
            component={SignupVehicleOwnerScreen}
          />

          <Stack.Screen
            name="HotelManagerLandingScreen"
            component={HotelManagerLandingScreen}
          />
          <Stack.Screen
            name="AddRoomScreen"
            component={AddRoomScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
