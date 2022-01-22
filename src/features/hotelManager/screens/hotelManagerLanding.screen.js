/** @format */

import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { RoomCard } from "../componenets/roomCard.component";
import styled from "styled-components/native";

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const RoomCardContainer = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[2]};
`;
const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const HotelManagerLandingScreen = () => (
  <SafeAreaViewContainer>
    <SearchView>
      <Searchbar />
    </SearchView>

    <RoomCardContainer>
      <RoomCard />
    </RoomCardContainer>
  </SafeAreaViewContainer>
);
