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

import {PlanContentContext} from "./planContext";
import { IpRoute } from "../../../components/environmentVeriables";
import { Hotel } from "../screens/travellerHotelDetails";

var temp = 0 ;
export const RoomCardResult = ({navigation,}) => {

  const[hotelInfo ,setHotelInfo]= React.useState([{}]);
  

  const {persons, budget,setBudget, area, hotelObject, setHotelObject} = React.useContext(PlanContentContext);

  

  temp = 0;
  const list = hotelInfo.map((i)=>(
      
    <Hotel
    id = {temp++} 
    hotelname = {i.name}
    roomNumber={i.room_number} 
    persons={i.room_capacity}
    acOption = {i.room_ac_option}
    rent = {i.room_rent}
    update = {update}
    />

));


async function update (id) {
 
 
  await setHotelObject(hotelInfo[id]);
  console.log (" in parent id ",id)
  console.log ("hotel info id",hotelInfo[id])
  setBudget(budget-hotelInfo[id].room_rent);
  //console.log("in update card info ",hotelObject)
   //console.log(navigation);
   navigation.navigate("TravellerPlansResultScreen");
 
 }


  const getHotelData = () => {
    fetch(IpRoute+"/getHotelForTraveller", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        totalPerson: persons,
        address: area,
        budget: budget
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(res.status())
        if (data == "wrong credential") {
          Alert.alert(data);
        } else {
          setHotelInfo(data);
          temp = 0;
          console.log("hotel info ",data);
         
        }
      })
      .catch((err) => {
        console.log(err);
        //Alert.alert(err)
      });
  };

  useEffect(()=>{
    getHotelData();
   
  },[])
  
  // const {
  //   roomNumber = "511",
  //   personNumber = "5 Persons",
  //   photos = [
  //     "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
  //     "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
  //   ],
  //   AC = "Non AC",
  //   rent = "5000 BDT/Night",
  // } = roomCardInfo;

  return (
<>
 {list}
</>
      
    // <CardParent elevation={5}>
      
    //   <Row>
    //     <CardDetails>
        
    //       <Title>Hotel Name</Title>
    //       <Title>Room Number</Title>

    //       <SpacingSmall />

    //       <IconTextContainer>
    //         <Icon source={personIcon} />
    //         <Subtitle > Persons</Subtitle>
    //       </IconTextContainer>
    //       <IconTextContainer>
    //         <Icon source={acIcon} />
    //         <Subtitle ></Subtitle>
    //       </IconTextContainer>
    //       <IconTextContainer>
    //         <Icon source={moneyIcon} />
    //         <Subtitle > BDT/Night</Subtitle>
    //       </IconTextContainer>
    //     </CardDetails>
    //     <ImagePreviewContainer>
    //       <ImagePreview source={{ uri: photos[0] }} />
    //       <ImagePreview source={{ uri: photos[1] }} />
    //     </ImagePreviewContainer>
    //   </Row>
       
    // </CardParent>
    

  );
};
