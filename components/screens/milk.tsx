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

const ProductionScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Aumentar la producción de leche</Text>
      <Text style={styles.paragraph}>
        - Alimentación: Es el factor fundamental para el sostenimiento de la producción de leche en el ganado. Los nutrientes requeridos por el animal para la producción, son tomados de la alimentación compuesta por pastos o forrajes, concentrados y suplemento de vitaminas y minerales dentro de los cuales encontramos algunos indispensables como: calcio, fósforo, hierro, cobalto, manganeso, cobre, zinc, yodo y selenio; los cuales deben ser proporcionados en una dieta balanceada.
      </Text>
      <Text style={styles.paragraph}>
        - Bienestar animal: Otro punto elemental para mejorar la productividad láctea es velar por el bienestar y comodidad de las vacas. El hacinamiento es muy importante, se debe respetar un área mínima por animal, de esta forma disminuye el estrés. También se deben contar con corrales y reservorios limpios de agua fresca.
      </Text>
      <Text style={styles.paragraph}>
        - Reducir el estrés calórico: Resultará eficaz eliminar el estrés calórico en reses. Para ello es necesario contar con una correcta ventilación para las vacas y un uso adecuado de sombras.
      </Text>
      <Text style={styles.paragraph}>
        - Disminución de días abiertos: Si este detalle se tiene en cuenta en los predios, se podrá contribuir con el aumento de la producción láctea. Estos días constituyen el tiempo comprendido entre el parto y el momento en el cual la hembra vuelve a quedar preñada.
      </Text>
      <Text style={styles.paragraph}>
        - Aumentar el ordeño: Para mejorar la producción de una vaca lechera, una de las recomendaciones que realizan los productores es aumentar la frecuencia en el ordeño. De acuerdo con María Martínez, ganadera española, el productor puede ordeñar su animal 3 veces al día en lugar de 2. “Las vacas lactantes incrementarán su producción de leche para satisfacer las demandas de la nueva programación”, acotó la productora.
      </Text>
      </ScrollView>
  );
};

export default ProductionScreen;