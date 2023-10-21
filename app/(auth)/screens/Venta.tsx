import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import StyledTextInput from '../../../components/Inputs/StyledTextInputs';

const RegistroBovino = () => {
    const [nombre, setNombre] = useState('');
    const [producto, setProducto] = useState('');
    const [precio, setPrecio] = useState('');
    const [foto, setFoto] = useState('');
    const [numeroArete, setNumeroArete] = useState('');
    const [descripcionVenta, setDescripcionVenta] = useState('');
    const [propositoVenta, setPropositoVenta] = useState('');
    const [edad, setEdad] = useState('');

    const handleSubmit = () => {
        // Crear un objeto con los datos que deseas enviar
        const data = {
          nombre,
          producto,
          precio,
          foto,
          numeroArete,
          descripcionVenta,
          propositoVenta,
          edad,
        };
      
        // Realizar la solicitud POST
        fetch('http://localhost:3000/registro-animales', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Ajusta el tipo de contenido según tu servidor
          },
          body: JSON.stringify(data), // Convierte los datos a formato JSON
        })
          .then(response => response.json())
          .then(responseData => {
            // Aquí puedes manejar la respuesta del servidor
            console.log('Respuesta del servidor:', responseData);
            // Puedes realizar otras acciones según la respuesta del servidor
          })
          .catch(error => {
            // Manejar errores en caso de que la solicitud falle
            console.error('Error en la solicitud POST:', error);
          });
      };
      

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.formTitle}>Formulario de Venta</Text>
            <StyledTextInput
                label="Foto de Fierro"
                placeholder="Foto de Fierro"
                value={foto}
                onChangeText={setFoto}
                icon="picture-in-picture-bottom-right"
            />
            <StyledTextInput
                label="Foto de Animal"
                placeholder="Foto de Animal"
                value={foto}
                onChangeText={setFoto}
                icon="picture-in-picture-bottom-right"
            />
            <StyledTextInput
                label="Numero de Arete"
                placeholder="Numero Arete"
                value={numeroArete}
                onChangeText={setNumeroArete}
                icon="numeric"
            />
            <StyledTextInput
                label="Nombre"
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
                icon="text"
            />
            <StyledTextInput
                label="Producto"
                placeholder="Producto"
                value={producto}
                onChangeText={setProducto}
                icon="text"
            />
            <StyledTextInput
                label="Precio"
                placeholder="Precio"
                value={precio}
                onChangeText={setPrecio}
                icon="numeric"
            />
            <StyledTextInput
                label="Descripcion de Venta"
                placeholder="Descripcion de Venta"
                value={descripcionVenta}
                onChangeText={setDescripcionVenta}
                icon="text"
            />
            <StyledTextInput
                label="Proposito de Venta"
                placeholder="Proposito de Venta"
                value={propositoVenta}
                onChangeText={setPropositoVenta}
                icon="text"
            />

            <StyledTextInput
                label="Edad"
                placeholder="Edad"
                value={edad}
                onChangeText={setEdad}
                icon="numeric"
            />
            <Button  title="Registrar Venta" onPress={handleSubmit}  />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 0,
        
    },
    contentContainer: {
        paddingBottom: 20, // Agrega un margen inferior para dar espacio al botón
    },
    formTitle: {
        fontSize: 20,
        marginBottom: 10,
    },
});
export default RegistroBovino;
