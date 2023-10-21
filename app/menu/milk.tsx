import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F6F7FF",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A90E2",
  },
  paragraph: {
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 10,
    color: "#555555",
  },
  list: {
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    color: "#666666",
  },
});

const ProductionScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Aumentar la producción de leche</Text>
        <View style={styles.card}>
          <Text style={styles.subtitle}>Alimentacion</Text>
          <Text style={styles.paragraph}>
            Es el factor fundamental para el sostenimiento de la producción de
            leche en el ganado. Los nutrientes requeridos por el animal para la
            producción, son tomados de la alimentación compuesta por pastos o
            forrajes, concentrados y suplemento de vitaminas y minerales dentro
            de los cuales encontramos algunos indispensables como: calcio,
            fósforo, hierro, cobalto, manganeso, cobre, zinc, yodo y selenio;
            los cuales deben ser proporcionados en una dieta balanceada.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Bienestar animal</Text>
          <Text style={styles.paragraph}>
            Otro punto elemental para mejorar la productividad láctea es velar
            por el bienestar y comodidad de las vacas. El hacinamiento es muy
            importante, se debe respetar un área mínima por animal, de esta
            forma disminuye el estrés. También se deben contar con corrales y
            reservorios limpios de agua fresca.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Reducir el estrés calórico</Text>
          <Text style={styles.paragraph}>
            Resultará eficaz eliminar el estrés calórico en reses. Para ello es
            necesario contar con una correcta ventilación para las vacas y un
            uso adecuado de sombras.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Disminución de días abiertos</Text>
          <Text style={styles.paragraph}>
            Si este detalle se tiene en cuenta en los predios, se podrá
            contribuir con el aumento de la producción láctea. Estos días
            constituyen el tiempo comprendido entre el parto y el momento en el
            cual la hembra vuelve a quedar preñada.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Aumentar el ordeño</Text>
          <Text style={styles.paragraph}>
            Para mejorar la producción de una vaca lechera, una de las
            recomendaciones que realizan los productores es aumentar la
            frecuencia en el ordeño. De acuerdo con María Martínez, ganadera
            española, el productor puede ordeñar su animal 3 veces al día en
            lugar de 2. “Las vacas lactantes incrementarán su producción de
            leche para satisfacer las demandas de la nueva programación”, acotó
            la productora.
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProductionScreen;
