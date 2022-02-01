/** @format */

import React, { useState } from "react";
import { Modal } from "react-native";
import {
  SafeAreaViewContainer,
  Subtitle,
  TouchableOpacityPicker,
} from "./common.style";
import { ModalPicker } from "./modalPicker";
var selectingDropDown;
var Title; 
export var ItemChoise;
export const ModalView = (props) => {
  
  Title = props.Title;
  selectingDropDown = props.Array;
  /*if(props.AC_option!=undefined){
    selectingDropDown = props.AC_option;
    console.log('ac ',selectingDropDown)
    //Title = props.Title;
  }
  else{
     selectingDropDown = props.Capacity;
    console.log('capacity ',selectingDropDown);
    //Title = props.Title;
  }*/
  
  const [chooseData, setChooseData] = useState(
    Title
  );
  const [isModeVisible, setisModeVisible] = useState(false);
  const changeModalVisibility = (bool) => {
    setisModeVisible(bool);
  };

  const setData = (selectingDropDown) => {
    
    props.PickerValue(selectingDropDown)
    setChooseData(selectingDropDown);
  };

  return (
    <SafeAreaViewContainer>
      <TouchableOpacityPicker
        onPress={() =>{ changeModalVisibility(true);
                      }}
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
          array={selectingDropDown}
        />
      </Modal>
    </SafeAreaViewContainer>
  );
};
