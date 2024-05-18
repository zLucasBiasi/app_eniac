import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { FaPhone, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  const phoneNumber = "+55 11 96214-6755";
  const instagramUsername = "navalha_dourada1";

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 40,
        alignItems: "center",
      }}
    >
      <View style={{ maxWidth: "90%" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>
          Entre em Contato Conosco
        </Text>
        <Text style={{ fontSize: 16, color: "#7D7D7D", marginBottom: 24 }}>
          Você pode entrar em contato conosco através das informações abaixo.
          Ficaremos felizes em ajudar!
        </Text>
        <View style={{ marginBottom: 24 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
          >
            <FaPhone style={{ fontSize: 24, color: "green", marginRight: 8 }} />
            <Text style={{ fontSize: 16, color: "#7D7D7D" }}>
              {phoneNumber}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 24 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() =>
              Linking.openURL(`https://www.instagram.com/${instagramUsername}`)
            }
          >
            <FaInstagram
              style={{ fontSize: 24, color: "purple", marginRight: 8 }}
            />
            <Text style={{ fontSize: 16, color: "#7D7D7D" }}>
              @{instagramUsername}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 24 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() =>
              Linking.openURL(`https://wa.me/${phoneNumber.replace(/\D/g, "")}`)
            }
          >
            <FaWhatsapp
              style={{ fontSize: 24, color: "green", marginRight: 8 }}
            />
            <Text style={{ fontSize: 16, color: "#7D7D7D" }}>
              Chame no WhatsApp
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 24,
              height: 24,
              marginRight: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/s"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </View>
          <Text style={{ fontSize: 16, color: "#7D7D7D" }}>
            Rua Maria Padilha, 76, Nova Ponte Alta, Guarulhos SP.
          </Text>
        </View>
      </View>
    </View>
  );
};
