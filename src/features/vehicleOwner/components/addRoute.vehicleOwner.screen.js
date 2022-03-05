/** @format */

import React, { useEffect, useState } from "react";
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

import { user_id } from "../../authentication/screens/logIn.screen";

var serviceRoute;
export const AddRouteScreen = ({ navigation }) => {
  return (
    <SafeAreaViewContainer>
      <ScrollView>
        <H1>Add Route</H1>

        <SpacingLarge />
        <ModalView></ModalView>
        <TextInputTheme placeholder="Price"></TextInputTheme>

        <SpacingLarge />

        <PrimaryButton icon="plus-circle">
          Add
        </PrimaryButton>
        <SpacingLarge />
      </ScrollView>
    </SafeAreaViewContainer>
  );
};
/** @format */
