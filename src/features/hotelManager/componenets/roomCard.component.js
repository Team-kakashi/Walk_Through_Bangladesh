/** @format */

import React from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import personIcon from "../../../../assets/icons/person.png";
import moneyIcon from "../../../../assets/icons/money.png";
import acIcon from "../../../../assets/icons/ac.png";
import { CardDetails } from "../../../components/roomCard.style";
import {
  IconTextContainer,
  CardParent,
  Row,
  Subtitle,
  Title,
  ImagePreview,
  ImagePreviewContainer,
  Icon,
} from "../../../components/common.style";

export const RoomCard = ({ roomCardInfo = {} }) => {
  const {
    roomNumber = "511",
    personNumber = "5 Persons",
    photos = [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
    ],
    AC = "Non AC",
    rent = "5000 BDT/Night",
  } = roomCardInfo;

  return (
    <CardParent elevation={5}>
      <Row>
        <CardDetails>
          <Title>{roomNumber}</Title>

          <SpacingSmall />

          <IconTextContainer>
            <Icon source={personIcon} />
            <Subtitle>{personNumber}</Subtitle>
          </IconTextContainer>
          <IconTextContainer>
            <Icon source={acIcon} />
            <Subtitle>{AC}</Subtitle>
          </IconTextContainer>
          <IconTextContainer>
            <Icon source={moneyIcon} />
            <Subtitle>{rent}</Subtitle>
          </IconTextContainer>
        </CardDetails>
        <ImagePreviewContainer>
          <ImagePreview source={{ uri: photos[0] }} />
          <ImagePreview source={{ uri: photos[1] }} />
        </ImagePreviewContainer>
      </Row>
    </CardParent>
  );
};

//npm install @expo-google-fonts/roboto-slab
