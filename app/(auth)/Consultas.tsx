import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import Icon from "react-native-vector-icons/FontAwesome";

const Consultas = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hola, estoy programando una consulta veterinaria para mi perro. No se siente bien.",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "Veterinario",
        },
      },
      {
        _id: 2,
        text: "¡Hola! Claro, estoy aquí para ayudarte. ¿Podemos agendar una consulta para mañana a las 10 a. m.?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Dueño de la Mascota",
        },
      },
      {
        _id: 3,
        text: "¡Perfecto! Agendaré la consulta para mañana a las 10 a. m. ¿Hay alguna información adicional que deba saber?",
        createdAt: new Date(),
        user: {
          _id: 3,
          name: "Dueño de la Mascota",
        },
      },
      {
        _id: 4,
        text: "No, eso es todo. ¡Gracias!",
        createdAt: new Date(),
        user: {
          _id: 4,
          name: "Dueño de la Mascota",
        },
      },
    ]);
    setLoading(false);
  }, []);

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "lightgray",
        }}
      >
        <TouchableOpacity onPress={() => setShowOptions(!showOptions)}>
          <Icon name="list" size={30} color="green" />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "lightgray",
          }}
        >
          <Icon name="search" size={20} color="#555" style={{ margin: 10 }} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
      </View>
      {showOptions && (
        <View style={styles.container}>
          <Text style={styles.text}>Contactos</Text>
          <Text style={styles.text}>Historial</Text>
          <Text style={styles.text}>Sugerencias</Text>
          <Text style={styles.text}>Más Información</Text>
        </View>
      )}
      <View style={{ flex: 2 }}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <GiftedChat
            messages={messages.filter((message) =>
              message.text.toLowerCase().includes(searchQuery.toLowerCase())
            )}
            onSend={(newMessages) => {
              setMessages((previousMessages) =>
                GiftedChat.append(previousMessages, newMessages)
              );
            }}
            user={{
              _id: 1,
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Consultas;
