import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./HomeScreen";
import { Contact } from "./Contact";
import { AboutUs } from "./About";
import Books from "./Books";
import Providers from "@/components/Provider/provider";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Providers>
      <Stack.Navigator>
        <Stack.Screen name="inicio" component={HomeScreen} />
        <Stack.Screen name="contatos" component={Contact} />
        <Stack.Screen name="sobre" component={AboutUs} />
        <Stack.Screen name="livros" component={Books} />
      </Stack.Navigator>
    </Providers>
  );
};

export default App;
