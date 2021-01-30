import React, { Component } from "react";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ContactsScreen from "../screens/ContactsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import { Button, Text, TouchableOpacity } from "react-native";
import { logout } from "../redux/actions/authActions";

const Stack = createStackNavigator();
function AppContainer({ auth, logout }) {
  return (
    <NavigationContainer>
      {auth.login ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Contacts"
            options={{
              headerRight: () => (
                <TouchableOpacity style={{ marginRight: 20 }} onPress={logout}>
                  <Text>Logout</Text>
                </TouchableOpacity>
              ),
            }}
            component={ContactsScreen}
          />
        </Stack.Navigator>
      ) : (
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
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const mapStateToProp = (state) => {
  return { auth: state };
};

export default connect(mapStateToProp, { logout })(AppContainer);
