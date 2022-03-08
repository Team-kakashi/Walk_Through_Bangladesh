/** @format */

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

export const VecicleCard = ({
  navigation,
}) => {
  const[vehicle,setVehicle]= React.useState([{}]);
  const[loadPage,setloadPage]= useState(true);
  const [vid, setVid] =useContext(ContentContext);

  const onPressAdd = (v) => {
   // console.log(navigation);
   console.log(vid);
   //var vid = 1;
   
   setVid(v);
    navigation.navigate("AddRouteScreen",vid);
  }
  
  const submitData = () => {
    console.log('as',loadPage)
   // setloadPage(true);
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
          //console.log(data);
          setVehicle(data);

          
          console.log("abc",vehicle);
          
          //console.log(vehicle.length);
          console.log("price ",data[0].rent);
          console.log(loadPage)
          if(data[0].v_id==null){
            //console.log("if e dhukse kn")
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
          <Subtitle>Price: {i.price}</Subtitle>
          <SpacingSmall />
          <QuaternaryButton onPress={onPressAdd (i.v_id)}>Add Route</QuaternaryButton>
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
