/** @format */

import React, {useEffect, useState} from "react";
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
import { IpRoute } from "../../../components/environmentVeriables";
import { user_id } from "../../authentication/screens/logIn.screen";

var keyid=0;
export const BlogPreviewCard = ({ blogCardInfo = {} }) => {

  const[service,setService]= React.useState([{}]);
  const[loadPage,setloadPage]= useState(true);
  
  const submitData = () => {
    fetch(IpRoute+"/getBlog", {
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
          console.log("price ",data[0].price);
          if(data.length==0){
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
  
  const {
    blogTitle = "My experience of a thrilling trip to SAINT MARTIN ISLAND",
    trip = "Cox's Bazar - Saint Martin",
    expense = "4000 BDT",
    recomendation = "Recommanded",

    photos = [
      "http://unb.com.bd/filemanager/photos/64/Bisnakandi%20Sylhet%20Bangladesh.jpg",
    ],
  } = blogCardInfo;

  return (
    <>
    {loadPage

    
    ?<> 
    { service.map(i =>(
    <CardParent elevation={5}>
      <CardDetails>
        <ImagePreviewContainer>
          <CoverImagePreview source={{ uri: photos[0] }} />
        </ImagePreviewContainer>
        <SpacingSmall />

        <Title key={keyid++}>{i.title}</Title>
        <Subtitle>{i.area}-{i.route}</Subtitle>
        <Subtitle>{i.price}</Subtitle>
        <Subtitle>{i.recommendation}</Subtitle>
      </CardDetails>
    </CardParent>
    ))}
    </>
    : <></>
}
</>
  );
};
