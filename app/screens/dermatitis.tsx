import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const DermatitisExudativaInfo: React.FC = () => {
  return (
    <View style={styles.container}>
        <ScrollView>
      <Text style={styles.title}>Dermatitis Exudativa en Porcinos</Text>
      <Text>
        La dermatitis exudativa, también conocida como enfermedad del "Greasy Pig" en inglés, es una enfermedad cutánea que afecta a los cerdos jóvenes. Esta enfermedad se caracteriza por la presencia de lesiones cutáneas, secreciones exudativas y pérdida de pelo en los cerdos afectados. La dermatitis exudativa es causada por la bacteria Staphylococcus hyicus.
      </Text>
      <Text style={styles.subtitle}>Signos y Síntomas:</Text>
      <Text>
        1. Pérdida de Pelo: Los cerdos afectados pueden perder pelo en áreas del cuerpo, especialmente en la cabeza, el cuello y el dorso.
      </Text>
      <Text>
        2. Lesiones Cutáneas: Se forman costras y lesiones cutáneas, que pueden ser rojas y dolorosas, en la piel.
      </Text>
      <Text>
        3. Secreción Exudativa: Las lesiones pueden liberar una secreción exudativa que es pegajosa y maloliente.
      </Text>
      <Text>
        4. Prurito: Los cerdos afectados pueden rascarse intensamente debido a la picazón asociada con las lesiones.
      </Text>
      <Text style={styles.subtitle}>Diagnóstico:</Text>
      <Text>
        El diagnóstico de la dermatitis exudativa en porcinos generalmente se basa en la observación de los signos clínicos y la historia clínica de los animales afectados. Pueden realizarse cultivos bacterianos de muestras de piel o exudado para confirmar la presencia de Staphylococcus hyicus.
      </Text>
      <Text style={styles.subtitle}>Tratamiento:</Text>
      <Text>
        El tratamiento de la dermatitis exudativa en porcinos implica medidas terapéuticas para controlar la infección bacteriana y aliviar los síntomas. Algunas opciones de tratamiento pueden incluir:
      </Text>
      <Text>1. Antibióticos: Se pueden administrar antibióticos para tratar la infección causada por Staphylococcus hyicus. Algunos antibióticos comunes incluyen:</Text>
      <Text>- Penicilina: Dosis típica es de 10,000 a 20,000 UI por kg de peso corporal por vía intramuscular una vez al día durante 3-5 días.</Text>
      <Text>- Cefalosporinas: La dosis y el régimen varían según el tipo de cefalosporina utilizada.</Text>
      <Text>2. Baños y Limpiadores Cutáneos: Se pueden utilizar baños y limpiadores cutáneos suaves para eliminar las costras y la secreción exudativa.</Text>
      <Text>3. Cuidados de la Piel: Se pueden aplicar pomadas o cremas en la piel afectada para mantenerla hidratada y protegida.</Text>
      <Text>4. Control Ambiental: Mejorar las condiciones de alojamiento y reducir el hacinamiento y la suciedad en el ambiente de los cerdos puede ayudar en la prevención y el control.</Text>
      <Text style={styles.subtitle}>Medidas de Prevención:</Text>
      <Text>
        Las medidas de prevención de la dermatitis exudativa en porcinos incluyen:
      </Text>
      <Text>1. Higiene: Mantener un ambiente limpio y seco en las instalaciones de cría de cerdos.</Text>
      <Text>2. Cuarentena: Aislar a los cerdos enfermos para evitar la propagación de la enfermedad.</Text>
      <Text>3. Manejo de la Piel: Inspeccionar regularmente la piel de los cerdos para detectar signos tempranos de la enfermedad y tomar medidas rápidas si se detectan.</Text>
      <Text>4. Manejo del Estrés: Reducir el estrés en los cerdos, ya que el estrés puede contribuir al desarrollo de la enfermedad.</Text>
      <Text>5. Vacunación: En algunas explotaciones, se pueden utilizar vacunas específicas para prevenir la dermatitis exudativa.</Text>
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

export default DermatitisExudativaInfo;