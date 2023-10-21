import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


interface BotonIconoProps {
  icono: string; // Tipo de cadena para el nombre del ícono
  texto: string;
}

const BotonIcono: React.FC<BotonIconoProps> = ({ icono, texto }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <View style={styles.button}>
        <Icon name={icono} style={styles.icon} />
        <Text style={styles.text}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};

const diseasesPorcine = () => {
  return (
    <View style={styles.container}>
      <BotonIcono icono="heartbeat" texto="Dermatitis Exudativa en Porcinos" />
      <BotonIcono icono="bug" texto="Coccidiosis en Porcinos" />
      <BotonIcono icono="bug" texto="´Problemas podales" />
      <BotonIcono icono="bomb" texto="Neumonía en Porcinos" />
      <BotonIcono icono="medkit" texto="Mastitis-Metritis-Agalactia (MMA)"  />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',  
    alignContent: 'center'
  },
  buttonContainer: {
    width: '50%', // Para dos botones en una fila
    alignItems: 'center',
    marginBottom: 16, // Espacio entre filas
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '80%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    fontSize: 40,
    color: '#333',
  },
  text: {
    textAlign: 'center',
  },
});

export default diseasesPorcine;
