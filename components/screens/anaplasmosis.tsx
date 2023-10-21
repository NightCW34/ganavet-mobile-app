import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const AnaplasmosisInfo: React.FC = () => {
  return (
    <View style={styles.container}>
        <ScrollView>
      <Text style={styles.title}>La Anaplasmosis</Text>
      <Text>
        La anaplasmosis es una enfermedad infecciosa transmitida por garrapatas que afecta a los bovinos. Es causada por la bacteria Anaplasma marginale y puede resultar en anemia hemolítica y otros problemas de salud graves en el ganado.
      </Text>
      <Text style={styles.subtitle}>Signos y Síntomas:</Text>
      <Text>1. Anemia: Puede manifestarse como mucosas pálidas (encías y ojos), debilidad y pérdida de peso.</Text>
      <Text>2. Fiebre: Los bovinos infectados pueden tener fiebre.</Text>
      <Text>3. Letargo y Debilidad: Los animales afectados pueden mostrar una disminución en la actividad y el apetito.</Text>
      <Text>4. Ictericia: Algunos animales pueden presentar ictericia, que se manifiesta como mucosas amarillas.</Text>
      <Text>5. Disminución en la Producción de Leche: Las vacas lecheras pueden experimentar una disminución en la producción de leche.</Text>
      <Text>6. Hemoglobinuria: En casos graves, puede haber presencia de orina rojiza debido a la degradación de los glóbulos rojos.</Text>
      <Text style={styles.subtitle}>Diagnóstico:</Text>
      <Text>El diagnóstico de la anaplasmosis en bovinos se basa en la observación de los signos clínicos y se confirma mediante pruebas de laboratorio, como la prueba de microscopía para detectar Anaplasma marginale en una muestra de sangre.</Text>
      <Text style={styles.subtitle}>Tratamiento:</Text>
      <Text>El tratamiento de la anaplasmosis en bovinos implica el uso de antibióticos para eliminar la bacteria Anaplasma marginale. Los antibióticos comúnmente utilizados incluyen:</Text>
      <Text>1. Oxitetraciclina: Dosis típica es de 10-20 mg/kg de peso corporal por vía intramuscular o subcutánea durante 3-5 días. La dosis y la duración pueden variar según la gravedad de la enfermedad.</Text>
      <Text>2. Tetraciclina: Dosis típica es de 20-25 mg/kg de peso corporal por vía intramuscular o subcutánea durante 3-5 días.</Text>
      <Text>El uso de estos antibióticos debe ser supervisado por un veterinario, ya que se deben seguir pautas específicas de tratamiento.</Text>
      <Text style={styles.subtitle}>Medidas de Prevención:</Text>
      <Text>La prevención de la anaplasmosis en bovinos es fundamental y puede incluir:</Text>
      <Text>1. Control de Garrapatas: Implementar medidas de control de garrapatas para reducir la transmisión de la bacteria Anaplasma marginale. Esto incluye el uso de insecticidas y la eliminación de garrapatas de los animales.</Text>
      <Text>2. Manejo Sanitario: Evitar el contacto entre animales infectados y no infectados y mantener un manejo sanitario adecuado.</Text>
      <Text>3. Quarantena: Realizar una cuarentena adecuada para los animales recién llegados a la explotación para detectar y tratar posibles casos de anaplasmosis antes de su introducción.</Text>
      <Text>4. Uso de Antibióticos Profilácticos: En áreas endémicas, algunos productores pueden utilizar antibióticos profilácticos bajo la supervisión de un veterinario.</Text>
      <Text>5. Control de Vectores: Implementar medidas de control de garrapatas y moscas que transmiten la enfermedad.</Text>
      <Text>6. Programas de Vacunación: En algunas áreas, se pueden utilizar vacunas para prevenir la anaplasmosis.</Text>
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
    textAlign:'justify'
  },
});

export default AnaplasmosisInfo;