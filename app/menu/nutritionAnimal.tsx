import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import RegularButton from "../../components/Buttons/RegularButton";

const nutritionAnimal = () => {
  const [displayText, setDisplayText] = useState("");

  const handleButtonPress = () => {
    setDisplayText(
      " RACIONES EN LIBRAS (EN 100 LIBRAS):                               Maiz:46.7 , Soya:15.9 , pulpa de citricos: 9.5 , Harina de arroz:28.1 "
    );
  };

  const [text, onChangeText] = React.useState("Ingrese la edad");
  const [text2, onChangeText2] = React.useState("Ingrese el peso en libras");
  const [number, onChangeNumber] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Ingrese la edad en meses"
        //value={text}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        // value={text2}
        placeholder="Ingrese el peso en kg"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        //value={number}
        placeholder="Objetivo de produccion"
        keyboardType="ascii-capable"
      />
      <Text style={{ textAlign: "center" }}>
        Ingrese 4 alimentos que tenga disponible
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        //value={number}
        placeholder="1er. Alimento"
        keyboardType="ascii-capable"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        //value={number}
        placeholder="2do. Alimento"
        keyboardType="ascii-capable"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        //value={number}
        placeholder="3er. Alimento"
        keyboardType="ascii-capable"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        //value={number}
        placeholder="4to. Alimento"
        keyboardType="ascii-capable"
      />
      <View style={styles.container}>
        <RegularButton onPress={handleButtonPress} style={{ height: "auto" }}>
          Calcular Racion
        </RegularButton>
        <Text style={styles.text}>{displayText}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  input: {
    height: 35,
    weight: 70,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: "2%",
    marginHorizontal: "5%",
    borderColor: "green",
  },
  container2: {
    flex: 1,
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  TouchableOpacity: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    width: "30%",
    height: "25%",
    borderRadius: 10,
    foregroundColor: "white",
  },

  text: {
    marginTop: 15,
    alignContent: "center",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default nutritionAnimal;
