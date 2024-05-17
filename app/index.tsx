import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./HomeScreen";
import { Contact } from "./Contact";
import { AboutUs } from "./About";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="contact" component={Contact} />
      <Stack.Screen name="about" component={AboutUs} />
    </Stack.Navigator>
  );
};

export default App;
