import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const bovineVaccination = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        CALENDARIO DE VACUNACION DE BOVINOS PROPUESTO POR EL INTA
      </Text>
      <Image
        source={require("../../assets/images/calendarVBovine.png")}
        style={styles.imagen}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "15%",
    paddingHorizontal: "5%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    paddingTop: "5%",
    paddingBottom: "5%",
    textAlign: "justify",
  },
  imagen: {
    marginTop: "5%",
    width: "95%",
    height: "95%", // Deja que la altura se ajuste automáticamente
  },
});

export default bovineVaccination;
