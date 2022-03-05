/** @format */

import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import personIcon from "../../../../assets/icons/person.png";
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
} from "../../../components/common.style";
import {IpRoute} from "../../../components/environmentVeriables";
import {user_id} from "../../authentication/screens/logIn.screen"

var keyid=0;
var x=0;
export const RoomCard = ({ roomCardInfo = {} }) => {

  const[room,setRoom]=useState([{}]);
  const[loadPage,setloadPage]= useState(true);
  
  const submitData = () => {
    fetch(IpRoute+"/getRoom", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(res.status())
        if (data == "wrong credential") {
          Alert.alert(data);
        } else {
          setRoom(data);
          console.log(data);
          console.log(data[0].room_number);
          if(data[0].room_number==null){
            setloadPage(false);
          };
          
        }
      })
      .catch((err) => {
        console.log(err);
        //Alert.alert(err)
      });
  };
 
  useEffect(()=>{
    submitData();
    console.log(room);
  },[])
  
  const {
    roomNumber = "511",
    personNumber = "5 Persons",
    photos = [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
    ],
    AC = "Non AC",
    rent = "5000 BDT/Night",
  } = roomCardInfo;

  return (
    <>
    {loadPage 
    ?<>
    { room.map(i =>(
      
    <CardParent elevation={5}>
      
      <Row>
        <CardDetails>
        
          <Title key={keyid++}>{i.room_number}</Title>
        
          <SpacingSmall />

          <IconTextContainer>
            <Icon source={personIcon} />
            <Subtitle >{i.room_capacity} Persons</Subtitle>
          </IconTextContainer>
          <IconTextContainer>
            <Icon source={acIcon} />
            <Subtitle >{i.room_ac_option}</Subtitle>
          </IconTextContainer>
          <IconTextContainer>
            <Icon source={moneyIcon} />
            <Subtitle >{i.room_rent} BDT/Night</Subtitle>
          </IconTextContainer>
        </CardDetails>
        <ImagePreviewContainer>
          <ImagePreview source={{ uri: photos[0] }} />
          <ImagePreview source={{ uri: photos[1] }} />
        </ImagePreviewContainer>
      </Row>
       
    </CardParent>
    
     ))}
    </>
    :<></>
}
     </>
  );
};

//npm install @expo-google-fonts/roboto-slab
