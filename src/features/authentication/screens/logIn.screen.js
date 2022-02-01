/** @format */

import React from "react";
import { IpRoute } from "../../../components/environmentVeriables";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Button,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";

import {
  PrimaryButton,
  Subtitle,
  SecondaryButton,
  ParentMargin,
  SpacingLarge,
  TextInputTheme,
  H1,
  SafeAreaViewContainer,
} from "../../../components/common.style";

    
export var user_id;

export const LogInScreen = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  const onPressLogin = () => {
    console.log("login pressed");
    onChangeEmail("");
    onChangePassword("");

    //navigation.navigate("Login");
    submitData();
  };

  const submitData = () => {
    fetch(IpRoute + "/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(res.status())
        if (data == "wrong credential") {
          Alert.alert(data);
        } else {
          console.log(data);
          user_id=data.id;
          // console.log(JSON.stringify(data.json()));
          if (data.user_type == "HotelManager") {
            navigation.navigate(
              "HotelManagerLandingScreen"
            );
          } /* else if (data.user_type == "TourGuide") {
          navigation.navigate("GuideInfo");
        } else if (data.user_type == "VehicleOwner") {
          navigation.navigate("VehicleInfo");
        }*/
        }
      })
      .catch((err) => {
        console.log(err);
        //Alert.alert(err)
      });
  };

  return (
    <SafeAreaViewContainer>
      <H1>Walk Through Bangladesh</H1>

      <SpacingLarge></SpacingLarge>

      <TextInputTheme
        label="E-mail"
        onChangeText={onChangeEmail}
        value={email}
      ></TextInputTheme>

      <TextInputTheme
        label="Password"
        onChangeText={onChangePassword}
        value={password}
      ></TextInputTheme>

      <SpacingLarge></SpacingLarge>

      <ParentMargin>
        <Subtitle>Don't have any account?</Subtitle>

        <SecondaryButton
          onPress={() =>
            navigation.navigate("AccountSelectScreen")
          }
        >
          SignUp
        </SecondaryButton>
      </ParentMargin>

      <PrimaryButton icon="login" onPress={onPressLogin}>
        Login
      </PrimaryButton>
    </SafeAreaViewContainer>
  );
};
