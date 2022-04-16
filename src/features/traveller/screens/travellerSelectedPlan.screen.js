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
} from "../../../components/common.style";
import { SelectedRouteCard } from "../components/selectedRouteCard.component";


const RoomCardContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
`;


export const TravellerSelectedPlanScreen = () => {
  return (
    <SafeAreaViewContainer>
      <ScrollView>
        <H1>Select</H1>
        <SpacingSmall></SpacingSmall>
        <RoomCardContainer>

          <SelectedRouteCard />
        </RoomCardContainer>
      </ScrollView>
    </SafeAreaViewContainer>
  );
};
