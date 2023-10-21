import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const BrucelosisInfo: React.FC = () => {
  return (
    <View style={styles.container}>
        <ScrollView>
      <Text style={styles.title}>La Brucelosis</Text>
      <Text>
        La brucelosis bovina es una enfermedad infecciosa causada por la bacteria Brucella abortus. Es una enfermedad importante en ganado bovino y puede tener graves implicaciones para la salud pública, ya que puede transmitirse a los humanos. La brucelosis también se conoce como fiebre de Bang.
      </Text>
      <Text style={styles.subtitle}>Signos y Síntomas:</Text>
      <Text>1. Abortos: La brucelosis puede provocar abortos involuntarios en las vacas preñadas, lo que puede resultar en la pérdida de crías.</Text>
      <Text>2. Retención de Placenta: Las vacas infectadas pueden retener la placenta después del parto.</Text>
      <Text>3. Infertilidad: La enfermedad puede causar infertilidad en el ganado, lo que se manifiesta como dificultad para concebir o repetidos fracasos en la reproducción.</Text>
      <Text>4. Inflamación de los Órganos Reproductores: En algunos casos, se pueden observar signos de inflamación en los órganos reproductores.</Text>
      <Text>5. Reducción de la Producción de Leche: En vacas lecheras, la brucelosis puede resultar en una reducción en la producción de leche.</Text>
      <Text style={styles.subtitle}>Diagnóstico:</Text>
      <Text>El diagnóstico de la brucelosis en bovinos se basa en pruebas serológicas específicas, como la prueba de seroaglutinación en tubo (SAT), la prueba del anillo en leche (MRT), o la prueba de aglutinación rápida en placa (RBT). La confirmación se realiza mediante pruebas adicionales, como la prueba de agar gel inmunodifusión (AGID) y la prueba de reacción en cadena de la polimerasa (PCR).</Text>
      <Text style={styles.subtitle}>Tratamiento:</Text>
      <Text>No existe un tratamiento curativo para la brucelosis en bovinos. Los animales infectados generalmente se consideran portadores crónicos y se recomienda su eliminación del rebaño para evitar la propagación de la enfermedad.</Text>
      <Text style={styles.subtitle}>Medidas de Prevención:</Text>
      <Text>1. Pruebas de Detección: Realizar pruebas de detección regulares en el ganado para identificar animales infectados.</Text>
      <Text>2. Cuarentena de Animales Nuevos: Aplicar una cuarentena adecuada para los animales recién llegados a la explotación y realizar pruebas de brucelosis antes de su introducción.</Text>
      <Text>3. Control de los Movimientos de Ganado: Controlar los movimientos de ganado y evitar la introducción de animales de fuentes desconocidas o de áreas endémicas.</Text>
      <Text>4. Vacunación: En algunos países y regiones, se puede utilizar la vacunación como medida de control, pero esto debe hacerse bajo supervisión veterinaria.</Text>
      <Text>5. Higiene y Bioseguridad: Mantener una buena higiene en la explotación y seguir prácticas de bioseguridad para evitar la exposición a la enfermedad.</Text>
      <Text>6. Educación y Concientización: Capacitar al personal de la explotación y otros involucrados en la importancia de la prevención y el control de la brucelosis.</Text>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    backgroundColor: "#fff",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  subtitle: {
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default BrucelosisInfo;