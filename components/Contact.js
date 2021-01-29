import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

export default function Contact({ name, phone }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/profile.jpeg")} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text>{phone}</Text>
      </View>
      <View style={styles.icon}>
        <MaterialIcons name="local-phone" size={25} color="#009cf5" />
      </View>
      <View>
        <MaterialCommunityIcons
          name="message-processing"
          size={25}
          color="#009cf5"
        />
      </View>
      <View>
        <SimpleLineIcons name="options-vertical" size={25} color="#a8a8a8" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: "center",
    marginVertical: 10,
    marginTop: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  infoContainer: {
    justifyContent: "center",
    marginHorizontal: 15,
    flex: 4,
  },
  name: {
    fontWeight: "bold",
    fontSize: 17,
  },
  icon: {
    flex: 1,
  },
});
