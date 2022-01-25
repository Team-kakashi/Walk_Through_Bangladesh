/** @format */

import React from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const RoomCardParent = styled(Card)`
  shadow-color: ${(props) => props.theme.colors.ui.quaternary};
  box-shadow: 0px 3px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;

  background-color: ${(props) => props.theme.colors.bg.secondary};
  border-radius: ${(props) => props.theme.sizes[2]};
  padding: ${(props) => props.theme.space[2]};
  margin: ${(props) => props.theme.space[2]};
`;

export const CardDetails = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[2]};
`;

export const Row = styled(View)`
  flex-direction: row;
`;

export const RoomDetails = styled(View)`
  align-items: center;
  flex-direction: row;
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const CardInfo = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.secondary};
`;

export const CardHeader = styled(Text)`
  margin-bottom: ${(props) => props.theme.space[2]};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const CardImage = styled(Image)`
  flex: 1;
  margin: ${(props) => props.theme.space[1]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.sizes[1]};
`;

export const CardAllImages = styled(View)`
  flex-direction: row;
  flex: 1;
`;

export const Icon = styled(Image)`
  margin-right: ${(props) => props.theme.space[2]};
  width: ${(props) => props.theme.sizes[4]};
  height: ${(props) => props.theme.sizes[4]};
`;
