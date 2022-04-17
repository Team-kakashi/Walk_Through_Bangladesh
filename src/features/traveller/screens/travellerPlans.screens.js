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

const RoomCardContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
`;

import { PlanCard } from "../components/planCard.component";



export const TravellerPlansResultScreen = ({navigation}) => {

  
  
 
  
  
  return (
    <SafeAreaViewContainer>
      <ScrollView>
        <H1>Choose a Plan</H1>
        <SpacingSmall></SpacingSmall>
        <RoomCardContainer>
          <ParentMargin>
            <Subtitle>Generated Plans</Subtitle>
          </ParentMargin>
          <PlanCard navigation={navigation}/>
        </RoomCardContainer>
      </ScrollView>
    </SafeAreaViewContainer>
  );
};
