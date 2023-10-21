import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';


const MastitisScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>La mastitis</Text>
      <Text style={styles.paragraph}>
        La mastitis en bovinos es una inflamación de la glándula mamaria, generalmente causada por una infección bacteriana. Esta enfermedad es una de las principales preocupaciones en la industria lechera, ya que puede afectar la calidad y la cantidad de leche producida por la vaca.
      </Text>
      <Text style={styles.paragraph}>
        Signos y Síntomas: Los signos y síntomas de la mastitis en bovinos pueden variar en gravedad, pero generalmente incluyen:
      </Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>Hinchazón y calor en la glándula mamaria afectada.</Text>
        <Text style={styles.listItem}>Dolor y sensibilidad en el área afectada.</Text>
        <Text style={styles.listItem}>Cambios en la textura de la leche, que puede volverse más espesa, con coágulos o con sangre.</Text>
        <Text style={styles.listItem}>Reducción en la producción de leche.</Text>
        <Text style={styles.listItem}>Fiebre y letargo en casos graves.</Text>
        <Text style={styles.listItem}>La ubre afectada puede estar enrojecida.</Text>
      </View>
      <Text style={styles.paragraph}>
        Diagnóstico: El diagnóstico de la mastitis en bovinos se basa en la observación de los signos clínicos mencionados anteriormente, así como en el análisis de la leche de la ubre afectada. Se puede realizar un cultivo bacteriano de la leche para identificar la cepa bacteriana involucrada.
      </Text>
      <Text style={styles.paragraph}>
        Tratamiento: El tratamiento de la mastitis en bovinos generalmente implica el uso de antibióticos específicos para tratar la infección bacteriana. Los antibióticos comúnmente utilizados incluyen:
      </Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>Penicilina G: Dosis típica es de 1.000.000 UI por vía intramamaria en la ubre afectada una vez al día durante 3-5 días.</Text>
        <Text style={styles.listItem}>Ampicilina: Dosis típica es de 500.000 UI por vía intramamaria en la ubre afectada una vez al día durante 3-5 días.</Text>
        <Text style={styles.listItem}>Cefalexina: Dosis típica es de 300 mg por vía intramamaria en la ubre afectada una vez al día durante 3-5 días.</Text>
      </View>
      <Text style={styles.paragraph}>
        Es importante que un veterinario realice el diagnóstico y prescriba el tratamiento adecuado, ya que el uso incorrecto de antibióticos puede contribuir al desarrollo de resistencia bacteriana.
      </Text>
      <Text style={styles.paragraph}>
        Medidas de Prevención: La prevención de la mastitis en bovinos es esencial para mantener la salud del ganado y la calidad de la leche. Algunas medidas de prevención incluyen:
      </Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>Higiene y Manejo: Mantener las áreas de ordeño limpias y asegurarse de que las ubres de las vacas estén limpias y secas antes del ordeño.</Text>
        <Text style={styles.listItem}>Detección Temprana: Realizar un ordeño regular y detectar tempranamente cualquier signo de mastitis.</Text>
        <Text style={styles.listItem}>Separación de Vacas Infectadas: Aislar a las vacas con mastitis para evitar la propagación de la enfermedad.</Text>
        <Text style={styles.listItem}>Uso de Preparados Intramamarios: Algunos preparados intramamarios se pueden utilizar como medida preventiva.</Text>
        <Text style={styles.listItem}>Manejo de Estrés: Reducir el estrés en las vacas, ya que el estrés puede aumentar el riesgo de mastitis.</Text>
        <Text style={styles.listItem}>Buena Nutrición: Mantener una buena nutrición y salud general del ganado.</Text>
        <Text style={styles.listItem}>Manejo de Garrapatas y Moscas: Las garrapatas y las moscas pueden transmitir bacterias que causan mastitis, por lo que es importante controlar su población.</Text>
      </View>
    </ScrollView>
  );
};

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

export default MastitisScreen;