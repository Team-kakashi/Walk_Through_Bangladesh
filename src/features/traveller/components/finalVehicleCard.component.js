/** @format */

import React, {
  useState,
  useEffect,
  useContext,
} from "react";
import moneyIcon from "../../../../assets/icons/money.png";
import timerIcon from "../../../../assets/icons/timer.png";
import truckIcon from "../../../../assets/icons/truck.png";

import { CardDetails } from "../../../components/roomCard.style";
import {
  IconTextContainer,
  CardParent,
  Row,
  Subtitle,
  Title,
  ImagePreview,
  ImagePreviewContainer,
  SpacingSmall,
  QuaternaryButton,
  Icon,
  Button,
  VericalDivider,
} from "../../../components/common.style";
import { View } from "react-native-web";

export const FinalVehicleCard = (props) => {
  console.log("props in vehicle ", props);

  return (
    <Row>
      <VericalDivider />
      <View>
        <IconTextContainer>
          <Icon source={truckIcon} />
          <Subtitle>Vehicle</Subtitle>
        </IconTextContainer>
        <Subtitle>Name:</Subtitle>
        <Subtitle>Type:</Subtitle>
        <Subtitle>AC:</Subtitle>
        <Subtitle>Fair:</Subtitle>
        <Subtitle>Phone:</Subtitle>
      </View>
    </Row>
  );
};
