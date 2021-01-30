import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import {
  createEmailAccount,
  registerError,
} from "../redux/actions/authActions";

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm: "",
    };
  }
  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  handleOnSubmit = () => {
    if (this.state.password !== this.state.confirm) {
      this.props.registerError("Password do not match");
      return;
    }
    this.props.createEmailAccount(this.state.email, this.state.password);
  };
  render() {
    const { navigation, auth } = this.props;
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Sign Up</Text>
        </View>

        <View>
          {auth.error.register && (
            <Text style={{ color: "red" }}>{auth.error.register}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            value={this.state.email}
            onChangeText={(text) => {
              this.handleUpdateState("email", text);
            }}
            placeholder="Email"
          />

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            placeholder="Password"
            autoCorrect={false}
            autoCapitalize="none"
            value={this.state.password}
            onChangeText={(text) => {
              this.handleUpdateState("password", text);
            }}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            placeholder="Password Again"
            autoCorrect={false}
            autoCapitalize="none"
            value={this.state.confirm}
            onChangeText={(text) => {
              this.handleUpdateState("confirm", text);
            }}
          />

          <Text style={styles.forgotPassword}>Forgot password</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.handleOnSubmit}
          >
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

const mapStateToProp = (state) => {
  return { auth: state };
};

export default connect(mapStateToProp, { createEmailAccount, registerError })(
  RegisterScreen
);
