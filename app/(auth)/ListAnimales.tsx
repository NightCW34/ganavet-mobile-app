import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';


const ListAnimales = () => {
    interface Animal {
        id: number;
        foto: string;
        numeroArete: string;
        fechaNacimiento: string;
        sexo: string;
        registroVacunas: string;
        peso: number;
        historialClinico: string;
        estadoReproductivo: string;
        
       
      }
      const [animales, setAnimales] = useState<Animal[]>([
        {
          id: 1,
          foto: 'imagen1.jpg',
          numeroArete: '12345',
          fechaNacimiento: '01/01/2020',
          sexo: 'Macho',
          registroVacunas: 'Sí',
          peso: 500,
          historialClinico: 'Sin problemas de salud conocidos.',
          estadoReproductivo: 'No aplica',
        },
        {
          id: 2,
          foto: 'imagen2.jpg',
          numeroArete: '67890',
          fechaNacimiento: '15/03/2019',
          sexo: 'Hembra',
          registroVacunas: 'No',
          peso: 600,
          historialClinico: 'Control dental anual.',
          estadoReproductivo: 'En proceso',
        },
        {
          id: 3,
          foto: 'imagen2.jpg',
          numeroArete: '67890',
          fechaNacimiento: '15/03/2019',
          sexo: 'Hembra',
          registroVacunas: 'No',
          peso: 600,
          historialClinico: 'Control dental anual.',
          estadoReproductivo: 'En proceso',
        },
        {
          id: 4,
          foto: 'imagen2.jpg',
          numeroArete: '67890',
          fechaNacimiento: '15/03/2019',
          sexo: 'Hembra',
          registroVacunas: 'No',
          peso: 600,
          historialClinico: 'Control dental anual.',
          estadoReproductivo: 'En proceso',
        },
        {
          id: 5,
          foto: 'imagen2.jpg',
          numeroArete: '67890',
          fechaNacimiento: '15/03/2019',
          sexo: 'Hembra',
          registroVacunas: 'No',
          peso: 600,
          historialClinico: 'Control dental anual.',
          estadoReproductivo: 'En proceso',
        },
        {
          id: 6,
          foto: 'imagen2.jpg',
          numeroArete: '67890',
          fechaNacimiento: '15/03/2019',
          sexo: 'Hembra',
          registroVacunas: 'No',
          peso: 600,
          historialClinico: 'Control dental anual.',
          estadoReproductivo: 'En proceso',
        },
        {
          id: 7,
          foto: 'imagen2.jpg',
          numeroArete: '67890',
          fechaNacimiento: '15/03/2019',
          sexo: 'Hembra',
          registroVacunas: 'No',
          peso: 600,
          historialClinico: 'Control dental anual.',
          estadoReproductivo: 'En proceso',
        },
        {
          id: 8,
          foto: 'imagen2.jpg',
          numeroArete: '67890',
          fechaNacimiento: '15/03/2019',
          sexo: 'Hembra',
          registroVacunas: 'No',
          peso: 600,
          historialClinico: 'Control dental anual.',
          estadoReproductivo: 'En proceso',
        },
      ]);
      
      const URL = 'http://localhost:3000/registro-animales';
      const getAnimales = async () => {
        const response = await fetch(URL);

        const data = await response.json();
        setAnimales(data.data);
      
    };
      

      getAnimales();
      

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.formTitle}>Lista de Animales</Text>
      {animales && animales.length > 0 ? (
        animales.map(animal => (
          <View key={animal.id} style={styles.animalContainer}>
            <Image
              source={require('../../components/Images/imagen24.jpeg')} // Reemplaza "animal.imagen" con la fuente de la imagen real
              style={styles.animalImage}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Numero de Arete: {animal.numeroArete}</Text>
              <Text style={styles.infoText}>Fecha de Nacimiento: {animal.fechaNacimiento}</Text>
              <Text style={styles.infoText}>Sexo: {animal.sexo}</Text>
              <Text style={styles.infoText}>Peso: {animal.peso}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.noAnimalsText}>No hay animales disponibles</Text>
      )}
    </ScrollView>
  

  );
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 16,
    },
    formTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    animalContainer: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 16,
      marginBottom: 12,
      flexDirection: 'row', // Para alinear la imagen y el texto en la misma fila
      alignItems: 'center',
    },
    animalImage: {
      width: 80, // Ajusta el ancho según tus necesidades
      height: 80, // Ajusta la altura según tus necesidades
      marginRight: 16,
    },
    infoContainer: {
      flex: 1, // Para que ocupe el espacio restante
    },
    infoText: {
      fontSize: 16,
    },
    noAnimalsText: {
      fontSize: 16,
      fontStyle: 'italic',
    },
  });

export default ListAnimales;
