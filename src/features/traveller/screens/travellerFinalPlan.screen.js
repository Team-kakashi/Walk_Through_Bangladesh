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
  H1,
  ParentMargin,
  PrimaryButton,
  WhiteBackground,
} from "../../../components/common.style";
import { FinalRouteCard } from "../components/finalRouteCard.component";

const RoomCardContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
`;

export const TravellerFinalPlanScreen = () => {
  return (
    <SafeAreaViewContainer>
      <ScrollView>
        <H1>Final Plan</H1>
        <SpacingSmall></SpacingSmall>
        <RoomCardContainer>
          <FinalRouteCard />
          <SpacingSmall></SpacingSmall>

          <PrimaryButton>Done</PrimaryButton>
        </RoomCardContainer>
      </ScrollView>
    </SafeAreaViewContainer>
  );
};
