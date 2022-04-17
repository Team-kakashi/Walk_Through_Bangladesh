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
import {Vehicle} from "./vehicle";

//var vehicleid;
var temp = 0 ;
export const VecicleCard = ({
  navigation,
}) => {
  const[vehicle,setVehicle]= React.useState([{}]);
     const[loadPage,setloadPage]= useState(true);
  const [vid, setVid] =useContext(ContentContext);

  
  temp = 0;
    const list = vehicle.map((i)=>(
      
        <Vehicle 
        id = {temp++} 
        v_name = {i.v_name}
        route={i.route} 
        rent={i.rent}
        update = {update}
        />

    ));

    function update(id){
      console.log("card id ",id);

      setVid(vehicle[id].v_id);
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
          console.log("vehivle data",data);
          setVehicle(data);
          temp = 0;
          
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
    {list}
    </>
//     <>
//     {loadPage 

    
//    ?<> 
   
//     {vehicle.map(i =>(
//     <CardParent elevation={5}>
//       <Row>
//         <CardDetails>
//           <Title>Vehicle Name : {i.v_name}</Title>
//           <SpacingSmall />
//           <Subtitle>Route: {i.route}</Subtitle>
//           <Subtitle>Price: {i.rent}</Subtitle>
//           <SpacingSmall />
         
          
//           <QuaternaryButton onPress={onPressAdd} {...vehicleid=i.v_id}>Add Route</QuaternaryButton>
//         </CardDetails>
//         <ImagePreviewContainer>
//           <ImagePreview />
//         </ImagePreviewContainer>
//       </Row>
//     </CardParent>
//     ))}
//     </>
//     :<></>
// }
//     </>
  );
};
