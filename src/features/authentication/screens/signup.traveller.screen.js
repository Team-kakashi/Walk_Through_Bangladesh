/** @format */

import React from "react";
import { ScrollView } from "react-native";
import {
  PrimaryButton,
  SpacingLarge,
  TextInputTheme,
  H1,
  SafeAreaViewContainer,
} from "../../../components/common.style";

export const SignupTravellerScreen = () => (
  <SafeAreaViewContainer>
    <ScrollView>
      <H1>Sign up</H1>

      <SpacingLarge></SpacingLarge>

      <TextInputTheme label="Name"></TextInputTheme>
      <TextInputTheme label="E-mail"></TextInputTheme>
      <TextInputTheme label="Phone No."></TextInputTheme>
      <TextInputTheme label="Password"></TextInputTheme>

      <SpacingLarge></SpacingLarge>

      <PrimaryButton icon="login" onPress={() => console.log("Pressed")}>
        Signup
      </PrimaryButton>
    </ScrollView>
  </SafeAreaViewContainer>
);

//3.03
