import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import RegularText from "../../components/Texts/RegularText";
import { Link, router } from "expo-router";

const IntoxicacionesImage = require("../../assets/images/toxic-material-svgrepo-com.png");
const EnfermedadesImage = require("../../assets/images/first-aid-kit-svgrepo-com.png");
const ProductividadImage = require("../../assets/images/time-sand-svgrepo-com.png");
const CalendarioImage = require("../../assets/images/calendar-exclamation-alt-svgrepo-com.png");

interface BotonIconoProps {
  imagen: any; // Cambiar el tipo a "any" para aceptar rutas de imagen
  texto: string;
  onPress?: () => void; // Nueva prop para el evento onclick
}

const BotonIcono: React.FC<BotonIconoProps> = ({ imagen, texto, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={imagen} style={styles.image} />
      <Text style={styles.text}>{texto}</Text>
    </TouchableOpacity>
  );
};

const MenuSecond = () => {
  return (
    <View style={styles.container}>
      <RegularText style={styles.title}>Recomendación</RegularText>
      <View style={styles.buttonRow}>
        <BotonIcono
          imagen={IntoxicacionesImage}
          texto="Intoxicaciones"
          onPress={() => router.replace("/menu/bovinePoisonings")}
        />

        <BotonIcono
          imagen={EnfermedadesImage}
          texto="Enfermedades"
          onPress={() => router.replace("/menu/mastitis")}
        />
      </View>
      <View style={styles.buttonRow}>
        <BotonIcono
          imagen={ProductividadImage}
          texto="Productividad"
          onPress={() => router.replace("/menu/productivity")}
        />
        <BotonIcono
          imagen={CalendarioImage}
          texto="Calendario"
          onPress={() => router.replace("/menu/calendary")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    backgroundColor: "#1cb32b", // Color de fondo verde
    borderRadius: 10,
    width: 150, // Ancho personalizado para ajustarse a la imagen y el texto
    height: 150, // Altura personalizada para ajustarse a la imagen y el texto
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10, // Espacio entre botones
  },
  buttonRow: {
    flexDirection: "row",
  },
  image: {
    width: 60, // Ancho personalizado para la imagen
    height: 60, // Altura personalizada para la imagen
  },
  text: {
    color: "#fff", // Color de texto blanco
    fontWeight: "bold", // Texto en negrita
    textAlign: "center",
    marginTop: 5, // Espacio entre la imagen y el texto
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default MenuSecond;
