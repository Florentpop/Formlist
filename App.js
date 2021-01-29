import { View, StyleSheet } from "react-native";
import React, { Component } from "react";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ContactsScreen from "./src/screens/ContactsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{ header: () => null }}
          component={LoginScreen}
        />

        <Stack.Screen
          name="Register"
          options={{ header: () => null }}
          component={RegisterScreen}
        />

        <Stack.Screen name="Contacts" component={ContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
