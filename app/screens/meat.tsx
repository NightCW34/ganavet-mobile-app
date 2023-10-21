import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const WeightGainScreen = () => {
  return (
    <ScrollView>
      <Text style={styles.title}>Aumentar la Ganancia de Peso</Text>

      <Text style={styles.listItem}>
        1. Calidad de la Alimentación: Asegúrate de proporcionar una dieta equilibrada y de alta calidad que cumpla con los requisitos nutricionales de los bovinos en cada etapa de crecimiento.
      </Text>
      <Text style={styles.listItem}>
        2. Alimentación Concentrada: Utiliza alimentos concentrados, como grano o suplementos proteicos, para aumentar la ingesta de energía y proteínas.
      </Text>
      <Text style={styles.listItem}>
        3. Pastoreo Eficiente: Si tienes pastizales, gestiona el pastoreo de manera eficiente y rota los animales para evitar el agotamiento de la vegetación.
      </Text>
      <Text style={styles.listItem}>
        4. Suplementación Mineral: Proporciona suplementos minerales adecuados para prevenir deficiencias que puedan afectar el crecimiento.
      </Text>
      <Text style={styles.listItem}>
        5. Salud y Manejo: Mantén un programa de vacunación y desparasitación adecuado para prevenir enfermedades que puedan ralentizar el crecimiento. Un buen manejo de las instalaciones y un ambiente limpio también son fundamentales.
      </Text>   
      <Text style={styles.listItem}>
        6. Genética Mejorada: Considera la selección de animales con genética mejorada para el crecimiento si estás criando ganado.
      </Text>
    </ScrollView>
  );
};


export const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  listItem: {
    fontSize: 16,
    margin: 10,
  },
});

export default WeightGainScreen;