import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const BabesiaInfo: React.FC = () => {
  return (
    <View style={styles.container}>
        <ScrollView>
      <Text style={styles.title}>La Babesia</Text>
      <Text>
        La babesia es una enfermedad protozoaria transmitida por garrapatas que afecta a los bovinos. Los agentes causantes son varios protozoos del género Babesia y Theileria. La enfermedad se caracteriza por la destrucción de los glóbulos rojos, lo que resulta en anemia y otros problemas de salud graves.
      </Text>
      <Text style={styles.subtitle}>Signos y Síntomas:</Text>
      <Text>1. Anemia: Puede manifestarse como mucosas pálidas, debilidad y pérdida de peso.</Text>
      <Text>2. Fiebre: Los bovinos infectados pueden presentar fiebre.</Text>
      <Text>3. Letargo y Debilidad: Los animales afectados pueden mostrar disminución en la actividad y el apetito.</Text>
      <Text>4. Ictericia: Algunos animales pueden presentar ictericia, que se manifiesta como mucosas amarillas.</Text>
      <Text>5. Disminución en la Producción de Leche: Las vacas lecheras pueden experimentar una disminución en la producción de leche.</Text>
      <Text>6. Dificultad Respiratoria: En casos graves, puede haber dificultad respiratoria.</Text>
      <Text style={styles.subtitle}>Diagnóstico:</Text>
      <Text>El diagnóstico de la babesia en bovinos se basa en la observación de los signos clínicos y se confirma mediante pruebas de laboratorio, como la observación de los protozoos en un frotis de sangre teñido o mediante pruebas serológicas.</Text>
      <Text style={styles.subtitle}>Tratamiento:</Text>
      <Text>El tratamiento de la babesia en bovinos implica el uso de antiprotozoarios para eliminar los protozoos causantes de la enfermedad. Algunos antiprotozoarios comúnmente utilizados incluyen:</Text>
      <Text>1. Imidocarb: Dosis típica es de 1.2 a 2.4 ml por cada 100 kg de peso corporal por vía intramuscular en una sola dosis.</Text>
      <Text>2. Dipropionato de Diminazeno y Aceturato de Imidocarb: Dosis típica es de 1.5 ml por cada 100 kg de peso corporal por vía intramuscular en una sola dosis.</Text>
      <Text>El tratamiento con antiprotozoarios debe ser administrado por un veterinario y puede requerir la repetición del tratamiento en función de la gravedad de la enfermedad.</Text>
      <Text style={styles.subtitle}>Medidas de Prevención:</Text>
      <Text>La prevención de la babesia en bovinos es fundamental y puede incluir:</Text>
      <Text>1. Control de Garrapatas: Implementar medidas de control de garrapatas para reducir la transmisión de la babesia. Esto incluye el uso de insecticidas, la eliminación de garrapatas de los animales y la limpieza de áreas de pastoreo.</Text>
      <Text>2. Quarantena: Realizar una cuarentena adecuada para los animales recién llegados a la explotación para detectar y tratar posibles casos de babesia antes de su introducción.</Text>
      <Text>3. Programas de Tratamiento: En áreas endémicas, algunos productores pueden utilizar programas de tratamiento antiparasitario bajo la supervisión de un veterinario.</Text>
      <Text>4. Uso de Repelentes: El uso de repelentes para garrapatas en bovinos puede ayudar a reducir la exposición a las garrapatas.</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'justify',
    paddingHorizontal: '5%',
    backgroundColor: "#fff",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign:'center'

  },
  subtitle: {
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default BabesiaInfo;
