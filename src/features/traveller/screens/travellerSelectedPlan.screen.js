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
  PrimaryButton
} from "../../../components/common.style";
import { SelectedRouteCard } from "../components/selectedRouteCard.component";
import { PlanContentContext } from "../components/planContext";
import { IpRoute } from "../../../components/environmentVeriables";

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
          <ParentMargin>
            <Subtitle>Plan</Subtitle>
          </ParentMargin>
          <SelectedRouteCard />
          <SpacingSmall></SpacingSmall>

          <PrimaryButton>
            Generate Final Plan
          </PrimaryButton>
        </RoomCardContainer>

      </ScrollView>
    </SafeAreaViewContainer>
  );
};
