// HorizontalButtonScroll.tsx
import React from "react";
import { View, FlatList } from "react-native";
import ButtonComponent from "../Buttons/ButtonCards";

interface ButtonData {
  key: string;
  label: string;
  imageSource: any; // Agrega la propiedad imageSource al tipo ButtonData
}

interface HorizontalButtonScrollProps {
  items: ButtonData[];
}

const HorizontalButtonScroll: React.FC<HorizontalButtonScrollProps> = ({
  items,
}) => {
  return (
    <FlatList
      data={items}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ margin: 10 }}
      renderItem={({ item }) => (
        <ButtonComponent
          label={item.label}
          imageSource={item.imageSource} // Pasa la fuente de imagen desde item
          onPress={() => {
            /* Manejar la acción del botón */
          }}
        />
      )}
    />
  );
};

export default HorizontalButtonScroll;
