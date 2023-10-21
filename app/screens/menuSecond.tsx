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
    justifyContent: "center",
    alignContent: "center",
  },
  buttonContainer: {
    width: "50%", // Para dos botones en una fila
    alignItems: "center",
    marginBottom: 16, // Espacio entre filas
  },
  button: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    height: 100,
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
    fontSize: 40,
    color: "#333",
  },
  text: {
    textAlign: "center",
  },
});

export default menuSecond;