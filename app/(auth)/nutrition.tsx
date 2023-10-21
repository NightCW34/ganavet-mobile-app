import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const App: React.FC = () => {
  const [edad, setEdad] = useState('');
  const [pesoCorporal, setPesoCorporal] = useState('');
  const [objetivoProduccion, setObjetivoProduccion] = useState('Carne');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edad (meses):</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEdad(text)}
        value={edad}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Peso Corporal:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPesoCorporal(text)}
        value={pesoCorporal}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Objetivo de Producción:</Text>
      <Picker
        style={styles.input}
        selectedValue={objetivoProduccion}
        onValueChange={(itemValue) => setObjetivoProduccion(itemValue)}
      >
        <Picker.Item label="Carne" value="Carne" />
        <Picker.Item label="Parendera" value="Parendera" />
      </Picker>
    </View>
  );
};


  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    width: '100%',
    padding: 10,
    marginBottom: 15,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 1,
    elevation: 2,
  },
});