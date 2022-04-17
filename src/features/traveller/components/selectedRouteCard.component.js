/** @format */

import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import personIcon from "../../../../assets/icons/person.png";
import moneyIcon from "../../../../assets/icons/money.png";
import acIcon from "../../../../assets/icons/ac.png";
import { CardDetails } from "../../../components/roomCard.style";
import {
  IconTextContainer,
  CardParent,
  Row,
  Subtitle,
  Title,
  ImagePreview,
  ImagePreviewContainer,
  Icon,
  SpacingSmall,
  PrimaryButton,
  ParentMargin,
  SecondaryButton

} from "../../../components/common.style";


export const SelectedRouteCard = () => {


  return (


      <View>
        

          <ParentMargin>
            <Title>Route Name</Title>          
          </ParentMargin>

          <SpacingSmall />

            <PrimaryButton>
                Select Vehicle
            </PrimaryButton>

            <SpacingSmall />

            <PrimaryButton>
                Select Guide
            </PrimaryButton>

      </View>

    

  );
};
