/** @format */

import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import {
  SafeAreaViewContainer,
  TertiaryButton,
  RightGravity,
  SpacingSmall,
  ParentMargin,
  Subtitle,
  H1,
} from "../../../components/common.style";
import { VehicleCard } from "../components/vehicleCard.component";

const ServiceCardContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
`;

export const VehicleSelectScreen = ({ navigation }) => {
  return (
    <SafeAreaViewContainer>
      <ScrollView>
        <H1>Select Vehicle</H1>
        <SpacingSmall></SpacingSmall>
        <ServiceCardContainer>
          <VehicleCard />
        </ServiceCardContainer>
      </ScrollView>
    </SafeAreaViewContainer>
  );
};
