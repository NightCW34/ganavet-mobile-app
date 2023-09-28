import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../colors";
const { secondary, white } = colors;

const StyledView = styled.TouchableOpacity`
  background-color: ${secondary};
  width: 100%;
  height: 60%;
  padding: 15px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

import { ButtonProps } from "./types";
import RegularText from "../Texts/RegularText";

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <StyledView style={props.style} onPress={props.onPress}>
      <RegularText style={[{ color: white }, props.TextStyle]}>
        {props.children}
      </RegularText>
    </StyledView>
  );
};

export default RegularButton;
