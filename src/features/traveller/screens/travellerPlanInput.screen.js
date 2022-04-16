/** @format */

import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import {
    SafeAreaViewContainer,
    TextInputTheme,
    SpacingLarge,
    PrimaryButton,
    H1,
} from "../../../components/common.style";
import { ModalView, ItemChoise } from "../../../components/modalView.view";

export const TravellerPlanScreen = () => {

  return (
    <SafeAreaViewContainer>
      <ScrollView>
        <H1>Plan Generate</H1>

        <SpacingLarge />

        <ModalView
          Title="Area"
        ></ModalView>

        <ModalView
          Title="Route"
        ></ModalView>

        <ModalView
          Title="Budget"
        ></ModalView>

        <ModalView
          Title="Days"
        ></ModalView>

        <ModalView
          Title="Persons"
        ></ModalView>


        <SpacingLarge />
        <PrimaryButton
          icon="plus-circle"
        >
          Generate
        </PrimaryButton>
      </ScrollView>
    </SafeAreaViewContainer>
  );
};
