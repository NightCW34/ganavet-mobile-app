import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../colors";
const { white } = colors;

const StyledView = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: 40px;
  justify-content: center;
`;

import { ContainerProps } from "./types";
import { SafeAreaView } from "react-native-safe-area-context";

const MainContainer: FunctionComponent<ContainerProps> = (props) => {
  return (
    <SafeAreaView>
      <StyledView style={props.style}>{props.children}</StyledView>
    </SafeAreaView>
  );
};

export default MainContainer;
