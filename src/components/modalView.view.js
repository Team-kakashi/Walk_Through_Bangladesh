/** @format */

import React, { useState } from "react";
import { Modal } from "react-native";
import {
  SafeAreaViewContainer,
  Subtitle,
  TouchableOpacityPicker,
} from "./common.style";
import { ModalPicker } from "./modalPicker";

export const ModalView = () => {
  const [chooseData, setChooseData] = useState(
    "Select Item..."
  );
  const [isModeVisible, setisModeVisible] = useState(false);
  const changeModalVisibility = (bool) => {
    setisModeVisible(bool);
  };

  const setData = (option) => {
    setChooseData(option);
  };

  return (
    <SafeAreaViewContainer>
      <TouchableOpacityPicker
        onPress={() => changeModalVisibility(true)}
      >
        <Subtitle>{chooseData}</Subtitle>
      </TouchableOpacityPicker>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModeVisible}
        nRequestClose={() => changeModalVisibility(false)}
      >
        <ModalPicker
          changeModalVisibility={changeModalVisibility}
          setData={setData}
        />
      </Modal>
    </SafeAreaViewContainer>
  );
};
