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
  CoverImagePreview,
  ImagePreviewContainer,
  SpacingSmall,
  PositiveSubtitle,
} from "../../../components/common.style";

export const BlogPreviewCard = ({ blogCardInfo = {} }) => {
  const {
    blogTitle = "My experience of a thrilling trip to SAINT MARTIN ISLAND",
    trip = "Cox's Bazar - Saint Martin",
    expense = "4000 BDT",
    recomendation = "Recommanded",

    photos = [
      "https://www.travelmate.com.bd/wp-content/uploads/2022/01/St-Martins-Island-1000x530.jpg",
    ],
  } = blogCardInfo;

  return (
    <CardParent elevation={5}>
      <CardDetails>
        <ImagePreviewContainer>
          <CoverImagePreview source={{ uri: photos[0] }} />
        </ImagePreviewContainer>
        <SpacingSmall />

        <Title>{blogTitle}</Title>
        <Subtitle>{trip}</Subtitle>
        <Subtitle>{expense}</Subtitle>
        <Subtitle>{recomendation}</Subtitle>
      </CardDetails>
    </CardParent>
  );
};
