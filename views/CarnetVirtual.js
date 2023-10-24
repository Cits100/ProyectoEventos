import { View,StyleSheet } from "react-native";

import QRCode from "react-native-qrcode-svg";
import { Separador } from "../assets/Separador";
import { Button, Card, Text } from "react-native-paper";

import { useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
  card: {
    width: "70%",
  },
  button: {
    justifyContent: "center",
    width: 200,
    height: 50,
  },
});

const CarnetVirtual = ({ navigation }) => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text} variant="displayMedium">
        Carnet Cultural DGVM
      </Text>
      <Separador height={20}></Separador>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.text}>
            CRISTIAN TAPIA
          </Text>
        </Card.Content>
      </Card>
      <Separador height={20}></Separador>
      <QRCode size={200} value="QR de Prueba" />
      <Separador height={35}></Separador>
      <Button
        mode="contained"
        contentStyle={styles.button}
        onPress={() => navigation.push("IngresoRut")}
      >
        Descargar
      </Button>
    </View>
  );
};

export default CarnetVirtual;
