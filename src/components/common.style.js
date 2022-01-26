/** @format */

import {
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import {
  Button,
  Card,
  TextInput,
  Searchbar,
} from "react-native-paper";
import styled from "styled-components/native";

export const CardParent = styled(Card)`
  shadow-color: ${(props) =>
    props.theme.colors.ui.quaternary};
  box-shadow: 0px 3px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  background-color: ${(props) =>
    props.theme.colors.bg.secondary};
  border-radius: ${(props) => props.theme.sizes[2]};
  padding: ${(props) => props.theme.space[2]};
  margin: ${(props) => props.theme.space[2]};
`;

export const Row = styled(View)`
  flex-direction: row;
`;

export const ParentMargin = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-left: ${(props) => props.theme.space[3]};
  margin-right: ${(props) => props.theme.space[3]};
`;
export const RightGravity = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: ${(props) => props.theme.space[3]};
`;

export const IconTextContainer = styled(View)`
  align-items: center;
  flex-direction: row;
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const Subtitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.secondary};
`;

export const Title = styled(Text)`
  margin-bottom: ${(props) => props.theme.space[2]};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const ImagePreview = styled(Image)`
  flex: 1;
  margin: ${(props) => props.theme.space[1]};
  background-color: ${(props) =>
    props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.sizes[1]};
`;

export const ImagePreviewContainer = styled(View)`
  flex-direction: row;
  flex: 1;
`;

export const SpacingLarge = styled(View)`
  margin-bottom: ${(props) => props.theme.space[5]};
`;
export const SpacingSmall = styled(View)`
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const Icon = styled(Image)`
  margin-right: ${(props) => props.theme.space[2]};
  width: ${(props) => props.theme.sizes[4]};
  height: ${(props) => props.theme.sizes[4]};
`;

export const PrimaryButton = styled(Button).attrs({
  color: "#19B37A",
  mode: "contained",
})`
  border-radius: ${(props) => props.theme.sizes[2]};
  margin-left: ${(props) => props.theme.space[3]};
  margin-right: ${(props) => props.theme.space[3]};
  padding: ${(props) => props.theme.sizes[3]};
`;

export const SecondaryButton = styled(Button).attrs({
  color: "#19B37A",
  fontSizes: 100,
})``;

export const TertiaryButton = styled(Button).attrs({
  color: "#19B37A",
  mode: "contained",
})``;

export const AccountTypeButton = styled(Button).attrs({
  color: "#19B37A",
  mode: "outlined",
})`
  border-radius: ${(props) => props.theme.sizes[2]};
  margin-left: ${(props) => props.theme.space[3]};
  margin-right: ${(props) => props.theme.space[3]};
  padding: ${(props) => props.theme.sizes[1]};
  border-color: ${(props) =>
    props.theme.colors.brand.primary};
  border-width: 1;
`;

export const TextInputTheme = styled(TextInput)`
  shadow-color: ${(props) =>
    props.theme.colors.ui.quaternary};
  box-shadow: 0px 3px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  background-color: ${(props) =>
    props.theme.colors.bg.secondary};
  color: ${(props) => props.theme.colors.ui.secondary};
  padding: ${(props) => props.theme.space[1]};
  margin: ${(props) => props.theme.space[3]};
`;

export const H1 = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h3};
  color: ${(props) => props.theme.colors.ui.secondary};
  margin: ${(props) => props.theme.space[3]};
`;

export const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) =>
    props.theme.colors.bg.primary};
  ${StatusBar.currentHeight &&
  `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SearchView = styled(Searchbar)`
  shadow-color: ${(props) =>
    props.theme.colors.ui.quaternary};
  box-shadow: 0px 3px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  margin: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[1]};
`;

export const TouchableOpacityPicker = styled(
  TouchableOpacity
)`
  shadow-color: ${(props) =>
    props.theme.colors.ui.quaternary};
  box-shadow: 0px 3px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  background-color: white;
  margin: ${(props) => props.theme.space[3]};
  padding: ${(props) => props.theme.sizes[3]};
  padding-top: ${(props) => props.theme.sizes[5]};
  padding-bottom: ${(props) => props.theme.sizes[5]};
`;

export const ModalContainer = styled(TouchableOpacity)`
  flex: 1;
  background-color: ${(props) =>
    props.theme.colors.ui.quaternary};
  align-items: center;
  justify-content: center;
`;

export const ModalView = styled(View)`
  background-color: white;
  border-radius: ${(props) => props.theme.sizes[2]};
`;

export const InsideModal = styled(TouchableOpacity)`
  align-items: flex-start;
`;

export const ModalText = styled(Text)`
  margin: ${(props) => props.theme.space[3]};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.secondary};
`;

export const Line = styled(View)`
  flex: 1;
  width: 90%
  border-color: ${(props) =>
    props.theme.colors.ui.quaternary};
  height: 1px;
  border-width: .2px;
  align-items: flex-start;
  margin-left:${(props) => props.theme.space[3]};

`;
