/** @format */

import React, { useState, useEffect } from "react";
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
} from "../../../components/common.style";
import { IpRoute } from "../../../components/environmentVeriables";
import { user_id } from "../../authentication/screens/logIn.screen";

export const VecicleCard = () => {
  const[vehicle,setVehicle]= React.useState([{}]);
  const[loadPage,setloadPage]= useState(true);
  
  const submitData = () => {
    fetch(IpRoute+"/getVehicle", {
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
          setVehicle(data);

          
          console.log(vehicle);
          
          //console.log(vehicle.length);
          console.log("price ",data[0].rent);
          if(data[0].rent==null){
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
   
  },[])
  return (
    <>
    {loadPage

    
    ?<> 
    {vehicle.map(i =>(
    <CardParent elevation={5}>
      <Row>
        <CardDetails>
          <Title>Vehicle Name : {i.v_name}</Title>
          <SpacingSmall />
          <Subtitle>Route: {i.route}</Subtitle>
          <Subtitle>Price: {i.rent}</Subtitle>
          <SpacingSmall />
          <QuaternaryButton onPress={<AddRouteScreen vid="1"/>} >Add Route</QuaternaryButton>
        </CardDetails>
        <ImagePreviewContainer>
          <ImagePreview />
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
