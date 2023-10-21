import React from "react";
import { Stack } from "expo-router";

const PublicLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6c47ff",
        },
        headerTintColor: "#fff",
        headerBackTitle: "Back",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="bovinePoisonings"
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="calendary"
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="mastitis"
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="productivity"
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default PublicLayout;
