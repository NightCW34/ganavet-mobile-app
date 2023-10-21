import { router } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const MastitisScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Text style={styles.text}>Productividad</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/menu/meat")}
        >
          <Image
            source={require("../../assets/images/meat.png")}
            style={styles.image}
          />
          <Text style={styles.buttonText}>Produccion de Carne</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/menu/milk")}
        >
          <Image
            source={require("../../assets/images/milk.png")}
            style={styles.image}
          />
          <Text style={styles.buttonText}>Produccion de Leche</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: "#f5f5f5",
  },
  text: {
    marginBottom: "5%",
    fontWeight: "bold",
    fontSize: 20,
  },
  buttons: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#1cb32b", // Color de fondo verde
    marginTop: "5%",
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
    marginBottom: 20, // Espacio entre botones
  },
  image: {
    width: 60, // Ancho personalizado para la imagen
    height: 60, // Altura personalizada para la imagen
  },
  buttonText: {
    color: "#fff", // Color de texto blanco
    fontWeight: "bold", // Texto en negrita
    textAlign: "center",
    marginTop: 5, // Espacio entre la imagen y el texto
  },
});

export default MastitisScreen;
