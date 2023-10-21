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

const MMAScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mastitis-Metritis-Agalactia (MMA)</Text>
      <Text style={styles.paragraph}>
        Mastitis-Metritis-Agalactia (MMA) es un síndrome que afecta a las cerdas lactantes y se caracteriza por la inflamación de la glándula mamaria (mastitis), inflamación del útero (metritis) y la incapacidad de producir leche (agalactia). Es una afección multifactorial que puede estar asociada con infecciones bacterianas y otros factores de estrés.
      </Text>
      <Text style={styles.subtitle}>Signos y Síntomas:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>1. Inflamación de la Glándula Mamaria (Mastitis):</Text>
        <Text style={styles.listItem}>- Hinchazón y enrojecimiento de las mamas.</Text>
        <Text style={styles.listItem}>- Dolor en las mamas.</Text>
        <Text style={styles.listItem}>- Posible secreción de leche de aspecto anormal o coágulos.</Text>
        <Text style={styles.listItem}>2. Inflamación del Útero (Metritis):</Text>
        <Text style={styles.listItem}>- Descarga vaginal anormal.</Text>
        <Text style={styles.listItem}>- Letargo y debilidad en la cerda.</Text>
        <Text style={styles.listItem}>- Posible fiebre.</Text>
        <Text style={styles.listItem}>3. Agalactia:</Text>
        <Text style={styles.listItem}>- Incapacidad de la cerda para amamantar a sus lechones.</Text>
        <Text style={styles.listItem}>- Lechones hambrientos y desnutridos.</Text>
      </View>
      <Text style={styles.subtitle}>Diagnóstico:</Text>
      <Text style={styles.paragraph}>
        El diagnóstico de MMA en porcinos se basa en la observación de los signos clínicos y puede confirmarse mediante análisis de laboratorio, como el cultivo de muestras de leche y exudado uterino para identificar las bacterias involucradas. Además, se pueden realizar pruebas para descartar otras enfermedades que puedan presentar síntomas similares.
      </Text>
      <Text style={styles.subtitle}>Tratamiento:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>1. Antibióticos: Para tratar infecciones bacterianas asociadas. Algunos antibióticos comunes incluyen:</Text>
        <Text style={styles.listItem}>- Amoxicilina-Ácido Clavulánico: Dosis típica es de 12-20 mg por kg de peso corporal por vía intramuscular una vez al día durante 3-5 días.</Text>
        <Text style={styles.listItem}>- Ceftiofur: Dosis típica es de 3-5 mg por kg de peso corporal por vía intramuscular una vez al día durante 3-5 días.</Text>
        <Text style={styles.listItem}>2. Antiinflamatorios: Para reducir la inflamación y el dolor.</Text>
        <Text style={styles.listItem}>3. Terapia de Soporte: Proporcionar nutrición y líquidos adecuados a los lechones que no pueden amamantar.</Text>
      </View>
      <Text style={styles.subtitle}>Medidas de Prevención:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>1. Manejo Adecuado de la Cerda: Proporcionar un ambiente limpio y cómodo durante el parto y la lactancia.</Text>
        <Text style={styles.listItem}>2. Higiene: Mantener una buena higiene en las instalaciones y evitar el contacto con fuentes de contaminación.</Text>
        <Text style={styles.listItem}>3. Control de Infecciones: Implementar prácticas de control de infecciones, como la desinfección adecuada y el manejo de los cerdos enfermos.</Text>
        <Text style={styles.listItem}>4. Nutrición: Proporcionar una dieta equilibrada y adecuada para las cerdas lactantes para mantener su salud y producción de leche.</Text>
        <Text style={styles.listItem}>5. Manejo del Estrés: Evitar el estrés en las cerdas, ya que el estrés puede contribuir a la aparición de la MMA.</Text>
        <Text style={styles.listItem}>6. Cuarentena: Aplicar una cuarentena adecuada para los cerdos nuevos antes de introducirlos en la explotación para prevenir la propagación de enfermedades.</Text>
        <Text style={styles.listItem}>7. Seguimiento Veterinario: Trabajar en estrecha colaboración con un veterinario para establecer un programa de manejo de la salud de las cerdas.</Text>
      </View>
    </ScrollView>
  );
};

export default MMAScreen;