/** @format */

import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const CardDetails = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[2]};
`;
const CardInfo = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 16;
  color: ${(props) => props.theme.colors.ui.primary};
`;
const RoomCardParent = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[2]};
  margin: ${(props) => props.theme.space[2]};
`;
const CardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[2]};
`;

export const RoomCard = ({ roomCardInfo = {} }) => {
  const {
    roomNumber = "511",
    personNumber = "5 Persons",
    photos = ["https://picsum.photos/id/1/200/300"],
    AC = "Non AC",
    rent = "5000 BDT/Night",
  } = roomCardInfo;

  return (
    <RoomCardParent elevation={5}>
      <CardCover key={roomNumber} source={{ uri: photos[0] }} />

      <CardDetails>
        <CardInfo>{roomNumber}</CardInfo>
        <CardInfo>{personNumber}</CardInfo>
        <CardInfo>{AC}</CardInfo>
        <CardInfo>{rent}</CardInfo>
      </CardDetails>
    </RoomCardParent>
  );
};

//npm install @expo-google-fonts/roboto-slab
