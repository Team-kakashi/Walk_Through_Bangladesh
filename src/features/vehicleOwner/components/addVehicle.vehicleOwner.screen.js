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

import { user_id } from "../../authentication/screens/logIn.screen";

var acValue;
var typeValue;
export const AddVehicleScreen = ({ navigation }) => {
  const Ac_option = ["AC", "Non-AC"];
  const Type = ["Car", "Bus","Jeep","Motor-Bike","MicroBus"];
  
  const [v_name, setVehicle_name] = React.useState("");

  const selectACValue=(item)=>{
    console.log("my slected item", item);
    acValue = item;
  }
  const selectTypeValue=(item)=>{
    console.log("my slected item", item);
    typeValue = item;
  }

  const onPressAdd = () => {
    console.log(user_id);
    if (v_name=="") {
      Alert.alert("Fill all fields");
    } else {
      submitData();
      Alert.alert(serviceRoute);
      setVehicle_name("");
    }
  };

  const submitData = () => {
    fetch(IpRoute + "/addVehicle", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      ownerid: user_id,
      v_name: v_name,
      ac_option : acValue,
      type: typeValue,

      }),
    })
      .then((res) => res.status)
      .then((data1) => {
        //console.log(res.status())
        if (data1 == 200) {
          console.log(data1);
          navigation.push("VehicleOwnerLandingScreen");
          Alert.alert("Vehicle successfully Added !");
        } else if (data1 == 500) {
          Alert.alert("Vehicle already exists !");
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
        <H1>Add Vehicle</H1>

        <SpacingLarge />
        <TextInputTheme label="Vehicle Name"
        onChangeText={setVehicle_name}
        value={v_name}
        ></TextInputTheme>

      <ModalView
      Array={Ac_option}
      Title="Ac_Options"
      PickerValue={selectACValue}
      ></ModalView>

      <ModalView
      Array={Type}
      Title="Types"
      PickerValue={selectTypeValue}
      ></ModalView>
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
