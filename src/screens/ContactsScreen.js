import React from "react";
import { FlatList, View, Text } from "react-native";
import Contact from "../../components/Contact";

export default function ContactsScreen() {
  const contacts = [
    { name: "Kofi Adams", number: "0243-123-000" },
    { name: "Ama Kumasi", number: "0240-129-010" },
    { name: "Adwoa Accra", number: "0253-543-089" },
    { name: "Tony Azu", number: "0743-123-670" },
    { name: "Stephen Tema", number: "0943-123-980" },
    { name: "Kaka Nii", number: "0903-375-395" },
    { name: "Nii Adjei", number: "0975-375-365" },
  ];
  return (
    <View>
      <FlatList
        data={contacts}
        renderItem={({ item }) => {
          return <Contact name={item.name} phone={item.number} />;
        }}
        keyExtractor={(item) => item.number}
      />
    </View>
  );
}
