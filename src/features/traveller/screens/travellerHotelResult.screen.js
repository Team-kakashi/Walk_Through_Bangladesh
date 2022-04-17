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
import { RoomCardResult } from "../components/hotelRoomCard.component";



const RoomCardContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
`;


export const TravellerHottelResultScreen = ({navigation}) => {
  return (
    <SafeAreaViewContainer>
      <ScrollView>
        <H1>Choose Room</H1>
        <SpacingSmall></SpacingSmall>
        <RoomCardContainer>
          <ParentMargin>
            <Subtitle>Rooms</Subtitle>
          </ParentMargin>
          <RoomCardResult navigation={navigation}/>
        </RoomCardContainer>
      </ScrollView>
    </SafeAreaViewContainer>
  );
};
