/** @format */

import React from "react";
import moneyIcon from "../../../../assets/icons/money.png";
import timerIcon from "../../../../assets/icons/timer.png";

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
  Icon,
} from "../../../components/common.style";

export const ServiceCard = ({ serviceCardInfo = {} }) => {
  const {
    tripTitle = "Sylhet - Ratargul",
    experience = "5 years",
    photos = [
      "https://www.travelmate.com.bd/wp-content/uploads/2019/07/Ratargul-2.jpg",
    ],
    cost = "650 BDT",
  } = serviceCardInfo;

  return (
    <CardParent elevation={5}>
      <Row>
        <CardDetails>
          <Title>{tripTitle}</Title>
          <SpacingSmall />
          <IconTextContainer>
            <Icon source={timerIcon} />
            <Subtitle>{experience}</Subtitle>
          </IconTextContainer>
          <IconTextContainer>
            <Icon source={moneyIcon} />
            <Subtitle>{cost}</Subtitle>
          </IconTextContainer>
        </CardDetails>
        <ImagePreviewContainer>
          <ImagePreview source={{ uri: photos[0] }} />
        </ImagePreviewContainer>
      </Row>
    </CardParent>
  );
};

//npm install @expo-google-fonts/roboto-slab
