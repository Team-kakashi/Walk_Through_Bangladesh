/** @format */

import React from "react";
import {
  PrimaryButton,
  Subtitle,
  SecondaryButton,
  ParentMargin,
  SpacingLarge,
  TextInputTheme,
  H1,
  SafeAreaViewContainer,
} from "../../../components/common.style";

export const LogInScreen = () => (
  <SafeAreaViewContainer>
    <H1>Walk Through Bangladesh</H1>

    <SpacingLarge></SpacingLarge>

    <TextInputTheme label="E-mail"></TextInputTheme>
    <TextInputTheme label="Password"></TextInputTheme>

    <SpacingLarge></SpacingLarge>

    <ParentMargin>
      <Subtitle>Don't have any account?</Subtitle>

      <SecondaryButton
        onPress={() => console.log("Pressed")}
      >
        SignUp
      </SecondaryButton>
    </ParentMargin>

    <PrimaryButton
      icon="login"
      onPress={() => console.log("Pressed")}
    >
      Login
    </PrimaryButton>
  </SafeAreaViewContainer>
);
