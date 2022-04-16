/** @format */

import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import {
  SafeAreaViewContainer,
  TertiaryButton,
  RightGravity,
  SpacingSmall,
  Subtitle,
  PrimaryButton,
  Title,
  ParentMargin,
} from "../../../components/common.style";


export const Homepage = () => {
  return (
    <SafeAreaViewContainer>
      <ScrollView>
          <SpacingSmall/>
          <PrimaryButton icon="plus">
              Generate Plan
          </PrimaryButton>      
      </ScrollView>
    </SafeAreaViewContainer>
  );
};
