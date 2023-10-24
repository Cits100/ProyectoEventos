import { View } from "react-native";

import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { Separador } from "../assets/Separador";

const IngresoRut = ({ navigation }) => {
  const stylewidth = {
    width: 200,
  };
  const rutRegex = /^\d{1,2}.\d{3}.\d{3}-\d|k|K$/;

  const [rut, setRut] = useState("");
  const [error, setError] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text variant="titleMedium">Ingrese Rut</Text>
      <Separador height={30} />
      <TextInput
        error={error}
        label="Rut"
        placeholder="11111111-1"
        value={rut}
        contentStyle={stylewidth}
        onChangeText={(rut) => {
          if (rutRegex.test(rut)) {
            setError(false);
          }
          setRut(rut);
        }}
      />
      <Separador height={5} />
      {error ? (
        <Text variant="labelMedium" style={{ color: "red" }}>
          Debe ingresar un rut correcto
        </Text>
      ) : (
        <></>
      )}
      <Separador height={20} />
      <Button
        contentStyle={stylewidth}
        mode="contained"
        onPress={() => {
          if (rutRegex.test(rut)) {
            setError(false);
            navigation.push("CarnetVirtual");
          } else {
            setError(true);
          }
        }}
      >
        Aceptar
      </Button>
    </View>
  );
};
export default IngresoRut;
