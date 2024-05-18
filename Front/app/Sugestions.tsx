import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

import axios from "axios";

const Suggestion = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSendSuggestion = async () => {
    try {
      const response = await axios.post("http://localhost:3000/suggestion", {
        nome,
        email,
        whatsapp,
        assunto,
        mensagem,
      });

      if (response.status === 200) {
        Alert.alert("Sugestão enviada com sucesso!");
        // Limpa os campos após o envio bem-sucedido
        setNome("");
        setEmail("");
        setWhatsapp("");
        setAssunto("");
        setMensagem("");
      }
    } catch (error) {
      Alert.alert(
        "Erro ao enviar sugestão. Por favor, tente novamente mais tarde."
      );
      console.error("Error sending suggestion:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sugestão</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Whatsapp para contato"
        value={whatsapp}
        onChangeText={setWhatsapp}
      />
      <TextInput
        style={styles.input}
        placeholder="Assunto"
        value={assunto}
        onChangeText={setAssunto}
      />
      <TextInput
        style={styles.textarea}
        placeholder="Mensagem adicional"
        value={mensagem}
        onChangeText={setMensagem}
        multiline
      />
      <Button title="Enviar" onPress={handleSendSuggestion} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    color: "white",
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    color: "white",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  textarea: {
    height: 80,
    borderColor: "gray",
    color: "white",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Suggestion;
