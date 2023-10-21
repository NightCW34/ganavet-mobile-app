import React from "react";
import { Tabs, Redirect } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Text } from "react-native";
export const LogoutButton = () => {
  const { signOut } = useAuth();

  const doLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <Pressable onPress={(event) => doLogout()} style={{ marginRight: 10 }}>
      <Ionicons name="exit-outline" size={24} color={"#fff"} />
    </Pressable>
  );
};

const TabsPage = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  if (!isSignedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#268E00",
        },
        headerTintColor: "#fff",
        headerLeft: () => (
          <Text
            style={{ color: "#fff", paddingHorizontal: 10, fontWeight: "bold" }}
          >
            Bienvenido, {user?.firstName}
          </Text>
        ),
        headerRight: () => <LogoutButton />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "", // Establecer el título como cadena vacía
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),

          tabBarLabel: "Home",
        }}
      />
    </Tabs>
  );
};

export default TabsPage;
