// HorizontalButtonScroll.tsx
import React from "react";
import { View, FlatList } from "react-native";
import ButtonComponent from "../Buttons/ButtonCards";
import { useNavigate } from "react-router-dom";

interface ButtonData {
  key: string;
  label: string;
  imageSource: any;
}

interface HorizontalButtonScrollProps {
  items: ButtonData[];
}

const HorizontalButtonScroll: React.FC<HorizontalButtonScrollProps> = ({
  items,
}) => {
  const navigate = useNavigate();

  return (
    <FlatList
      data={items}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ margin: 10 }}
      renderItem={({ item }) => (
        <ButtonComponent
          label={item.label}
          imageSource={item.imageSource}
          onPress={() => {}}
        />
      )}
    />
  );
};

export default HorizontalButtonScroll;
