/** @format */

import React, { useState } from "react";
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

var tripRoute;
var tripArea;
export const WriteBlogScreen = ({navigation}) =>{
  const route = ["Ratargul", "Bisanakandi","Jaflong"];
  const area = ["Sylhet","Coxs-Bazar","Bandorban","Chittagong"];
  
  const [title, setTitle] = React.useState("");
  const [expense, setExpense] = React.useState("");
  const [description,setDescription] =React.useState("");
  const [recommendation,setRecommendation] =React.useState("");

   const selectrouteValue=(item)=>{
    console.log("my slected item", item);
     tripRoute = item;
   }

   const selectAreaValue =(item)=>{
    console.log("my slected item", item);
    tripArea = item;
   }

  const onPressAdd = () => {
    console.log(user_id);
    if (title == "" || expense == "") {
      Alert.alert("Fill all fields");
    } else {
      submitData();
     // Alert.alert(tripRoute);
      setTitle("");
      setDescription("");
    }
  };


  const submitData = () => {
    fetch(IpRoute + "/addBlog", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user_id,
        title: title,
        area: tripArea,
        route: tripRoute,
        price : expense,
        recommendation: recommendation,
        description: description,
  

      }),
    })
      .then((res) => res.status)
      .then((data1) => {
        //console.log(res.status())
        if (data1 == 200) {
          console.log(data1);
          navigation.push("TravelBloggerLandingScreen");
          Alert.alert("Blog successfully Added !");
        } else if (data1 == 500) {
          Alert.alert("Title already exists !");
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
      <H1>Write Blog</H1>

      <SpacingLarge />

      <TextInputTheme 
      label="Title"
      onChangeText={setTitle}
      value={title}
      ></TextInputTheme>
      <ModalView
      Array={area}
      Title="Area"
      PickerValue={selectAreaValue}
      ></ModalView>
      <ModalView
      Array={route}
      Title="Trips"
      PickerValue={selectrouteValue}
      ></ModalView>
      <TextInputTheme 
      label="Expence"
      onChangeText={setExpense}
      value={expense}
      ></TextInputTheme>
      <TextInputTheme 
      label="Recommendation"
      onChangeText={setRecommendation}
      value={recommendation}
      ></TextInputTheme>
      <TextInputTheme 
      label="Description"
      onChangeText={setDescription}
      value={description}
      ></TextInputTheme>

      <SpacingLarge />

      <PrimaryButton icon="plus-circle" onPress={onPressAdd}>Add</PrimaryButton>
      <SpacingLarge />
    </ScrollView>
  </SafeAreaViewContainer>
);
  };
/** @format */
