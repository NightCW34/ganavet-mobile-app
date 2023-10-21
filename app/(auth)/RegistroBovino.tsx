import React, { useState } from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import StyledTextInput from '../../components/Inputs/StyledTextInputs';


const RegistroBovino = () => {

    const [foto, setFoto] = useState("");
    const [numeroArete, setNumeroArete] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [sexo, setSexo] = useState('');
    const [registroVacunas, setRegistroVacunas] = useState('');
    const [peso, setPeso] = useState('');
    const [historialClinico, setHistorialClinico] = useState('');
    const [estadoReproductivo, setEstadoReproductivo] = useState('');
    const [razaAnimal, setRazaAnimal] = useState('');
    const [categoriaAnimal, setCategoriaAnimal] = useState('');

    const handleSubmit = () => {

        const data = {
            
                "foto": "dededede",
                "numeroArete": "44444",
                "fechaNacimiento": "444444444",
                "sexo": "M444",
                "registroVacunas": "DEDE444",
                "peso": 6000,
                "historialClinico": "dededededede",
                "estadoReproductivo": "NULL",
                "razaAnimal": {
                    "id": 1
                },
                "categoriaAnimal": {
                    "id": 1
                }
    
        };
        
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
        <Text style={styles.formTitle}>Registro de Animal</Text>
        <StyledTextInput
            label="Foto de Animal"
            placeholder="Foto de Animal"
            value={foto}
            onChangeText={setFoto}
            icon="camera"
        />
        <StyledTextInput
            label="Numero de Arete"
            placeholder="Numero Arete"
            value={numeroArete}
            onChangeText={setNumeroArete}
            icon="account"
        />
        <StyledTextInput
            label="Fecha de Nacimiento"
            placeholder="Fecha de Nacimiento"
            value={fechaNacimiento}
            onChangeText={setFechaNacimiento}
            icon="calendar"
        />
        <StyledTextInput
            label="Sexo"
            placeholder="Sexo"
            value={sexo}
            onChangeText={setSexo}
            icon="filter-variant-plus"
        />
     
        <StyledTextInput
            label="Registro de Vacunas"
            placeholder="Registro de Vacunas"
            value={registroVacunas}
            onChangeText={setRegistroVacunas}
            icon="library-shelves"
        />
        <StyledTextInput
            label="Peso"
            placeholder="Peso"
            value={peso}
            onChangeText={setPeso}
            icon="account"
        />
        <StyledTextInput
            label="Historial Clinico"
            placeholder="Historial Clinico"
            value={historialClinico}
            onChangeText={setHistorialClinico}
            icon="account"
        />
        <StyledTextInput
            label="Estado Reproductivo"
            placeholder="Estado Reproductivo"
            value={estadoReproductivo}
            onChangeText={setEstadoReproductivo}
            icon="history"
        />
        <StyledTextInput
            label="Raza Animal"
            placeholder="Raza Animal"
            value={razaAnimal}
            onChangeText={setRazaAnimal}
            icon="guy-fawkes-mask"
        />
        <StyledTextInput
            label="Categoria Animal"
            placeholder="Categoria Animal"
            value={categoriaAnimal}
            onChangeText={setCategoriaAnimal}
            icon="library-shelves"
        />
        <Button title="Registrar Animal" onPress={handleSubmit} />
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
