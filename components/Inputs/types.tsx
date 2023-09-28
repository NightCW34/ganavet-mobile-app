import { ComponentProps, ReactNode } from "react";
import { TextInputProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface ExtraInputProps {
  label: ReactNode;
  icon: ComponentProps<typeof MaterialCommunityIcons>["name"];
  isPassword?: Boolean;
}

export type InputProps = TextInputProps & ExtraInputProps;
