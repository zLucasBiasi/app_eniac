import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 40, // Adiciona espaço no topo para dar margem aos títuloss
    backgroundColor: "#000"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  booksContainer: {
    flex: 1,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});
