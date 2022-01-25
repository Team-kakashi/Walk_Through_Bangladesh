/** @format */

import React, { useState } from "react";
import { Searchbar, Title } from "react-native-paper";
import { ScrollView, Text, View, TouchableOpacity, Modal } from "react-native";
import { RoomCard } from "../componenets/roomCard.component";
import styled from "styled-components/native";
import {
  SafeAreaViewContainer,
  TertiaryButton,
  RightGravity,
  SpacingSmall,
  Subtitle,
} from "../../../components/common.style";
import { ModalPicker } from "../componenets/modalpicker";

const RoomCardContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
`;

export const HotelManagerLandingScreen = () => {
  // const [chooseData, setChooseData] = useState("Select Item...");
  // const [isModeVisible, setisModeVisible] = useState(false);
  // const changeModalVisibility = (bool) => {
  //   setisModeVisible(bool);
  // };

  // const setData = (option) => {
  //   setChooseData(option);
  // };

  return (
    <SafeAreaViewContainer>
      <ScrollView>
        <SpacingSmall></SpacingSmall>
        <RightGravity>
          <TertiaryButton
            icon="folder-plus"
            onPress={() => console.log("Pressed")}
          >
            Add Room
          </TertiaryButton>
        </RightGravity>

        <SpacingSmall></SpacingSmall>
        <RoomCardContainer>
          <Subtitle>Hotel Rooms</Subtitle>
          <RoomCard />
        </RoomCardContainer>

        {/* <TouchableOpacity onPress={() => changeModalVisibility(true)}>
          <Text>{chooseData}</Text>
        </TouchableOpacity>
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
        </Modal> */}
      </ScrollView>
    </SafeAreaViewContainer>
  );
};
