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

const NeumoniaScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Neumonía en Porcinos</Text>
      <Text style={styles.paragraph}>
        La neumonía en porcinos es una enfermedad respiratoria que afecta a los cerdos y que puede tener múltiples causas, incluyendo infecciones bacterianas, virales y factores ambientales. Es una enfermedad importante en la industria porcina y puede tener un impacto significativo en la salud y el rendimiento de los cerdos.
      </Text>
      <Text style={styles.subtitle}>Signos y Síntomas:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>1. Tos: Los cerdos afectados pueden presentar tos persistente.</Text>
        <Text style={styles.listItem}>2. Dificultad Respiratoria: Los cerdos pueden mostrar dificultad para respirar, respiración rápida y superficial.</Text>
        <Text style={styles.listItem}>3. Secreción Nasal: Puede haber secreción nasal, que puede ser clara o purulenta (de color amarillo o verdoso).</Text>
        <Text style={styles.listItem}>4. Letargo: Los cerdos pueden volverse letárgicos y mostrar una disminución en la actividad y el apetito.</Text>
        <Text style={styles.listItem}>5. Fiebre: La fiebre es un signo común de infección y puede estar presente en cerdos con neumonía.</Text>
        <Text style={styles.listItem}>6. Pérdida de Peso: Los cerdos afectados pueden experimentar una pérdida de peso debido a la disminución en la ingesta de alimentos y la dificultad para respirar.</Text>
      </View>
      <Text style={styles.subtitle}>Diagnóstico:</Text>
      <Text style={styles.paragraph}>
        El diagnóstico de la neumonía en porcinos se basa en la observación de los signos clínicos y en la historia clínica de los animales afectados. Para determinar la causa subyacente de la neumonía y su gravedad, pueden realizarse pruebas adicionales, como análisis de muestras de secreciones respiratorias y cultivos bacterianos.
      </Text>
      <Text style={styles.subtitle}>Tratamiento:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>1. Antibióticos: Los antibióticos son a menudo necesarios para tratar infecciones bacterianas asociadas con la neumonía. Algunos antibióticos comunes incluyen:</Text>
        <Text style={styles.listItem}>- Enrofloxacina: Dosis típica es de 5-10 mg por kg de peso corporal por vía intramuscular o intravenosa una vez al día durante 3-5 días.</Text>
        <Text style={styles.listItem}>- Tilmicosina: Dosis típica es de 10-20 mg por kg de peso corporal por vía intramuscular una vez al día durante 3-5 días.</Text>
        <Text style={styles.listItem}>2. Antiinflamatorios: En algunos casos, se pueden administrar antiinflamatorios para reducir la inflamación en los pulmones y aliviar la dificultad respiratoria.</Text>
        <Text style={styles.listItem}>3. Terapia de Apoyo: Proporcionar terapia de apoyo, como líquidos y electrolitos para mantener la hidratación y el equilibrio electrolítico.</Text>
      </View>
      <Text style={styles.subtitle}>Medidas de Prevención:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>1. Bioseguridad: Implementar prácticas de bioseguridad adecuadas para prevenir la introducción y propagación de enfermedades en la explotación porcina.</Text>
        <Text style={styles.listItem}>2. Vacunación: Utilizar programas de vacunación apropiados para prevenir infecciones virales comunes, como la gripe porcina.</Text>
        <Text style={styles.listItem}>3. Control Ambiental: Mantener un ambiente limpio y bien ventilado en las instalaciones de cría de cerdos.</Text>
        <Text style={styles.listItem}>4. Manejo Adecuado: Evitar el estrés y el hacinamiento, ya que el estrés puede aumentar la susceptibilidad a infecciones respiratorias.</Text>
        <Text style={styles.listItem}>5. Cuarentena: Aplicar una cuarentena adecuada para los cerdos nuevos antes de introducirlos en la explotación.</Text>
        <Text style={styles.listItem}>6. Alimentación y Nutrición: Proporcionar una alimentación equilibrada y adecuada para mantener la salud y la resistencia del sistema inmunológico de los cerdos.</Text>
      </View>
    </ScrollView>
  );
};

export default NeumoniaScreen;