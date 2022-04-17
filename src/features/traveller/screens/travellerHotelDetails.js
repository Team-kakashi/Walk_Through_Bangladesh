import React, { useState, useEffect, useContext } from "react";
import moneyIcon from "../../../../assets/icons/money.png";
import timerIcon from "../../../../assets/icons/timer.png";
import personIcon from "../../../../assets/icons/person.png";
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
  SpacingSmall,
  QuaternaryButton,
  Icon,
  Button,
} from "../../../components/common.style";
import { IpRoute } from "../../../components/environmentVeriables";
import { user_id } from "../../authentication/screens/logIn.screen";

import { Touchable, TouchableOpacity } from "react-native";


export const Hotel = (props) => {

   // console.log("props in hotel ",props);
    
    function onPressAdd () {
        console.log("in on press id ",props.id)
     props.update(props.id);
    }
    
    
    return (
    
        <CardParent elevation={5}>
       <TouchableOpacity onPress={onPressAdd}>
        <Row>
          <CardDetails>
          
            <Title>{props.hotelname}</Title>
            <Title>{props.roomNumber}</Title>
  
            <SpacingSmall />
  
            <IconTextContainer>
              <Icon source={personIcon} />
              <Subtitle >{props.persons} Persons</Subtitle>
            </IconTextContainer>
            <IconTextContainer>
              <Icon source={acIcon} />
              <Subtitle >{props.acOption}</Subtitle>
            </IconTextContainer>
            <IconTextContainer>
              <Icon source={moneyIcon} />
              <Subtitle >{props.rent} BDT/Night</Subtitle>
            </IconTextContainer>
          </CardDetails>
          {/* <ImagePreviewContainer>
            <ImagePreview source={{ uri: photos[0] }} />
            <ImagePreview source={{ uri: photos[1] }} />
          </ImagePreviewContainer> */}
        </Row>
        </TouchableOpacity>
      </CardParent>
    
      
    );
  };
  