/** @format */

import React, { useState } from "react";
import { ScrollView, View,Alert } from "react-native";
import {IpRoute} from "../../../components/environmentVeriables";
import {
  SafeAreaViewContainer,
  TextInputTheme,
  SpacingLarge,
  PrimaryButton,
  H1,
} from "../../../components/common.style";
import { ModalView } from "../../../components/modalView.view";

export const AddRoomScreen = ({navigation}) => {

  const AC_option = ["AC","Non_AC"];
  const Capacity = [1,2,3,4];

  const [number,setNumber] = React.useState("");
  const [rent,setRent] = React.useState("");
  const [description,setDescription] =React.useState("");

  const onPressAdd = () => {
    setNumber('');
    setRent('');
    setDescription('');
     if (
       number == "" ||
       rent == ""
       
     ) {
       Alert.alert("Fill all fields");
     } else {
       submitData();
     }
   };

   const submitData = () => {
    fetch(IpRoute+"/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        number: number,
        rent: rent,
        description: description,

      }),
    })
      .then((res) => res.status)
      .then((data) => {
        //console.log(res.status())
        if (data == 200) {
          console.log(data);
          navigation.navigate("HotelManagerLandingScreen");
          Alert.alert("Room successfully Added !");
        } else Alert.alert("Room already exists !");
      })
      .catch((err) => {
        console.log(err);
        //Alert.alert(err)
      });
  };

  return (
    <SafeAreaViewContainer>
      <ScrollView>
        <H1>Add Room</H1>

        <SpacingLarge />

        <TextInputTheme 
        label="Number"
        
        ></TextInputTheme>
        <TextInputTheme 
        label="Rent"
        
        ></TextInputTheme>
        <TextInputTheme 
        label="Description"
        
        ></TextInputTheme>

        <ModalView Array={AC_option} Title="Ac_options"></ModalView>
        <ModalView Array={Capacity} Title="Capacities"></ModalView>

        <SpacingLarge />

        <PrimaryButton
          icon="plus-circle"
          onPress={onPressAdd}
        >
          Add
        </PrimaryButton>
      </ScrollView>
    </SafeAreaViewContainer>
  );
};
/** @format */
