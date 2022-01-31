/** @format */

import React from "react";
import { ScrollView, View } from "react-native";
import { RoomCard } from "../componenets/roomCard.component";
import styled from "styled-components/native";
import {
  SafeAreaViewContainer,
  TertiaryButton,
  RightGravity,
  SpacingSmall,
  Subtitle,
} from "../../../components/common.style";

const RoomCardContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
`;

export const TourGuideLandingScreen = () => {
  return (
    <SafeAreaViewContainer>
      <ScrollView>
        <SpacingSmall></SpacingSmall>
        <RightGravity>
          <TertiaryButton
            icon="folder-plus"
            onPress={() => console.log("Pressed")}
          >
            Add Room
          </TertiaryButton>
        </RightGravity>

        <SpacingSmall></SpacingSmall>
        <RoomCardContainer>
          <Subtitle>Hotel Rooms</Subtitle>
          <RoomCard />
        </RoomCardContainer>
      </ScrollView>
    </SafeAreaViewContainer>
  );
};
