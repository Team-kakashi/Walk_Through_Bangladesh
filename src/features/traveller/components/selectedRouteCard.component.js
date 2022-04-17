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


export const SelectedRouteCard = () => {

  const {days, setDays, persons, setPersons, budget, setBudget, area, setArea, route, setRoute, planid, setPlanid, routesobj, setRoutesobj} = React.useContext(PlanContentContext);

  console.log("asto obj = ",routesobj)
  console.log("planid = ",planid)
   
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
  
  return (


      <View>
        

          <ParentMargin>
            <Title>Route Name</Title>          
          </ParentMargin>

          <SpacingSmall />

            <PrimaryButton>
                Select Vehicle
            </PrimaryButton>

            <SpacingSmall />

            <PrimaryButton>
                Select Guide
            </PrimaryButton>

      </View>

    

  );
};
