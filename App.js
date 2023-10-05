import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Welcome from "./views/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Eventos from "./views/Eventos";
import CarnetVirtual from "./views/CarnetVirtual";
import Inscripcion from "./views/Inscripcion";
import IngresoRut from "./views/IngresoRut";
import Evento from "./views/Evento";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          options={{ title: "Bienvenido", headerTitleAlign: "center" }}
          component={Welcome}
        />
        <Stack.Screen
          name="Eventos"
          options={{ title: "Eventos", headerTitleAlign: "center" }}
          component={Eventos}
        />
        <Stack.Screen
          name="CarnetVirtual"
          options={{ title: "Carnet Virtual", headerTitleAlign: "center" }}
          component={CarnetVirtual}
        />
        <Stack.Screen
          name="Registro"
          options={{ title: "Registro", headerTitleAlign: "center" }}
          component={Inscripcion}
        />
        <Stack.Screen
          name="IngresoRut"
          options={{ title: "Carnet Virtual", headerTitleAlign: "center" }}
          component={IngresoRut}
        />
        <Stack.Screen
          name="Evento"
          options={{ title: "Evento", headerTitleAlign: "center" }}
          component={Evento}
        />
        <Stack.Screen
          name="Inscripcion"
          options={{ title: "Inscripción", headerTitleAlign: "center" }}
          component={Inscripcion}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
