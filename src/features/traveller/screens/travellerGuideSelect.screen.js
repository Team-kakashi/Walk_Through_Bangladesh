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
  Subtitle,H1,
} from "../../../components/common.style";
import { GuideCard } from "../components/guideCard.component";

const ServiceCardContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
`;

export const GuideSelectScreen = ({navigation}) => {
  return (
    <SafeAreaViewContainer>
      <ScrollView>
        <H1>Select Guide</H1>
        <SpacingSmall></SpacingSmall>
        <ServiceCardContainer>
          <GuideCard />
        </ServiceCardContainer>
      </ScrollView>
    </SafeAreaViewContainer>
  );
};
