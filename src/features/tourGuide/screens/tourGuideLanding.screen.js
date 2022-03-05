/** @format */

import React from "react";
import { ScrollView, View } from "react-native";
import { ServiceCard } from "../components/serviceCard.component";
import styled from "styled-components/native";
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

export const TourGuideLandingScreen = ({navigation}) => {
  return (
    <SafeAreaViewContainer>
      <ScrollView>
        <SpacingSmall></SpacingSmall>

        <RightGravity>
          <TertiaryButton
            icon="folder-plus"
            onPress={() => navigation.navigate("AddServiceScreen")}
          >
            Add Service
          </TertiaryButton>
        </RightGravity>

        <SpacingSmall></SpacingSmall>
        <ServiceCardContainer>
          <ParentMargin>
            <Subtitle>Services</Subtitle>
          </ParentMargin>
          <ServiceCard />
        </ServiceCardContainer>
      </ScrollView>
    </SafeAreaViewContainer>
  );
};
