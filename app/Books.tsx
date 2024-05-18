import React from "react";
import { useQuery } from "@apollo/client";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import BookCard from "../components/BookCard"; // Certifique-se que BookCard está adaptado para React Native
import { GET_BOOKS } from "@/services/queries";

const Books = () => {
  const { error, data } = useQuery(GET_BOOKS);

  if (error) console.log("um erro ocorreu");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lista de Livros</Text>
      <View style={styles.booksContainer}>
        {data?.booksApi?.map((book: any, index: any) => (
          <BookCard key={index} book={book} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 40, // Adiciona espaço no topo para dar margem aos títuloss
    backgroundColor:"#000"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  booksContainer: {
    flex: 1,
    backgroundColor:"#000"
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});

export default Books;
