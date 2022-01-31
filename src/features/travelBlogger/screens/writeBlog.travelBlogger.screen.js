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

export const WriteBlogScreen = () => (
  <SafeAreaViewContainer>
    <ScrollView>
      <H1>Write Blog</H1>

      <SpacingLarge />

      <TextInputTheme label="Title"></TextInputTheme>
      <ModalView></ModalView>
      <TextInputTheme label="Expence"></TextInputTheme>
      <ModalView></ModalView>
      <TextInputTheme label="Description"></TextInputTheme>

      <SpacingLarge />

      <PrimaryButton icon="plus-circle">Add</PrimaryButton>
      <SpacingLarge />
    </ScrollView>
  </SafeAreaViewContainer>
);
/** @format */
