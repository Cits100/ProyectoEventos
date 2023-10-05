import { View } from "@bacons/react-views";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import { Separador } from "../assets/Separador";

const Inscripcion = ({ navigation }) => {
  const styleButton = {
    justifyContent: "center",
    width: 200,
    height: 80,
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        mode="contained"
        contentStyle={styleButton}
        onPress={() => navigation.push("Eventos")}
      >
        Inscribir con QR
      </Button>
      <Separador height={20} />
      <Button
        mode="contained"
        r
        contentStyle={styleButton}
        onPress={() => navigation.push("IngresoRut")}
      >
        Inscribir con Rut
      </Button>
    </View>
  );
};

export default Inscripcion;
