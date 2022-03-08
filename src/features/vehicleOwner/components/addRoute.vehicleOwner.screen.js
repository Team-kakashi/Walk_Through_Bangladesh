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
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

var serviceRoute;
export const AddRouteScreen = ({ navigation, vid }) => {
  const route = ["Ratargul", "Bisanakandi","Jaflong"];
  const [cost, setCost] = React.useState("");

  const selectrouteValue=(item)=>{
    console.log("my slected item", item);
    serviceRoute = item;
  }

  const onPressAdd = () => {
    console.log(vid);
    if (cost == "") {
      Alert.alert("Fill all fields");
    } else {
     // submitData();
      Alert.alert(serviceRoute);
      setCost("");
      
    }
  };

  const submitData = () => {
    fetch(IpRoute + "/addVehicleRoute", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ownerid : user_id,
        route: route,
        rent: cost,
        v_id: X,
    
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
        Array={route}
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
