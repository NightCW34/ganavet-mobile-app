import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { FontAwesome5 } from "@expo/vector-icons";

const { secondary, white, black } = colors;

// Define una interfaz adicional para las props del IconButton
interface IconButtonProps {
  iconColor?: string; // Color personalizado para el icono
}

const StyledView = styled.TouchableOpacity`
  background-color: ${white};
  width: 100%;
  height: 60%;
  padding: 15px;
  border: 2px solid;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Icon = styled(FontAwesome5)`
  margin-right: 10px;
`;

import { ButtonProps } from "./types";
import RegularText from "../Texts/RegularText";

// Combina ButtonProps e IconButtonProps en una sola interfaz
type CombinedProps = ButtonProps & IconButtonProps;

const IconButton: FunctionComponent<CombinedProps> = (props) => {
  const { icon, style, TextStyle, children, onPress, iconColor } = props;

  return (
    <StyledView style={style} onPress={onPress}>
      {icon && (
        <Icon
          name={icon}
          size={24}
          color={iconColor || white} // Usa el color personalizado o el blanco por defecto
        />
      )}
      <RegularText
        style={[{ color: white, fontFamily: "InriaSans_700Bold" }, TextStyle]}
      >
        {children}
      </RegularText>
    </StyledView>
  );
};

export default IconButton;
