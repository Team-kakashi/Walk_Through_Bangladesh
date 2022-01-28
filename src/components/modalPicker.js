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

const OPTIONS = [
  "Dhaka",
  "Chattogram",
  "Rajshahi",
  "Barishal",
  "Sylhet",
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const ModalPicker = (props) => {
  const onPressItem = (option) => {
    props.changeModalVisibility(false);
    props.setData(option);
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
