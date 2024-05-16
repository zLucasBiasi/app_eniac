import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Livros", href: "livros" },
  { name: "Sobre Nós", href: "sobrenos" },
  { name: "Contato", href: "contato" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 16,
        }}
      >
        <TouchableOpacity onPress={() => console.log("Navigate to Home")}>
          {/* <Image source={Logo} style={{ width: 100, height: 40 }} /> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMobileMenuOpen(true)}>
          <Bars3Icon style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>

      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <View style={{ backgroundColor: "#0f0f0f", padding: 16 }}>
          <TouchableOpacity onPress={() => setMobileMenuOpen(false)}>
            <XMarkIcon style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
          {navigation.map((item) => (
            <TouchableOpacity
              key={item.name}
              onPress={() => console.log("Navigate to", item.href)}
              style={{ paddingVertical: 8 }}
            >
              <Text style={{ color: "#7D7D7D", fontSize: 16 }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            onPress={() => console.log("Navigate to Admin")}
            style={{ paddingVertical: 8 }}
          >
            <Text style={{ color: "#7D7D7D", fontSize: 16 }}>Admin &rarr;</Text>
          </TouchableOpacity>
        </View>
      </Dialog>
    </View>
  );
};

export default Navbar;
