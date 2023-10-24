import { View } from "react-native";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import { Separador } from "../assets/Separador";

const Welcome = ({ navigation }) => {
  const styleBigButton = {
    justifyContent: "center",
    width: 200,
    height: 100,
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        mode="contained"
        contentStyle={styleBigButton}
        onPress={() => navigation.push("Eventos")}
      >
        Eventos
      </Button>
      <Separador height={20} />
      <Button
        mode="contained"
        contentStyle={styleBigButton}
        onPress={() => navigation.push("IngresoRut")}
      >
        Carnet Virtual
      </Button>
    </View>
  );
};

export default Welcome;
