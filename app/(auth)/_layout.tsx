import { Redirect, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import Venta from "./screens/Venta";

export const LogoutButton = () => {
  const { signOut } = useAuth();

  const doLogout = async () => {
    await signOut();
    <Redirect href="/login" />;
  };

  return (
    <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
      <Ionicons name="log-out-outline" size={24} color={"#fff"} />
    </Pressable>
  );
};

const TabsPage = () => {
  const { isSignedIn } = useAuth();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#04942f",
        },
        headerTintColor: "#fff",
        headerRight: () => <LogoutButton />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="Venta"
        options={{
          headerTitle: "Venta",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
          tabBarLabel: "Venta",
        }}
        redirect={!isSignedIn}
      />
       <Tabs.Screen
        name="Consulta"
        options={{
          headerTitle: "Venta",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
          tabBarLabel: "Venta",
        }}
        redirect={!isSignedIn}
      />
       <Tabs.Screen
        name="RegistroBovino"
        options={{
          headerTitle: "RegistroBovino",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
          tabBarLabel: "RegistroBovino",
        }}
        redirect={!isSignedIn}
      />
        <Tabs.Screen
          name="RegistroVenta"
          options={{
            headerTitle: "RegistroVenta",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="star" size={size} color={color} />
            ),
            tabBarLabel: "RegistroVenta",
          }}
          
        />
     
    </Tabs>


  );
};

export default TabsPage;
