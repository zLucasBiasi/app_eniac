// BookCard.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const BookCard = ({ book }: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: book.image.url }} />
      </View>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{book.name}</Text>
          <Text style={styles.description}>{book.description}</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>{book.text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    flexDirection: "column",
    backgroundColor: "#000",
    marginBottom: 20,
    padding: 16,
  },
  imageContainer: {
    width: "100%",
    height: 240,
    marginBottom: 16,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color:"white"
  },
  description: {
    fontSize: 16,
    color: "#7D7D7D",
    marginBottom: 16,
  },
  footer: {
    alignItems: "flex-end",
  },
  footerText: {
    fontSize: 14,
    color: "#7D7D7D",
  },
});

export default BookCard;
