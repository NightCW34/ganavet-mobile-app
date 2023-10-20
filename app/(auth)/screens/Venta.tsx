import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Venta = () => {
  const [nombre, setNombre] = useState('');
  const [producto, setProducto] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = () => {
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor o realizar cálculos
  };

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Formulario de Venta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Producto"
        value={producto}
        onChangeText={(text) => setProducto(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        value={precio}
        onChangeText={(text) => setPrecio(text)}
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  formTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default Venta;
