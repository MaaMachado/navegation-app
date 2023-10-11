import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/home";
import ContentScreen from "../screens/content";
import AboutScreen from "../screens/about";

const Top = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Top.Navigator>
        <Top.Screen
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

        <Top.Screen
          name="Tela do Conteúdo"
          component={ContentScreen}
          options={{
            title: 'Tela de Conteúdo',
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Top.Screen
          name="Tela de Sobre"
          component={AboutScreen}
          options={{
            title: 'Tela de Sobre',
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Top.Navigator>
    </NavigationContainer>
  );
}
