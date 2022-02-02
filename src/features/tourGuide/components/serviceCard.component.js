/** @format */

import React, {useState,useEffect} from "react";
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
  Icon,
} from "../../../components/common.style";
import { IpRoute } from "../../../components/environmentVeriables";
import { user_id } from "../../authentication/screens/logIn.screen";


var keyid=0;
//var x=0;
export const ServiceCard = ({ serviceCardInfo = {} }) => {

  const[service,setService]= React.useState([{}]);
  const[loadPage,setloadPage]= useState(false);
  
  const submitData = () => {
    fetch(IpRoute+"/getService", {
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
          setService(data);

          console.log(data);
          console.log(service.length)
          if(data.length==0){
            setloadPage(true);
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
  
  const {
    tripTitle = "Sylhet - Ratargul",
    experience = "5 years",
    photos = [
      "https://www.travelmate.com.bd/wp-content/uploads/2019/07/Ratargul-2.jpg",
    ],
    cost = "650 BDT",
  } = serviceCardInfo;

  return (
    <>
    {loadPage ?<>

    </>
    :<> 
    { service.map(i =>(

    <CardParent elevation={5}>
      <Row>
        <CardDetails>
          <Title key={keyid++}>{i.area}-{i.route}</Title>
          <SpacingSmall />
          <IconTextContainer>
            <Icon source={timerIcon} />
            <Subtitle>{i.year_of_experience} Years</Subtitle>
          </IconTextContainer>
          <IconTextContainer>
            <Icon source={moneyIcon} />
            <Subtitle>{i.price} BDT</Subtitle>
          </IconTextContainer>
        </CardDetails>
        <ImagePreviewContainer>
          <ImagePreview source={{ uri: photos[0] }} />
        </ImagePreviewContainer>
      </Row>
    </CardParent>
    ))}
    </>
}
    </>
  );
};

//npm install @expo-google-fonts/roboto-slab
