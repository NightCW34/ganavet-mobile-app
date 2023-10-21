import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const PoisonImage = require("../../assets/images/danger.png"); // Importa una imagen para usarla

const bovinePoisonings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.titleContainer}>
          <Image source={PoisonImage} style={styles.image} />
          <Text style={styles.title}>Intoxicaciones en Bovinos</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Plantas Tóxicas</Text>
          <Text style={styles.text}>
            • Lantana (Lantana camara): Esta planta es altamente tóxica para el
            ganado. Puede causar daño hepático y trastornos neurológicos.
          </Text>
          <Text style={styles.text}>
            • Higuera (Ficus spp.): Las higueras contienen una sustancia llamada
            ficina, que puede ser perjudicial para los bovinos.
          </Text>
          <Text style={styles.text}>
            • Ricino (Ricinus communis): Las semillas de ricino contienen
            ricina, una toxina altamente peligrosa para los bovinos.
          </Text>
          <Text style={styles.text}>
            • Estramonio (Datura stramonium): El estramonio contiene alcaloides
            tóxicos que pueden afectar el sistema nervioso y causar problemas
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Alimentos con Niveles Elevados de Urea o Amoniaco
          </Text>
          <Text style={styles.text}>
            La urea y el amoníaco son productos químicos que pueden ser tóxicos
            en altas concentraciones. Algunos suplementos alimenticios mal
            formulados pueden tener niveles excesivos de estos compuestos.
          </Text>
          <Text style={styles.text}>
            La exposición a productos químicos agrícolas o pesticidas puede ser
            tóxica para los bovinos. Esto puede ocurrir si los animales tienen
            acceso a áreas tratadas o si se usan recipientes contaminados para
            darles de beber.
          </Text>
          <Text style={styles.text}>
            Algunos subproductos de la industria, como el aceite de cocina usado
            o el bagazo de caña de azúcar tratado con sustancias químicas,
            pueden ser tóxicos si se incluyen en la alimentación de los bovinos.
          </Text>
        </View>
        {/* Más secciones */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  scrollViewContent: {
    paddingTop: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default bovinePoisonings;
