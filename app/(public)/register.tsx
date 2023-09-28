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
import Divider from "../../components/Elements/Divider";
import IconButton from "../../components/Buttons/IconButton";
import { Picker } from "@react-native-picker/picker";
import { Link } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";
import RegularText from "../../components/Texts/RegularText";
import MainContainer from "../../components/Containers/MainContainer";

const RegisterScreen = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("user");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);

  const onSignUpPress = async () => {
    console.log("Botón de registro presionado");
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {
      await signUp.create({
        lastName,
        firstName,
        emailAddress,
        password,
      });

      // Send verification Email
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // Cambiar la UI para mostrar la verificación de correo electrónico
      setPendingVerification(true);
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
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
            <BigText style={styles.titleText}>Registro</BigText>
            {!pendingVerification && (
              <>
                <StyledTextInput
                  label="Nombre"
                  placeholder="Nombre"
                  value={firstName}
                  onChangeText={setFirstName}
                  icon="account"
                />
                <StyledTextInput
                  label="Apellido"
                  placeholder="Apellido"
                  value={lastName}
                  onChangeText={setLastName}
                  icon="badge-account"
                />
                <StyledTextInput
                  label="Email Address"
                  icon="email-variant"
                  placeholder="example@gmail.com"
                  keyboardType="email-address"
                  value={emailAddress}
                  onChangeText={setEmailAddress}
                />
                <StyledTextInput
                  label="Password"
                  placeholder="* * * * * * * *"
                  icon="lock"
                  isPassword={true}
                  value={password}
                  onChangeText={setPassword}
                />

                <View style={styles.rolePickerContainer}>
                  <Text style={styles.roleLabel}>Seleccionar Rol:</Text>
                  <Picker
                    selectedValue={selectedRole}
                    style={styles.rolePicker}
                    onValueChange={(itemValue) => handleRoleChange(itemValue)}
                  >
                    <Picker.Item label="Invitado" value="guest" />
                    <Picker.Item label="Veterinario" value="Veterinary" />
                    <Picker.Item label="Productor" value="productor" />
                    <Picker.Item
                      label="Veterinario y Productor"
                      value="vetandprod"
                    />
                  </Picker>
                </View>
                <RegularButton
                  TextStyle={styles.buttonText}
                  style={styles.button}
                  onPress={onSignUpPress}
                >
                  Registrarse
                </RegularButton>
              </>
            )}
            {pendingVerification && (
              <>
                <View style={{ alignItems: "center", margin: 10 }}>
                  <BigText
                    style={{
                      alignItems: "center",
                      fontSize: 24,
                      fontFamily: "InriaSans_700Bold",
                      margin: 10,
                    }}
                  >
                    Verificar Correo Electrónico
                  </BigText>
                  <RegularText>
                    Te hemos enviado un correo electrónico con un código de
                    verificación. Por favor ingrésalo aquí:
                  </RegularText>
                </View>
                <View>
                  <StyledTextInput
                    label="Codigo de Verificacion"
                    value={code}
                    placeholder="Code..."
                    onChangeText={setCode}
                    icon={"lock-check"}
                  />
                </View>
                <RegularButton
                  TextStyle={styles.buttonText}
                  style={{ height: "13%" }}
                  onPress={onPressVerify}
                >
                  Verificar Correo Electrónico
                </RegularButton>
              </>
            )}
            <Divider text={"O Continuar con"}></Divider>
            <View style={styles.socialButtonsContainer}>
              <IconButton
                icon="google"
                iconColor="#EB493B"
                TextStyle={{ color: "#EB493B" }}
                style={styles.socialButton}
                onPress={() => {}}
              >
                Google
              </IconButton>
              <IconButton
                icon="facebook"
                iconColor="#3b5998"
                TextStyle={{ color: "#3b5998", fontSize: 14 }}
                style={styles.socialButton}
                onPress={() => {}}
              >
                Facebook
              </IconButton>
              <IconButton
                iconColor="#000"
                TextStyle={{ color: "#000" }}
                icon="github"
                style={styles.socialButton}
                onPress={() => {}}
              >
                Github
              </IconButton>
            </View>
            <View style={styles.alreadyAccountContainer}>
              <SmallText style={{ fontSize: 15 }}>
                ¿Ya tienes una cuenta?
              </SmallText>
              <View style={styles.forgotPasswordTextContainer}>
                <Link href={"/login"} asChild>
                  <TouchableOpacity>
                    <SmallText style={styles.registerNowText}>
                      Iniciar Sesión
                    </SmallText>
                  </TouchableOpacity>
                </Link>
              </View>
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
    marginTop: 0,
  },
  titleText: {
    fontSize: 25,
    fontFamily: "InriaSans_700Bold",
    alignSelf: "center",
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  alreadyAccountContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  forgotPasswordTextContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    color: "#04942f",
  },
  registerNowText: {
    color: "#04942f",
    fontFamily: "InriaSans_700Bold",
    fontSize: 15,
  },
  checkboxText: {
    fontFamily: "InriaSans_400Regular",
    color: "#0C120C",
    fontSize: 14,
  },
  button: {
    borderRadius: 15,
    height: "10%",
  },
  buttonText: {
    fontFamily: "InriaSans_700Bold",
    color: "white",
  },
  rolePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  roleLabel: {
    fontSize: 16,
    fontFamily: "InriaSans_400Regular",
  },
  rolePicker: {
    flex: 1,
    height: 40,
  },
  socialButtonsContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialButton: {
    width: "30%",
    height: "auto",
    borderRadius: 25,
  },
});

export default RegisterScreen;
