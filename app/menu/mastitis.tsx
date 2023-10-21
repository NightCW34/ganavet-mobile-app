import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const MastitisImage = require("../../assets/images/danger.png"); // Importa una imagen para usarla

const MastitisScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.titleContainer}>
          <Image source={MastitisImage} style={styles.image} />
          <Text style={styles.title}>La Mastitis en Bovinos</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>¿Qué es la Mastitis?</Text>
          <Text style={styles.text}>
            La mastitis en bovinos es una inflamación de la glándula mamaria,
            generalmente causada por una infección bacteriana. Esta enfermedad
            es una de las principales preocupaciones en la industria lechera, ya
            que puede afectar la calidad y la cantidad de leche producida por la
            vaca.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Signos y Síntomas</Text>
          <Text style={styles.text}>
            • Hinchazón y calor en la glándula mamaria afectada.
          </Text>
          <Text style={styles.text}>
            • Dolor y sensibilidad en el área afectada.
          </Text>
          <Text style={styles.text}>
            • Cambios en la textura de la leche, que puede volverse más espesa,
            con coágulos o con sangre.
          </Text>
          <Text style={styles.text}>
            • Reducción en la producción de leche.
          </Text>
          <Text style={styles.text}>• Fiebre y letargo en casos graves.</Text>
          <Text style={styles.text}>
            • La ubre afectada puede estar enrojecida.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Diagnóstico y Tratamiento</Text>
          <Text style={styles.text}>
            El diagnóstico de la mastitis en bovinos se basa en la observación
            de los signos clínicos mencionados anteriormente, así como en el
            análisis de la leche de la ubre afectada. Se puede realizar un
            cultivo bacteriano de la leche para identificar la cepa bacteriana
            involucrada.
          </Text>
          <Text style={styles.text}>
            El tratamiento de la mastitis en bovinos generalmente implica el uso
            de antibióticos específicos para tratar la infección bacteriana. Los
            antibióticos comúnmente utilizados incluyen Penicilina G, Ampicilina
            y Cefalexina.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Medidas de Prevención</Text>
          <Text style={styles.text}>
            • Higiene y Manejo: Mantener las áreas de ordeño limpias y
            asegurarse de que las ubres de las vacas estén limpias y secas antes
            del ordeño.
          </Text>
          <Text style={styles.text}>
            • Detección Temprana: Realizar un ordeño regular y detectar
            tempranamente cualquier signo de mastitis.
          </Text>
          <Text style={styles.text}>
            • Separación de Vacas Infectadas: Aislar a las vacas con mastitis
            para evitar la propagación de la enfermedad.
          </Text>
          <Text style={styles.text}>
            • Uso de Preparados Intramamarios: Algunos preparados intramamarios
            se pueden utilizar como medida preventiva.
          </Text>
          <Text style={styles.text}>
            • Manejo de Estrés: Reducir el estrés en las vacas, ya que el estrés
            puede aumentar el riesgo de mastitis.
          </Text>
          <Text style={styles.text}>
            • Buena Nutrición: Mantener una buena nutrición y salud general del
            ganado.
          </Text>
          <Text style={styles.text}>
            • Manejo de Garrapatas y Moscas: Las garrapatas y las moscas pueden
            transmitir bacterias que causan mastitis, por lo que es importante
            controlar su población.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  scrollViewContent: {
    paddingTop: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default MastitisScreen;
