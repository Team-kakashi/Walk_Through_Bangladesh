/** @format */

import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import personIcon from "../../../../assets/icons/person.png";
import Circle from "../../../../assets/icons/ellipse.png";
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
  SpacingSmall,
  PrimaryButton,
  ParentMargin,
  SecondaryButton,
} from "../../../components/common.style";
import { FinalVehicleCard } from "./finalVehicleCard.component";
import { FinalGuideCard } from "./finalGuideCard.component";

export const FinalRouteCard = () => {
  return (
    <CardParent>
      <IconTextContainer>
        <Icon source={Circle} />
        <Title>Route Name</Title>
      </IconTextContainer>

      <FinalVehicleCard />
      <FinalGuideCard />
    </CardParent>
  );
};
