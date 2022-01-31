/** @format */

import React, { useState } from "react";
import { ScrollView, View, Alert } from "react-native";
import { IpRoute } from "../../../components/environmentVeriables";
import {
  SafeAreaViewContainer,
  TextInputTheme,
  SpacingLarge,
  PrimaryButton,
  H1,
} from "../../../components/common.style";
import {
  ModalView,
  ItemChoise,
} from "../../../components/modalView.view";

export const AddServiceScreen = () => (
  <SafeAreaViewContainer>
    <ScrollView>
      <H1>Add Service</H1>

      <SpacingLarge />
      <ModalView></ModalView>

      <TextInputTheme label="Cost"></TextInputTheme>
      <TextInputTheme label="Year of Experience"></TextInputTheme>

      <SpacingLarge />

      <PrimaryButton icon="plus-circle">Add</PrimaryButton>
      <SpacingLarge />
    </ScrollView>
  </SafeAreaViewContainer>
);
/** @format */
