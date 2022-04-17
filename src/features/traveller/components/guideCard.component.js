/** @format */

import React, { useState, useEffect } from "react";
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

export const GuideCard = ({ serviceCardInfo = {} }) => {
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
          <Title>Guide Name</Title>
          <SpacingSmall />
          <IconTextContainer>
            <Icon source={timerIcon} />
            <Subtitle> Years</Subtitle>
          </IconTextContainer>
          <IconTextContainer>
            <Icon source={moneyIcon} />
            <Subtitle> BDT</Subtitle>
          </IconTextContainer>
        </CardDetails>
        <ImagePreviewContainer>
          <ImagePreview />
        </ImagePreviewContainer>
      </Row>
    </CardParent>
  );
};
