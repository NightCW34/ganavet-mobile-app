import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Link, useRouter } from "expo-router";

interface BotonIconoProps {
  icono: string; // Tipo de cadena para el nombre del ícono
  texto: string;
}

const BotonIcono: React.FC<BotonIconoProps> = ({ icono, texto }) => {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <View style={styles.button}>
        <Icon name={icono} style={styles.icon} />
        <Text style={styles.text}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};

const menuSecond = () => {
  return (
    <View style={styles.container}>
      <BotonIcono icono="heartbeat" texto="Intoxicaciones" />
      <BotonIcono icono="bug" texto="Enfermedades" />
      <BotonIcono icono="heartbeat" texto="Mejorar Productividad" />
      <BotonIcono icono="calendar" texto="Calendario" />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // Cambio de "center" a "space-between"
    paddingHorizontal: 16, // Agregar un relleno horizontal
    paddingTop: 16, // Agregar un relleno superior
  },
  buttonContainer: {
    width: "48%", // Para dos botones en una fila, con espacio entre ellos
  },
  button: {
    backgroundColor: "#3498db", // Cambio de "white" a un color de fondo azul
    borderRadius: 10,
    height: 150, // Aumentar la altura para hacer los botones más grandes
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
  },
  icon: {
    fontSize: 60, // Aumentar el tamaño del ícono
    color: "#fff", // Cambio de "#333" a blanco
  },
  text: {
    textAlign: "center",
    fontSize: 16, // Tamaño de fuente del texto
    color: "#fff", // Cambio de "#333" a blanco
  },
});

export default menuSecond;
