import React, { useState, useEffect, useContext } from "react";
import moneyIcon from "../../../../assets/icons/money.png";
import timerIcon from "../../../../assets/icons/timer.png";
import {AddRouteScreen} from "../components/addRoute.vehicleOwner.screen";

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
import { IpRoute } from "../../../components/environmentVeriables";
import { user_id } from "../../authentication/screens/logIn.screen";
import {ContentContext} from "./vehicleContext";


export const Vehicle = (props) => {

    console.log("props in vehicle ",props);
    
    function onPressAdd () {
     props.update(props.id);
    }
    
    
    return (
     
      <CardParent elevation={5}>
        <Row>
          <CardDetails>
            <Title>Vehicle Name : {props.v_name}</Title>
            <SpacingSmall />
            <Subtitle>Route: {props.route}</Subtitle>
            <Subtitle>Price: {props.rent}</Subtitle>
            <SpacingSmall />
            <QuaternaryButton onPress={onPressAdd}>Add Route</QuaternaryButton>
          </CardDetails>
          <ImagePreviewContainer>
            <ImagePreview />
          </ImagePreviewContainer>
        </Row>
      </CardParent>
     
    );
  };
  