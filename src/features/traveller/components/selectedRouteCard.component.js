/** @format */

import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import personIcon from "../../../../assets/icons/person.png";
import moneyIcon from "../../../../assets/icons/money.png";
import acIcon from "../../../../assets/icons/ac.png";
import { CardDetails } from "../../../components/roomCard.style";
import { PlanContentContext } from "../components/planContext";
import { IpRoute } from "../../../components/environmentVeriables";
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
  PrimaryButton,
  ParentMargin,
  SecondaryButton

} from "../../../components/common.style";
import {RouteCardDetails} from "../screens/TravellerRouteCardDetails";
import { use } from "../../../../Node_Server/router/userRoute.router";


var vehiclelist= [];
var guidelist = [];
var margetemplist = [];
var temp = 0;
export const SelectedRouteCard = () => {

  const {budget, route, setRoute, planid, setPlanid, routesobj, setRoutesobj,vehicleobj, setVehicleObj,guideobj, setGuideObj} = React.useContext(PlanContentContext);

  console.log("asto obj = ",routesobj)
  console.log("planid = ",planid)
   
   

  

   const getVehicle = (address) => {
    console.log("vehicle address",address);
    fetch(IpRoute + "/getVehicleForTraveller", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: address,
        budget: budget,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      //console.log(res.status())
      if (data == "Database error") {
        Alert.alert("Budget insufficient");
      } else {
        temp=0;
        setVehicleObj (  prevSelected => [...prevSelected, data] );
        console.log("for each get vehicle",vehicleobj);
      console.log("data = ",data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const forVehicle=()=>{

  var selectedRoute=[];
   var cnt=0;
   console.log(routesobj.length)
   for(var i=0;i<routesobj.length;i++){
     if(routesobj[i].planid==planid+1){
       selectedRoute[cnt++]=routesobj[i];
     }
     if(i==routesobj.length-1){
       console.log("array is",selectedRoute)
     }
   }

  for(var j=0;j<selectedRoute.length;j++){
    getVehicle(selectedRoute[j].route);
    //  if(selectedRoute[j].vehicle==true){
    //     getVehicle(selectedRoute[j].route);

    //  }
   }
  
  for(var i=0;i<vehicleobj.length;i++){
    vehiclelist[i]=vehicleobj[i].type+" : "+vehicleobj[i].v_name+"("+vehicleobj[i].rent+")";
  }

  for(var i=0;i<selectedRoute.lenght;i++){
    var row = {route:selectedRoute[i].route,
              vehicleAvilability:selectedRoute[i].vehicle,
              vehicleInfo:vehiclelist}
      margetemplist.push(row);
  }

  console.log(margetemplist);

}

 React.useEffect(() => {
 forVehicle();
 }, []);

  const list = margetemplist.map((i) => (
    <PlanCardDetails
      id={temp++}
      routeName={i.route}
      vehicleAvilability={i.vehicleAvilability}
      vehicleInfo={i.vehicleInfo}
      update={update}
    />
  ));

  temp = 0;

  async function update(id,Vehicle_selection,Guide_selection) {
    //await setRoute(travellerRoute[id]);
    //await setPlanid(id);
    console.log(" in parent id ", id," ",Vehicle_selection," ",Guide_selection);
   // console.log("hotel info id", travellerRoute[id]);
    //console.log("in update card info ",hotelObject)
    //console.log(navigation);
   // navigation.navigate("TravellerSelectedPlanScreen");
  }

  return (
            <>
              {list}
            </>
      );
    };

     
    


