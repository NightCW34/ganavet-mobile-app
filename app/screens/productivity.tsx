import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Asegúrate de que tengas la librería 'react-native-vector-icons' instalada.

const Productivity = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recomendaciones</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Icon name="glass" style={styles.icon} />
          <Text style={styles.buttonText}>Aumentar Producción de Leche</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Icon name="glass" style={styles.icon} />
          <Text style={styles.buttonText}>Aumentar Ganancia de Peso</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  buttons: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "white",
    marginTop: "5%",
    borderRadius: 10,
    width: "110%",
    height: "15%",
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
    marginBottom: 20, // Espacio entre los botones
  },
  icon: {
    fontSize: 40,
    color: "#333",
  },
  buttonText: {
    textAlign: "center",
  },
  text: {
    marginBottom: "5%",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Productivity;
