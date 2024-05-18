import React from "react";
import { View, Text, TouchableOpacity, Linking, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Contact = () => {
  const phoneNumber = "+55 11 96214-6755";
  const instagramUsername = "navalha_dourada1";

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>
          Entre em Contato Conosco
        </Text>
        <Text style={styles.description}>
          Você pode entrar em contato conosco através das informações abaixo.
          Ficaremos felizes em ajudar!
        </Text>
        <View style={styles.contactItem}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
          >
            <Icon name="phone" style={styles.icon} />
            <Text style={styles.text}>
              {phoneNumber}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contactItem}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => Linking.openURL(`https://www.instagram.com/${instagramUsername}`)}
          >
            <Icon name="instagram" style={[styles.icon, { color: "purple" }]} />
            <Text style={styles.text}>
              @{instagramUsername}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contactItem}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => Linking.openURL(`https://wa.me/${phoneNumber.replace(/\D/g, "")}`)}
          >
            <Icon name="whatsapp" style={[styles.icon, { color: "green" }]} />
            <Text style={styles.text}>
              Chame no WhatsApp
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contactItem}>
          <Icon name="map-marker" style={[styles.icon, { color: "red" }]} />
          <Text style={styles.text}>
            Rua Maria Padilha, 76, Nova Ponte Alta, Guarulhos SP.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    maxWidth: "90%",
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#7D7D7D",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#7D7D7D",
    marginBottom: 24,
    textAlign: "center",
  },
  contactItem: {
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  touchable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 24,
    color: "green",
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    color: "#7D7D7D",
    textAlign:"center"
  },
});

export default Contact;
