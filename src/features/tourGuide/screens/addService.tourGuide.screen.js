/** @format */

import React, { useEffect, useState } from "react";
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

import {user_id} from "../../authentication/screens/logIn.screen";

var serviceRoute;
export const AddServiceScreen = ({navigation}) =>{

  const route = ["Ratargul", "Bisanakandi","Jaflong"];

  
  const [cost, setCost] = React.useState("");
  const [yearOfExperience, setYearOfExperience] = React.useState("");

  const selectrouteValue=(item)=>{
    console.log("my slected item", item);
    serviceRoute = item;
  }

  const onPressAdd = () => {
    console.log(user_id);
    if (cost == "" || yearOfExperience == "") {
      Alert.alert("Fill all fields");
    } else {
      submitData();
      Alert.alert(serviceRoute);
      setCost("");
      setYearOfExperience("");
    }
  };


  const getArea = () => {
    fetch(IpRoute + "/getRoute", {
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
      console.log(data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };

  useEffect(()=>{
    //getArea();
  },[])

  const submitData = () => {
    fetch(IpRoute + "/addService", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      userId: user_id,
      route: serviceRoute,
      price : cost,
      year_of_experience: yearOfExperience,

      }),
    })
      .then((res) => res.status)
      .then((data1) => {
        //console.log(res.status())
        if (data1 == 200) {
          console.log(data1);
          navigation.push("TourGuideLandingScreen");
          Alert.alert("Service successfully Added !");
        } else if (data1 == 500) {
          Alert.alert("Service route already exists !");
        } else {
          Alert.alert("Database error !");
        }
      })
      .catch((err) => {
        console.log(err);
        //Alert.alert(err)
      });
  };


return(
  <SafeAreaViewContainer>
    <ScrollView>
      <H1>Add Service</H1>

      <SpacingLarge />
      <ModalView
      Array={route}
      Title="Routes"
      PickerValue={selectrouteValue}
      ></ModalView>

      <TextInputTheme 
      label="Cost"
      onChangeText={setCost}
      value={cost}
      ></TextInputTheme>
      <TextInputTheme 
      label="Year of Experience"
      onChangeText={setYearOfExperience}
      value={yearOfExperience}
      ></TextInputTheme>

      <SpacingLarge />

      <PrimaryButton icon="plus-circle" onPress={onPressAdd}>Add</PrimaryButton>
      <SpacingLarge />
    </ScrollView>
  </SafeAreaViewContainer>
);
};
/** @format */
