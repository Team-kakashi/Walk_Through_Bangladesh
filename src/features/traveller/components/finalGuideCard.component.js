/** @format */

import React, {
  useState,
  useEffect,
  useContext,
} from "react";
import moneyIcon from "../../../../assets/icons/money.png";
import timerIcon from "../../../../assets/icons/timer.png";
import mapIcon from "../../../../assets/icons/map.png";

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

export const FinalGuideCard = (props) => {
  console.log("props in vehicle ", props);

  return (
    <Row>
      <VericalDivider />
      <View>
        <IconTextContainer>
          <Icon source={mapIcon} />
          <Subtitle>Guide</Subtitle>
        </IconTextContainer>
        <Subtitle>Name:</Subtitle>
        <Subtitle>Fair:</Subtitle>
        <Subtitle>Phone:</Subtitle>
      </View>
    </Row>
  );
};
