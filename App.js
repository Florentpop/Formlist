import { View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/redux/reducers/store";
import AppContainer from "./src/navigation/navigation";

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
