/** @format */

import React from "react";
import { ScrollView ,Alert} from "react-native";
import {IpRoute} from "../../../components/environmentVeriables";
import {
  PrimaryButton,
  SpacingLarge,
  TextInputTheme,
  H1,
  SafeAreaViewContainer,
} from "../../../components/common.style";

export const SignupHotelManagerScreen = ({navigation}) =>{ 
  const [name, setName] = React.useState("");
  const [contactno, setContactno] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [hotelName, setHotelName] = React.useState("");
  const [hotelAddress, setHotelAddress] = React.useState("");

  const onPressSignUp = () => {
    setName('');
    setPassword('');
    setContactno('');
    setEmail('');
    setHotelName('');
    setHotelAddress('');
     if (
       name == "" ||
       contactno == "" ||
       email == "" ||
       password == "" ||
       hotelAddress == ""||
       hotelName ==""
     ) {
       Alert.alert("Fill all fields");
     } else {
       submitData();
     }
   };


   const submitData = () => {
    fetch(IpRoute+"/signupHotelManager", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        contactNo: contactno,
        userType: "HotelManager",
        hotelName: hotelName,
        hotelAddress: hotelAddress,

      }),
    })
      .then((res) => res.status)
      .then((data) => {
        //console.log(res.status())
        if (data == 200) {
          console.log(data);
          navigation.navigate("LogInScreen");
          Alert.alert("successfully signed in !");
        } else Alert.alert("Email already exists !");
      })
      .catch((err) => {
        console.log(err);
        //Alert.alert(err)
      });
  };
  
  return(
  <SafeAreaViewContainer>
    <ScrollView>
      <H1>Sign up</H1>

      <SpacingLarge></SpacingLarge>

      <TextInputTheme 
      label="Name"
      onChangeText={setName}
      value={name}
      ></TextInputTheme>
      <TextInputTheme 
      label="E-mail"
      onChangeText={setEmail}
      value={email}
      ></TextInputTheme>
      <TextInputTheme 
      label="Phone No."
      onChangeText={setContactno}
      value={contactno}
      ></TextInputTheme>
      <TextInputTheme 
      label="Password"
      onChangeText={setPassword}
      value={password}
      ></TextInputTheme>
      <TextInputTheme 
      label="Hotel Name"
      onChangeText={setHotelName}
      value={hotelName}
      ></TextInputTheme>
      <TextInputTheme 
      label="Address"
      onChangeText={setHotelAddress}
      value={hotelAddress}
      ></TextInputTheme>
      
      

      <SpacingLarge></SpacingLarge>

      <PrimaryButton icon="login" onPress={onPressSignUp}>
        Signup
      </PrimaryButton>

      <SpacingLarge></SpacingLarge>
    </ScrollView>
  </SafeAreaViewContainer>
);
};
