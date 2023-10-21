// ButtonComponent.tsx
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

interface ButtonProps {
  label: string;
  imageSource: any; // Agregar una prop para la fuente de la imagen
  onPress: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  label,
  imageSource,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "white",
    margin: 5,
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    alignItems: "center", // Centra los elementos horizontalmente
  },
  image: {
    width: 100, // Ajusta el ancho de la imagen según tus necesidades
    height: 100, // Ajusta la altura de la imagen según tus necesidades
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10, // Espacio entre la imagen y el texto
  },
});

export default ButtonComponent;
