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
  QuaternaryButton,
  Icon,
} from "../../../components/common.style";

export const VecicleCard = () => {
  return (
    <CardParent elevation={5}>
      <Row>
        <CardDetails>
          <Title>Vehicle Name</Title>
          <SpacingSmall />
          <Subtitle>Route Name</Subtitle>
          <Subtitle>Price</Subtitle>
          <SpacingSmall />
          <QuaternaryButton>Add Route</QuaternaryButton>
        </CardDetails>
        <ImagePreviewContainer>
          <ImagePreview />
        </ImagePreviewContainer>
      </Row>
    </CardParent>
  );
};
