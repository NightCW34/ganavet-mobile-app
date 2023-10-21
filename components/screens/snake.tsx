import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const snake: React.FC = () => {
  return (
    <View style={styles.container}>
        <ScrollView>
      <Text style={styles.title}>Piquete de Culebra en Bovinos</Text>
      <Text>
        El término "piquete de culebra" en bovinos no se refiere a una enfermedad específica, sino a la mordedura o picadura de una serpiente venenosa en un bovino. La gravedad de la mordedura de serpiente depende del tipo de serpiente involucrada y de la cantidad de veneno inyectado. A continuación, se describen los aspectos relacionados con la mordedura de serpiente en bovinos:
      </Text>
      <Text style={styles.subtitle}>Signos y Síntomas:</Text>
      <Text>
        1. Dolor y Hinchazón: La zona de la mordedura puede estar inflamada y dolorida.
      </Text>
      <Text>
        2. Coagulopatía: Algunas serpientes venenosas producen veneno que afecta la capacidad de coagulación de la sangre, lo que puede dar lugar a sangrado inusual o hematomas.
      </Text>
      <Text>
        3. Dificultad para Respirar: En casos graves, la mordedura puede causar dificultad respiratoria debido a la hinchazón en la garganta y el cuello.
      </Text>
      <Text>
        4. Letargo: Los bovinos pueden volverse letárgicos o mostrar signos de malestar general.
      </Text>
      <Text>
        5. Shock: En mordeduras graves, puede producirse un shock debido a la respuesta del cuerpo al veneno.
      </Text>
      <Text style={styles.subtitle}>Diagnóstico:</Text>
      <Text>
        El diagnóstico de una mordedura de serpiente en un bovino generalmente se basa en la observación de los signos clínicos y en la confirmación de la presencia de una herida de mordedura. La identificación de la serpiente responsable puede ser útil, pero no siempre es posible.
      </Text>
      <Text style={styles.subtitle}>Tratamiento:</Text>
      <Text>
        El tratamiento de una mordedura de serpiente en bovinos es de suma importancia y debe ser realizado por un veterinario. Algunas medidas de tratamiento pueden incluir:
      </Text>
      <Text>1. Analgesia: El alivio del dolor puede ser necesario.</Text>
      <Text>2. Antídoto: Si se conoce el tipo de serpiente y está disponible un antídoto específico, este puede ser administrado por un profesional veterinario.</Text>
      <Text>3. Fluidoterapia: Para mantener la hidratación y el flujo sanguíneo adecuados.</Text>
      <Text>4. Medicamentos: Se pueden administrar medicamentos para tratar los efectos del veneno, como anticoagulantes o antiinflamatorios.</Text>
      <Text style={styles.subtitle}>Medidas de Prevención:</Text>
      <Text>
        Las medidas de prevención del piquete de culebra en bovinos incluyen:
      </Text>
      <Text>1. Control de Serpientes: Implementar medidas para reducir la presencia de serpientes venenosas en el área, como la eliminación de escondites y la aplicación de medidas de control de plagas.</Text>
      <Text>2. Monitoreo: Mantener un monitoreo regular de los bovinos en busca de signos de mordeduras de serpiente y tomar medidas inmediatas si se sospecha una mordedura.</Text>
      <Text>3. Manejo de Pastizales: Mantener pastizales limpios y ordenados para reducir los escondites para serpientes.</Text>
      <Text>4. Educación: Capacitar al personal en la identificación de serpientes venenosas y en la toma de medidas de seguridad al trabajar en áreas donde pueden estar presentes.</Text>
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

export default snake;