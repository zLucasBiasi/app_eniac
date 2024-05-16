// HomeScreen.js
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }: any) => {
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
        onPress={() => navigation.navigate("Books")}
      >
        <Text style={styles.buttonText}>Veja os livros</Text>
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
  logo: {
    width: 200,
    height: 50,
    marginBottom: 24,
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
  buttonSecondary: {
    borderColor: "#FFD700",
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  buttonTextSecondary: {
    color: "#FFD700",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
