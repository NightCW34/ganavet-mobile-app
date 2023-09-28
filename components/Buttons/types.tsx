import { ComponentProps, ReactNode } from "react";
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export interface ButtonProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  TextStyle?: StyleProp<TextStyle>;
  icon?: ComponentProps<typeof FontAwesome5>["name"];
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}
