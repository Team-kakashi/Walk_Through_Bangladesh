/** @format */

import React, {
  useState,
  useEffect,
  useContext,
} from "react";
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
  Button,
} from "../../../components/common.style";

export const VehicleCard = (props) => {
  console.log("props in vehicle ", props);

  function onPressAdd() {
    props.update(props.id);
  }

  return (
    <CardParent elevation={5}>
      <Row>
        <CardDetails>
          <Title>Vehicle Name : {props.v_name}</Title>
          <SpacingSmall />
          <Subtitle>Price: {props.rent}</Subtitle>
          <SpacingSmall />
        </CardDetails>
      </Row>
    </CardParent>
  );
};
