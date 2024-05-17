import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contatos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
