import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const ListAnimales = () => {
  interface Animal {
    id: number;
    numeroArete: string;
    fechaNacimiento: string;
    sexo: string;
    peso: number;
  }
  const [animales, setAnimales] = useState<Animal[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/registro-animales", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Respuesta no válida");
        }
        return response.json();
      })
      .then((responseData) => {
        setAnimales(responseData);
      })
      .catch((error) => {
        console.error("Error en la solicitud GET:", error);
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.formTitle}>Lista de Animales</Text>
      {animales && animales.length > 0 ? (
        animales.map((animal) => (
          <View key={animal.id} style={styles.animalContainer}>
            <Image
              source={require("../../assets/images/imagen.jpeg")} // Reemplaza "animal.imagen" con la fuente de la imagen real
              style={styles.animalImage}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>
                Numero de Arete: {animal.numeroArete}
              </Text>
              <Text style={styles.infoText}>
                Fecha de Nacimiento: {animal.fechaNacimiento}
              </Text>
              <Text style={styles.infoText}>Sexo: {animal.sexo}</Text>
              <Text style={styles.infoText}>Peso: {animal.peso}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.noAnimalsText}>No hay animales disponibles</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  animalContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 16,
    marginBottom: 12,
    flexDirection: "row", // Para alinear la imagen y el texto en la misma fila
    alignItems: "center",
  },
  animalImage: {
    width: 80, // Ajusta el ancho según tus necesidades
    height: 80, // Ajusta la altura según tus necesidades
    marginRight: 16,
  },
  infoContainer: {
    flex: 1, // Para que ocupe el espacio restante
  },
  infoText: {
    fontSize: 16,
  },
  noAnimalsText: {
    fontSize: 16,
    fontStyle: "italic",
  },
});

export default ListAnimales;
