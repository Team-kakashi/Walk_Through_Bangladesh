/** @format */

import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  ModalView,
  ModalContainer,
  Subtitle,
  InsideModal,
  ModalText,
  Line,
} from "./common.style";

var OPTIONS;

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const ModalPicker = (props) => {
  //console.log(props.setData);
  console.log('hoise re',props.array)
  OPTIONS=props.array
  const onPressItem = (option) => {
    props.changeModalVisibility(false);
    props.setData(option);
   // console.log('hoise',props.array)
   //OPTIONS= props.array
  };
  const option = OPTIONS.map((item, index) => {
    return (
      <InsideModal
        key={index}
        onPress={() => onPressItem(item)}
      >
        <ModalText>{item}</ModalText>
        <Line />
      </InsideModal>
    );
  });
  return (
    <ModalContainer
      onPress={() => props.changeModalVisibility(false)}
    >
      <ModalView
        style={{ width: WIDTH - 32, height: HEIGHT / 2 }}
      >
        <ScrollView>{option}</ScrollView>
      </ModalView>
    </ModalContainer>
  );
};
