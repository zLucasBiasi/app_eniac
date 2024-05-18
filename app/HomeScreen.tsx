import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Seja bem vindo a biblioteca!</Text>
      <Text style={styles.descriptionText}>
        Temos uma lista atualizada de livros disponíveis. Confira regularmente
        para ver as novidades. Estamos sempre buscando melhorias para oferecer a
        melhor experiência possível na escolha dos seus livros favoritos.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("contatos")}
      >
        <Text style={styles.buttonText}>Contatos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("sobre")}
      >
        <Text style={styles.buttonText}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("livros")}
      >
        <Text style={styles.buttonText}>Livros</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  welcomeText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  descriptionText: {
    color: "#AAA",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 32,
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginBottom: 16,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
