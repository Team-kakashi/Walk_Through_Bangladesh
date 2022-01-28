/** @format */

import React from "react";
import { ScrollView, View } from "react-native";
import {
  SafeAreaViewContainer,
  TextInputTheme,
  SpacingLarge,
  PrimaryButton,
  H1,
} from "../../../components/common.style";
import { ModalView } from "../../../components/modalView.view";

export const AddRoomScreen = () => {
  return (
    <SafeAreaViewContainer>
      <ScrollView>
        <H1>Add Room</H1>

        <SpacingLarge />

        <TextInputTheme label="Number"></TextInputTheme>
        <TextInputTheme label="Rent"></TextInputTheme>
        <TextInputTheme label="Description"></TextInputTheme>

        <ModalView></ModalView>
        <ModalView></ModalView>

        <SpacingLarge />

        <PrimaryButton
          icon="plus-circle"
          onPress={() => console.log("Pressed")}
        >
          Add
        </PrimaryButton>
      </ScrollView>
    </SafeAreaViewContainer>
  );
};
/** @format */
