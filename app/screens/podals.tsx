import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 10,
  },
  list: {
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
  },
});

const ProblemasPodalesScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Problemas Podales en Porcinos</Text>
      <Text style={styles.paragraph}>
        Los problemas podales en porcinos se refieren a afecciones y trastornos que afectan las pezuñas y las patas de los cerdos. Estas afecciones pueden ser dolorosas y afectar el bienestar de los animales, así como su capacidad para moverse y alimentarse adecuadamente.
      </Text>
      <Text style={styles.subtitle}>Signos y Síntomas:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>1. Cojera: Los cerdos pueden cojear o mostrar dificultad para caminar normalmente.</Text>
        <Text style={styles.listItem}>2. Hinchazón: Puede haber hinchazón en las patas o alrededor de las pezuñas.</Text>
        <Text style={styles.listItem}>3. Cambios en la Postura: Los cerdos pueden adoptar una postura anormal debido al dolor en las patas.</Text>
        <Text style={styles.listItem}>4. Lesiones Visibles: Pueden observarse lesiones visibles, como heridas o úlceras en las pezuñas.</Text>
        <Text style={styles.listItem}>5. Cambios en el Comportamiento: Los cerdos pueden mostrar cambios en su comportamiento, como rechazo de caminar o inactividad.</Text>
      </View>
      <Text style={styles.subtitle}>Diagnóstico:</Text>
      <Text style={styles.paragraph}>
        El diagnóstico de problemas podales en porcinos se basa en la observación de los signos clínicos y en la inspección de las patas y pezuñas. Es importante identificar la causa subyacente de la afección para determinar el tratamiento adecuado.
      </Text>
      <Text style={styles.subtitle}>Tratamiento:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>1. Tratamiento de Heridas: Si se detectan heridas o úlceras, se deben limpiar y desinfectar adecuadamente, y se pueden aplicar apósitos o ungüentos antibióticos.</Text>
        <Text style={styles.listItem}>2. Control del Dolor: En casos de cojera y dolor, se pueden administrar analgésicos para aliviar el malestar.</Text>
        <Text style={styles.listItem}>3. Corrección de Defectos de las Pezuñas: En algunos casos, es necesario recortar o corregir las pezuñas para restablecer una marcha adecuada.</Text>
        <Text style={styles.listItem}>4. Antibióticos: Si hay infecciones bacterianas secundarias, se pueden administrar antibióticos. Ejemplos de antibióticos incluyen:</Text>
        <Text style={styles.listItem}>- Penicilina: Dosis típica es de 20,000 a 40,000 UI por kg de peso corporal por vía intramuscular o intravenosa una vez al día durante 3-5 días.</Text>
        <Text style={styles.listItem}>- Tetraciclina: Dosis típica es de 10-20 mg por kg de peso corporal por vía intramuscular o intravenosa una vez al día durante 3-5 días.</Text>
      </View>
      <Text style={styles.subtitle}>Medidas de Prevención:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>1. Mantenimiento de Instalaciones: Mantener las instalaciones limpias y secas para reducir el riesgo de lesiones y enfermedades podales.</Text>
        <Text style={styles.listItem}>2. Inspección Regular: Realizar inspecciones regulares de las patas y pezuñas de los cerdos para detectar problemas en una etapa temprana.</Text>
        <Text style={styles.listItem}>3. Manejo Adecuado: Implementar prácticas de manejo adecuadas, como evitar el hacinamiento y el estrés en los cerdos.</Text>
        <Text style={styles.listItem}>4. Alimentación Equilibrada: Proporcionar una dieta equilibrada para mantener un peso corporal adecuado y evitar la sobrecarga de las patas.</Text>
        <Text style={styles.listItem}>5. Manejo del Suelo: Mantener el suelo en las áreas de alojamiento de cerdos en buenas condiciones, evitando la acumulación de lodo y objetos afilados.</Text>
        <Text style={styles.listItem}>6. Cuarentena: Realizar una cuarentena adecuada para los cerdos nuevos antes de introducirlos en
        s.</Text>
</View>
</ScrollView>
);
};