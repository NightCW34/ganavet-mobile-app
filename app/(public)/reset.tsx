import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import WebPImage from "../../components/Images/StyledImage";
import BigText from "../../components/Texts/BigText";
import StyledTextInput from "../../components/Inputs/StyledTextInputs";
import SmallText from "../../components/Texts/SmallText";
import RegularButton from "../../components/Buttons/RegularButton";

import { Link } from "expo-router";
import MainContainer from "../../components/Containers/MainContainer";

const ResetScreen = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -150}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        keyboardShouldPersistTaps="handled"
      >
        <MainContainer>
          <View style={styles.logoContainer}>
            <WebPImage
              style={styles.logoImage}
              source={require("../../assets/images/onlylogo.webp")}
            />
          </View>
          <View style={styles.formContainer}>
            <BigText style={styles.titleText}>
              ¿Olvidaste tu Contraseña?
            </BigText>
            <StyledTextInput
              label="Email Address"
              icon="email-variant"
              placeholder="example@gmail.com"
              keyboardType="email-address"
              value={email}
              onChangeText={handleEmailChange}
            />
            <RegularButton
              TextStyle={styles.buttonText}
              style={styles.button}
              onPress={() => {
                // Agrega aquí la lógica para enviar el correo de recuperación
              }}
            >
              Enviar Correo de Recuperación
            </RegularButton>
            <View style={styles.backToLoginContainer}>
              <Link href={"/login"} asChild>
                <TouchableOpacity>
                  <SmallText style={styles.backToLoginText}>
                    Volver a Iniciar Sesión
                  </SmallText>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </MainContainer>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  logoContainer: {
    alignItems: "center",
  },
  logoImage: {
    width: 120,
    height: 130,
  },
  formContainer: {
    marginTop: 20,
  },
  titleText: {
    fontSize: 25,
    margin: 10,
    fontFamily: "InriaSans_700Bold",
    alignSelf: "center",
  },
  backToLoginContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  backToLoginText: {
    color: "#04942f",
  },
  buttonText: {
    fontFamily: "InriaSans_700Bold",
    color: "white",
  },
  button: {
    marginTop: 10,
    borderRadius: 15,
    height: "20%",
  },
});

export default ResetScreen;
