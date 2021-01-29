import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Sign Up</Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="Email"
            value={this.state.email}
            onChangeText={(email) => {
              this.setState({ email });
            }}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            placeholder="Password"
            autoCorrect={false}
            autoCapitalize="none"
            value={this.state.password}
            onChangeText={(password) => {
              this.setState({ password });
            }}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            placeholder="Password Again"
            autoCorrect={false}
            autoCapitalize="none"
            value={this.state.password}
            onChangeText={(password) => {
              this.setState({ password });
            }}
          />

          <Text style={styles.forgotPassword}>Forgot password</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>You already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signupText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginTop: 100,
  },

  loginText: {
    fontSize: 50,
    color: "#5100ad",
  },

  loginTextContainer: {
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#5100ad",
    fontSize: 20,
    height: 50,
    marginTop: 25,
  },

  forgotPassword: {
    alignSelf: "flex-end",
    marginVertical: 3,
    color: "#0853a8",
  },
  buttonContainer: {
    height: 50,
    backgroundColor: "#5100ad",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 70,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
  },
  noAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  noAccountText: {
    marginRight: 10,
    fontSize: 16,
  },

  signupText: {
    fontSize: 16,
    color: "#5100ad",
  },
});

export default RegisterScreen;
