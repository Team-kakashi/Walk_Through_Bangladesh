/** @format */

import React from "react";
import { ScrollView, Alert } from "react-native";
import {IpRoute} from "../../../components/environmentVeriables";
import {
  PrimaryButton,
  SpacingLarge,
  TextInputTheme,
  H1,
  SafeAreaViewContainer,
} from "../../../components/common.style";

export const SignupBloggerScreen = ({navigation}) =>{ 
  
  const [name, setName] = React.useState("");
  const [contactno, setContactno] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  const onPressSignUp = () => {
    setName('');
    setPassword('');
    setContactno('');
    setEmail('');
     if (
       name == "" ||
       contactno == "" ||
       email == "" ||
       password == "" 
     ) {
       Alert.alert("Fill all fields");
     } else {
       submitData();
     }
   };
  
   const submitData = () => {
    fetch(IpRoute+"/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        contactNo: contactno,
        userType: "Blogger",
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
      <SpacingLarge></SpacingLarge>

      <PrimaryButton icon="login" onPress={onPressSignUp}>
        Signup
      </PrimaryButton>
      <SpacingLarge></SpacingLarge>
    </ScrollView>
  </SafeAreaViewContainer>
);
  };
//3.03
