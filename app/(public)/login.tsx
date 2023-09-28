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
import BouncyCheckbox from "react-native-bouncy-checkbox";
import IconButton from "../../components/Buttons/IconButton";
import RegularButton from "../../components/Buttons/RegularButton";
import Divider from "../../components/Elements/Divider";
import WebPImage from "../../components/Images/StyledImage";
import StyledTextInput from "../../components/Inputs/StyledTextInputs";
import BigText from "../../components/Texts/BigText";
import SmallText from "../../components/Texts/SmallText";
import Spinner from "react-native-loading-spinner-overlay";
import { Link } from "expo-router";
import MainContainer from "../../components/Containers/MainContainer";
import { useSignIn } from "@clerk/clerk-expo";
import { useOAuthSignIn } from "../../components/hooks/AutenticationFunction";

const LoginScreen = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);
    try {
      const completeSignIn = await signIn.create({
        identifier: email,
        password,
      });

      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  const handleCheckboxPress = (isChecked: boolean) => {
    setRememberMe(isChecked);
  };

  // Usa la función useOAuthSignIn para la autenticación de Google
  const { onPress: onPressGoogle, loading: loadingGoogle } =
    useOAuthSignIn("oauth_google");
  const { onPress: onPressFacebook, loading: loadingFacebook } =
    useOAuthSignIn("oauth_facebook");
  const { onPress: onPressGithub, loading: loadingGithub } =
    useOAuthSignIn("oauth_github");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -150}
    >
      <Spinner visible={loading} />

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
            <BigText style={styles.titleText}>Iniciar Sesión</BigText>
            <StyledTextInput
              label="Email Address"
              icon="email-variant"
              placeholder="example@gmail.com"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <StyledTextInput
              label="Password"
              placeholder="* * * * * * * *"
              icon="lock"
              isPassword={true}
              value={password}
              onChangeText={setPassword}
            />
            <View style={styles.forgotPasswordContainer}>
              <BouncyCheckbox
                fillColor="#0C120C"
                text="Recuérdame"
                textStyle={styles.checkboxText}
                onPress={handleCheckboxPress}
                isChecked={rememberMe}
              />
              <Link href={"/reset"} asChild>
                <TouchableOpacity style={styles.forgotPasswordTextContainer}>
                  <SmallText style={styles.forgotPasswordText}>
                    Olvidaste tu Contraseña?
                  </SmallText>
                </TouchableOpacity>
              </Link>
            </View>
            <RegularButton
              TextStyle={styles.buttonText}
              style={styles.button}
              onPress={onSignInPress}
            >
              Iniciar Sesión
            </RegularButton>
            <Divider text={"O Continuar con"}></Divider>
            <IconButton
              icon="google"
              iconColor="#EB493B"
              TextStyle={{ color: "#EB493B" }}
              style={styles.buttonSocial}
              onPress={onPressGoogle} // Usa la función de autenticación de Google
            >
              Iniciar Sesión con Google
            </IconButton>
            <IconButton
              icon="facebook"
              iconColor="#3b5998"
              TextStyle={{ color: "#3b5998" }}
              style={styles.buttonSocial}
              onPress={onPressFacebook}
            >
              Iniciar Sesión con Facebook
            </IconButton>
            <IconButton
              iconColor="#000000"
              TextStyle={{ color: "#000000" }}
              icon="github"
              style={styles.buttonSocial}
              onPress={onPressGithub}
            >
              Iniciar Sesión con Github
            </IconButton>
            <View style={styles.AlreadyAccountContainer}>
              <SmallText style={{ fontSize: 15 }}>
                No tienes una cuenta?
              </SmallText>
              <View style={styles.forgotPasswordTextContainer}>
                <Link href={"/register"} asChild>
                  <TouchableOpacity>
                    <SmallText style={styles.RegisterNowText}>
                      Registrate ahora
                    </SmallText>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
            <View />
          </View>
        </MainContainer>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {},
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
  forgotPasswordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  AlreadyAccountContainer: {
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
  RegisterNowText: {
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
    marginTop: 10,
    borderRadius: 15,
    height: "10%",
  },
  buttonSocial: {
    marginTop: 10,
    borderRadius: 15,
    height: "10%",
  },
  buttonText: {
    fontFamily: "InriaSans_700Bold",
    color: "white",
  },
});

export default LoginScreen;
