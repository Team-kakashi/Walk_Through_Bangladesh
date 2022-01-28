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

export const AccountSelectScreen = () => (
  <SafeAreaViewContainer>
    <H1>Sign up</H1>

    <SpacingLarge></SpacingLarge>

    <ParentMargin>
      <Subtitle>Choose Account Type</Subtitle>
    </ParentMargin>
    <SpacingSmall></SpacingSmall>

    <AccountTypeButton icon="image-area" onPress={() => console.log("Pressed")}>
      Traveller
    </AccountTypeButton>
    <SpacingSmall></SpacingSmall>
    <AccountTypeButton
      icon="office-building"
      onPress={() => console.log("Pressed")}
    >
      Hotel Manager
    </AccountTypeButton>
    <SpacingSmall></SpacingSmall>
    <AccountTypeButton icon="blogger" onPress={() => console.log("Pressed")}>
      Blogger
    </AccountTypeButton>
    <SpacingSmall></SpacingSmall>
    <AccountTypeButton icon="infinity" onPress={() => console.log("Pressed")}>
      Tour Guide
    </AccountTypeButton>
    <SpacingSmall></SpacingSmall>
    <AccountTypeButton icon="car" onPress={() => console.log("Pressed")}>
      Vehicle Owner
    </AccountTypeButton>
  </SafeAreaViewContainer>
);

//7.57
