import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WeightGainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Aumentar la Ganancia de Peso</Text>
        <View style={styles.card}>
          <Text style={styles.subtitle}>Calidad de la Alimentación</Text>
          <Text style={styles.paragraph}>
            Asegúrate de proporcionar una dieta equilibrada y de alta calidad
            que cumpla con los requisitos nutricionales de los bovinos en cada
            etapa de crecimiento.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Alimentación Concentrada</Text>
          <Text style={styles.paragraph}>
            Utiliza alimentos concentrados, como grano o suplementos proteicos,
            para aumentar la ingesta de energía y proteínas.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Pastoreo Eficiente</Text>
          <Text style={styles.paragraph}>
            Si tienes pastizales, gestiona el pastoreo de manera eficiente y
            rota los animales para evitar el agotamiento de la vegetación.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Suplementación Mineral</Text>
          <Text style={styles.paragraph}>
            Proporciona suplementos minerales adecuados para prevenir
            deficiencias que puedan afectar el crecimiento.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Salud y Manejo</Text>
          <Text style={styles.paragraph}>
            Mantén un programa de vacunación y desparasitación adecuado para
            prevenir enfermedades que puedan ralentizar el crecimiento. Un buen
            manejo de las instalaciones y un ambiente limpio también son
            fundamentales.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Genética Mejorada</Text>
          <Text style={styles.paragraph}>
            Considera la selección de animales con genética mejorada para el
            crecimiento si estás criando ganado.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F6F7FF",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: "#555555",
    marginBottom: 10,
  },
});

export default WeightGainScreen;
