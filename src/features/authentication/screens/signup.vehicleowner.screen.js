/** @format */

import React from "react";
import { ScrollView,Alert } from "react-native";
import {IpRoute} from "../../../components/environmentVeriables";
import {
  PrimaryButton,
  SpacingLarge,
  TextInputTheme,
  H1,
  SafeAreaViewContainer,
} from "../../../components/common.style";

import {
  ModalView,
  ItemChoise,
} from "../../../components/modalView.view";

var serviceArea;
var arealist = [];
export const SignupVehicleOwnerScreen = ({navigation}) => {
  
  const [name, setName] = React.useState("");
  const [contactno, setContactno] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [area, setArea] = React.useState("");

  const onPressSignUp = () => {
    setName('');
    setPassword('');
    setContactno('');
    setEmail('');
    setArea('');
     if (
       name == "" ||
       contactno == "" ||
       email == "" ||
       password == "" ||
       area == ""
     ) {
       Alert.alert("Fill all fields");
     } else {
       submitData();
     }
   };

   const selectrouteValue=(item)=>{
    console.log("my slected item", item);
    serviceArea = item;
  }

  const getArea = () => {
    fetch(IpRoute+"/getAllAreaRoute", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(res.status())
        if (data == "wrong credential") {
          Alert.alert(data);
        } else {
          var j=0;
          for (var i=0;i<data.length;i++){
            arealist[j++]= data[i].area;
          }
          console.log(data);
          
        }
      })
      .catch((err) => {
        console.log(err);
        //Alert.alert(err)
      });
  };
  React.useEffect(()=>{
    getArea();
  },[])
  
   const submitData = () => {
    fetch(IpRoute+"/signupVehicleOwner", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        contactNo: contactno,
        userType: "VehicleOwner",
        area: serviceArea,
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
      <ModalView
      Array={arealist}
      Title="Area"
      PickerValue={selectrouteValue}
      ></ModalView>

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
