/** @format */

import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { VecicleCard } from "../components/vehicleCard.component";
import {
  SafeAreaViewContainer,
  TertiaryButton,
  RightGravity,
  SpacingSmall,
  ParentMargin,
  Subtitle,
} from "../../../components/common.style";

const ServiceCardContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
`;

export const VehicleOwnerLandingScreen = ({
  navigation,
}) => {
  return (
    <SafeAreaViewContainer>
      <ScrollView>
        <SpacingSmall></SpacingSmall>

        <RightGravity>
          <TertiaryButton icon="folder-plus"
          onPress={() => navigation.navigate("AddVehicleScreen")}
          >
            Add Vehicle
          </TertiaryButton>
        </RightGravity>

        <SpacingSmall></SpacingSmall>
        <ServiceCardContainer>
          <ParentMargin>
            <Subtitle>My Vehicles</Subtitle>
          </ParentMargin>
          <VecicleCard navigation={navigation}/>
        </ServiceCardContainer>
      </ScrollView>
    </SafeAreaViewContainer>
  );
};
