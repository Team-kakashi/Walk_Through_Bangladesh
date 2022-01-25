/** @format */

import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const OPTIONS = ["red", "blue"];
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
export const ModalPicker = (props) => {
  const onPressItem = (option) => {
    props.changeModalVisibility(false);
    props.setData(option);
  };
  const option = OPTIONS.map((item, index) => {
    return (
      <TouchableOpacity key={index} onPress={() => onPressItem(item)}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  });
  return (
    <TouchableOpacity onPress={() => props.changeModalVisibility(false)}>
      <View style={{ width: WIDTH, height: HEIGHT }}>
        <ScrollView>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};
