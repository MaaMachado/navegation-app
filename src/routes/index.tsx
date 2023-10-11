import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/home";
import ContentScreen from "../screens/content";
import AboutScreen from "../screens/about";

const Bar = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Bar.Navigator>
        <Bar.Screen
          name="Tela de Entrada"
          component={HomeScreen}
          options={{
            title: 'Tela de Entrada',
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />

        <Bar.Screen
          name="Tela do Conteúdo"
          component={ContentScreen}
          options={{
            title: 'Tela de Conteúdo',
            headerStyle: {
              backgroundColor: "#582d62",
            },
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Bar.Screen
          name="Tela de Sobre"
          component={AboutScreen}
          options={{
            title: 'Tela de Sobre',
            headerStyle: {
              backgroundColor: "#582d62",
            },
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Bar.Navigator>
    </NavigationContainer>
  );
}
