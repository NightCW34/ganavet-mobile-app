import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import SmallText from "../Texts/SmallText";

import { colors } from "../colors";
const { darkgray } = colors;

// Define los tipos para las props del componente
interface DividerProps {
  text: string; // Texto en el medio del divisor
}

const DividerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const DividerLine = styled.View`
  flex: 1;
  height: 2px;
  border-radius: 10px;
  background-color: ${darkgray};
`;

const Divider: FunctionComponent<DividerProps> = ({ text }) => {
  return (
    <DividerContainer>
      <DividerLine />
      <SmallText style={{ paddingHorizontal: 10 }}>{text}</SmallText>
      <DividerLine />
    </DividerContainer>
  );
};

export default Divider;
