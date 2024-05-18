import React from "react";
import { useQuery } from "@apollo/client";
import { View, Text, ScrollView } from "react-native";
import BookCard from "../components/BookCard"; // Certifique-se que BookCard está adaptado para React Native
import { GET_BOOKS } from "@/services/queries";
import { styles } from "./styles";

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

export default Books;
