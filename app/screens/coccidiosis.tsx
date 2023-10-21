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

const CoccidiosisScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Coccidiosis en Porcinos</Text>
      <Text style={styles.paragraph}>
        La coccidiosis es una enfermedad parasitaria causada por protozoos del género Eimeria que afecta a varios animales, incluyendo porcinos. Estos parásitos invaden el revestimiento del intestino, lo que puede llevar a síntomas gastrointestinales y pérdida de peso en los cerdos.
      </Text>
      <Text style={styles.paragraph}>
        Signos y Síntomas: Los signos y síntomas de la coccidiosis en porcinos pueden variar en gravedad, pero generalmente incluyen:
      </Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>Diarrea: Uno de los síntomas más comunes es la diarrea, que puede ser líquida y contener sangre en casos graves.</Text>
        <Text style={styles.listItem}>Deshidratación: La diarrea puede llevar a la deshidratación, que se manifiesta como debilidad, letargo y sed excesiva.</Text>
        <Text style={styles.listItem}>Pérdida de Peso: Los cerdos afectados pueden experimentar una pérdida de peso significativa debido a la mala absorción de nutrientes.</Text>
        <Text style={styles.listItem}>Dificultad para Alimentarse: Algunos cerdos pueden mostrar una disminución en el apetito y rechazo de alimentos.</Text>
        <Text style={styles.listItem}>Decaimiento: Los cerdos afectados pueden mostrar signos de debilidad y letargo.</Text>
      </View>
      <Text style={styles.paragraph}>
        Diagnóstico: El diagnóstico de la coccidiosis en porcinos se basa en la observación de los signos clínicos y en la identificación de oocistos (etapas reproductivas de los protozoos) en las muestras de heces de los cerdos. Esto se realiza mediante un examen microscópico.
      </Text>
      <Text style={styles.paragraph}>
        Tratamiento: El tratamiento de la coccidiosis en porcinos implica medidas para controlar la infección y tratar los síntomas. Algunas opciones de tratamiento pueden incluir:
      </Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>Anticoccidianos: Se pueden administrar medicamentos anticoccidianos específicos para tratar la infección. Algunos de los medicamentos comunes incluyen:</Text>
        <Text style={styles.listItem}>- Amprolium: Dosis típica es de 20 mg/kg de peso corporal por vía oral una vez al día durante 5-7 días.</Text>
        <Text style={styles.listItem}>- Sulfadimetoxina y Ormetoprim: Dosis típica es de 20-50 mg/kg de peso corporal por vía oral una vez al día durante 5-7 días.</Text>
        <Text style={styles.listItem}>Terapia de Apoyo: Proporcionar terapia de apoyo, como la administración de líquidos y electrolitos para tratar la deshidratación.</Text>
      </View>
      <Text style={styles.paragraph}>
        Medidas de Prevención: Las medidas de prevención de la coccidiosis en porcinos incluyen:
      </Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>Higiene: Mantener un ambiente limpio y seco en las instalaciones de cría de cerdos.</Text>
        <Text style={styles.listItem}>Cuarentena: Aislar a los cerdos enfermos para evitar la propagación de la enfermedad.</Text>
        <Text style={styles.listItem}>Manejo de las Muestras de Heces: Realizar análisis regulares de muestras de heces para detectar la presencia de oocistos y tomar medidas rápidas si se detecta una infección.</Text>
        <Text style={styles.listItem}>Mejora de las Condiciones de Alojamiento: Mejorar las condiciones de alojamiento y reducir el hacinamiento y la suciedad en el ambiente de los cerdos.</Text>
        <Text style={styles.listItem}>Estrategias de Alimentación: Implementar estrategias de alimentación adecuadas y evitar cambios bruscos en la dieta que puedan desencadenar la enfermedad.</Text>
        <Text style={styles.listItem}>Control de Vectores: Controlar vectores, como roedores, que pueden transmitir oportunistamente oocistos.</Text>
      </View>
    </ScrollView>
  );
};

export default CoccidiosisScreen;