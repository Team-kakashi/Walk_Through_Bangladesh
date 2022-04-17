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


export const PlanCardDetails = (props) => {

  photos = [
           "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
           "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
         ],

    console.log("props in routplan ",props);
    
    function onPressAdd () {
        console.log("in on press id ",props.id)
     props.update(props.id);
    }
    
    
    return (
    
      <CardParent elevation={5}>
       <TouchableOpacity onPress={onPressAdd}>
      <Row>
        <CardDetails>
            
            <Subtitle >{props.routeName}</Subtitle>
            <SpacingSmall/>
            


        </CardDetails>


        <ImagePreviewContainer>
          <ImagePreview source={{ uri: photos[0] }} />
          <ImagePreview source={{ uri: photos[1] }} />
        </ImagePreviewContainer>
      </Row>
      </TouchableOpacity>
    </CardParent>
    
      
    );
  };
  