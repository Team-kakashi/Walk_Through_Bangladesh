/** @format */

import React from "react";
import { ScrollView, View } from "react-native";
import { BlogPreviewCard } from "../components/blogPreviewCard.component";
import styled from "styled-components/native";
import {
  SafeAreaViewContainer,
  TertiaryButton,
  RightGravity,
  SpacingSmall,
  ParentMargin,
  Subtitle,
} from "../../../components/common.style";

const BlogCardContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
`;

export const TravelBloggerLandingScreen = () => {
  return (
    <SafeAreaViewContainer>
      <ScrollView>
        <SpacingSmall></SpacingSmall>
        <RightGravity>
          <TertiaryButton
            icon="folder-plus"
            onPress={() => console.log("Pressed")}
          >
            Write Blog
          </TertiaryButton>
        </RightGravity>

        <SpacingSmall></SpacingSmall>
        <BlogCardContainer>
          <ParentMargin>
            <Subtitle>Blogs</Subtitle>
          </ParentMargin>
          <BlogPreviewCard />
        </BlogCardContainer>
      </ScrollView>
    </SafeAreaViewContainer>
  );
};
