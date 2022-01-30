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
import { ModalView, ItemChoise } from "../../../components/modalView.view";

var ac_op;
var cap;
export const AddRoomScreen = ({navigation}) => {

  const AC_option = ["AC","Non_AC"];
  const Capacity = [1,2,3,4];

  const [number,setNumber] = React.useState("");
  const [rent,setRent] = React.useState("");
  const [description,setDescription] =React.useState("");

  const onPressAdd = () => {
   // console.log(ItemChoise);

     if (
       number == "" ||
       rent == ""
       
     ) {
       Alert.alert("Fill all fields");
     } else {
  
       submitData();
       setNumber('');
       setRent('');
       setDescription('');
     }
   };

   function selectPickerValue(item){
    console.log('my slected item',item);
    ac_op = item;
   }

   function selectCapacityValue(item){
    console.log('my slected item',item);
    cap = item;
   }


   const submitData = () => {
    fetch(IpRoute+"/addRoom", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        room_number: number,
        room_rent: rent,
        room_capacity: cap,
        room_ac_option: ac_op,
        room_description : description,

      }),
    })
      .then((res) => res.status)
      .then((data) => {
        //console.log(res.status())
        if (data == 200) {
          console.log(data);
          navigation.navigate("HotelManagerLandingScreen");
          Alert.alert("Room successfully Added !");
        } else if(data==500) {
          Alert.alert("Room already exists !");
        }
          else{
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
        <H1>Add Room</H1>

        <SpacingLarge />

        <TextInputTheme 
        label="Number"
        onChangeText={setNumber}
        value={number}
        
        ></TextInputTheme>
        <TextInputTheme 
        label="Rent"
        onChangeText={setRent}
        value={rent}
        
        ></TextInputTheme>
        <TextInputTheme 
        label="Description"
        onChangeText={setDescription}
        value={description}
        
        ></TextInputTheme>

        <ModalView Array={AC_option} Title="Ac_options" PickerValue={selectPickerValue}></ModalView>
        <ModalView Array={Capacity} Title="Capacities" PickerValue={selectCapacityValue}></ModalView>

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
