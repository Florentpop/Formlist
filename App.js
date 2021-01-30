import { View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/reducers/store";
import AppContainer from "./src/navigation/navigation";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
