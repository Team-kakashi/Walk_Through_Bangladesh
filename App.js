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
import { VehicleOwnerLandingScreen } from "./src/features/vehicleOwner/screens/vehicleOwnerLanding.screen";
import { AddVehicleScreen } from "./src/features/vehicleOwner/components/addVehicle.vehicleOwner.screen";
import { AddRouteScreen } from "./src/features/vehicleOwner/components/addRoute.vehicleOwner.screen";
import { VecicleCard } from "./src/features/vehicleOwner/components/vehicleCard.component";
import { TravellerTabNavigation } from "./src/features/traveller/screens/travellerTabNavigation.screen";
import { TravellerPlanScreen } from "./src/features/traveller/screens/travellerPlanInput.screen";
import { TravellerPlansResultScreen } from "./src/features/traveller/screens/travellerPlans.screens";
import { TravellerHottelResultScreen } from "./src/features/traveller/screens/travellerHotelResult.screen";
import { TravellerSelectedPlanScreen } from "./src/features/traveller/screens/travellerSelectedPlan.screen";
import { GuideSelectScreen } from "./src/features/traveller/screens/travellerGuideSelect.screen";
import { VehicleSelectScreen } from "./src/features/traveller/screens/travellerVehicleSelect.screen";
import { RoomCardResult } from "./src/features/traveller/components/hotelRoomCard.component";
import { PlanCard } from "./src/features/traveller/components/planCard.component";
import { PlanCardDetails } from "./src/features/traveller/screens/travellerPlanCardDetails";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { ContentProvider } from "./src/features/vehicleOwner/components/vehicleContext";
import { PlanContentProvider } from "./src/features/traveller/components/planContext";

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
    <PlanContentProvider>
      <ContentProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="LogInScreen"
                component={LogInScreen}
              />

              <Stack.Screen
                name="TravellerSelectedPlanScreen"
                component={TravellerSelectedPlanScreen}
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
              <Stack.Screen
                name="TourGuideLandingScreen"
                component={TourGuideLandingScreen}
              />
              <Stack.Screen
                name="AddServiceScreen"
                component={AddServiceScreen}
              />
              <Stack.Screen
                name="TravelBloggerLandingScreen"
                component={TravelBloggerLandingScreen}
              />
              <Stack.Screen
                name="WriteBlogScreen"
                component={WriteBlogScreen}
              />
              <Stack.Screen
                name="AddVehicleScreen"
                component={AddVehicleScreen}
              />
              <Stack.Screen
                name="VehicleOwnerLandingScreen"
                component={VehicleOwnerLandingScreen}
              />
              <Stack.Screen
                name="AddRouteScreen"
                component={AddRouteScreen}
              />
              <Stack.Screen
                name="VecicleCard"
                component={VecicleCard}
              />
              <Stack.Screen
                name="TravellerTabNavigation"
                component={TravellerTabNavigation}
              />

              <Stack.Screen
                name="HotelManagerLandingScreen"
                component={HotelManagerLandingScreen}
              />
              <Stack.Screen
                name="AddRoomScreen"
                component={AddRoomScreen}
              />
              <Stack.Screen
                name="TourGuideLandingScreen"
                component={TourGuideLandingScreen}
              />
              <Stack.Screen
                name="AddServiceScreen"
                component={AddServiceScreen}
              />
              <Stack.Screen
                name="TravelBloggerLandingScreen"
                component={TravelBloggerLandingScreen}
              />
              <Stack.Screen
                name="WriteBlogScreen"
                component={WriteBlogScreen}
              />
              <Stack.Screen
                name="AddVehicleScreen"
                component={AddVehicleScreen}
              />
              <Stack.Screen
                name="VehicleOwnerLandingScreen"
                component={VehicleOwnerLandingScreen}
              />
              <Stack.Screen
                name="AddRouteScreen"
                component={AddRouteScreen}
              />
              <Stack.Screen
                name="VecicleCard"
                component={VecicleCard}
              />
              <Stack.Screen
                name="TravellerTabNavigation"
                component={TravellerTabNavigation}
              />

              <Stack.Screen
                name="TravellerPlanScreen"
                component={TravellerPlanScreen}
              />

              <Stack.Screen
                name="TravellerHottelResultScreen"
                component={TravellerHottelResultScreen}
              />
              <Stack.Screen
                name="RoomCardResult"
                component={RoomCardResult}
              />
              <Stack.Screen
                name="TravellerPlansResultScreen"
                component={TravellerPlansResultScreen}
              />
              <Stack.Screen
                name="PlanCard"
                component={PlanCard}
              />
              <Stack.Screen
                name="PlanCardDetails"
                component={PlanCardDetails}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </ContentProvider>
    </PlanContentProvider>
  );
}
