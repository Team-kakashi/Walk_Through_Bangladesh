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

var serviceArea;
var arealist = [];
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

   const selectrouteValue=(item)=>{
    console.log("my slected item", item);
    serviceArea = item;
  }

  const getArea = () => {
    fetch(IpRoute+"/getService", {
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

  useEffect(()=>{
    getArea();
  },[])
  
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
        hotelAddress: serviceArea,

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
      <ModalView
       Array={routeArry}
      Title="HotelAddress"
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
