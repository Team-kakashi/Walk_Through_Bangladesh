/** @format */

import React, { useEffect, useState, useContext } from "react";
import { ScrollView, View, Alert } from "react-native";
import { IpRoute } from "../../../components/environmentVeriables";
import {
  SafeAreaViewContainer,
  TextInputTheme,
  SpacingLarge,
  PrimaryButton,
  H1,
} from "../../../components/common.style";
import {
  ModalView,
  ItemChoise,
} from "../../../components/modalView.view";

import { user_id } from "../../authentication/screens/logIn.screen";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

import {ContentContext} from "./vehicleContext";

var serviceRoute;
var routeArry=[];
export const AddRouteScreen = ({navigation}) => {
  const [vid, setVid] =useContext(ContentContext);
  console.log("v id in route",vid);
  //const route = ["Ratargul", "Bisanakandi","Jaflong"];
  const [cost, setCost] = React.useState("");

  const selectrouteValue=(item)=>{
    console.log("my slected item", item);
    serviceRoute = item;
  }

  const onPressAdd = () => {
    
    if (cost == "") {
      Alert.alert("Fill all fields");
    } else {
      submitData();
      Alert.alert(serviceRoute);
      setCost("");
      
    }
  };

  const getArea = () => {
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
          
          getRoute(data[0].area);
          console.log(data);
          
        }
      })
      .catch((err) => {
        console.log(err);
        //Alert.alert(err)
      });
  };


  const getRoute = (area) => {
    fetch(IpRoute + "/getAreaRoute", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        area: area,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      //console.log(res.status())
      if (data == "wrong credential") {
        Alert.alert(data);
      } else {
        var j=0;
        for(var i=0;i<data.length;i++){
          if(data[i].vehicle==true){
            routeArry[j++]=data[i].route;
          }
          if(i==data.length-1){
            console.log(routeArry);
          }
        }
        
        
      console.log(data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };

  useEffect(()=>{
    getArea();
  },[])

  const submitData = () => {
    fetch(IpRoute + "/addVehicleRoute", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ownerid : user_id,
        route: serviceRoute,
        rent: cost,
        v_id: vid,
    
      }),
    })
      .then((res) => res.status)
      .then((data1) => {
        //console.log(res.status())
        if (data1 == 200) {
          console.log(data1);
          navigation.push("VehicleOwnerLandingScreen");
          Alert.alert("Route successfully Added !");
        } else if (data1 == 500) {
          Alert.alert("Route already exists !");
        } else {
          Alert.alert("Database error !");
        }
      })
      .catch((err) => {
        console.log(err);
        //Alert.alert(err)
      });
  };


  return (
    <SafeAreaViewContainer>
      <ScrollView>
        <H1>Add Route</H1>

        <SpacingLarge />
        <ModalView
        Array={routeArry}
        Title="Routes"
        PickerValue={selectrouteValue}></ModalView>
        <TextInputTheme
        label="Price"
        onChangeText={setCost}
        value={cost}></TextInputTheme>

        <SpacingLarge />

        <PrimaryButton icon="plus-circle" onPress={onPressAdd}>
          Add
        </PrimaryButton>
        <SpacingLarge />
      </ScrollView>
    </SafeAreaViewContainer>
  );
};
/** @format */
