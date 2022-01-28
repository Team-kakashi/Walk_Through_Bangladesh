/** @format */

import React from "react";
import {
  PrimaryButton,
  Subtitle,
  SecondaryButton,
  ParentMargin,
  SpacingLarge,
  TextInputTheme,
  SpacingSmall,
  H1,
  SafeAreaViewContainer,
  AccountTypeButton,
} from "../../../components/common.style";

export const AccountSelectScreen = ({navigation}) => (
  <SafeAreaViewContainer>
    <H1>Sign up</H1>

    <SpacingLarge></SpacingLarge>

    <ParentMargin>
      <Subtitle>Choose Account Type</Subtitle>
    </ParentMargin>
    <SpacingSmall></SpacingSmall>

    <AccountTypeButton icon="image-area" onPress={() => navigation.navigate("SignupTravellerScreen")}>
      Traveller
    </AccountTypeButton>
    <SpacingSmall></SpacingSmall>
    <AccountTypeButton
      icon="office-building"
      onPress={() => navigation.navigate("SignupHotelManagerScreen")}
    >
      Hotel Manager
    </AccountTypeButton>
    <SpacingSmall></SpacingSmall>
    <AccountTypeButton icon="blogger" onPress={() => navigation.navigate("SignupBloggerScreen")}>
      Blogger
    </AccountTypeButton>
    <SpacingSmall></SpacingSmall>
    <AccountTypeButton icon="infinity" onPress={() => navigation.navigate("SignupTourGuideScreen")}>
      Tour Guide
    </AccountTypeButton>
    <SpacingSmall></SpacingSmall>
    <AccountTypeButton icon="car" onPress={() => navigation.navigate("SignupVehicleOwnerScreen")}>
      Vehicle Owner
    </AccountTypeButton>
  </SafeAreaViewContainer>
);

//7.57
