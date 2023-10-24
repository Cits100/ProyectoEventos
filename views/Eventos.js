//import { StyleSheet, View } from "@bacons/react-views";
import { Card, Text, TouchableRipple } from "react-native-paper";
import { Separador } from "../assets/Separador";
import { FlatList, StyleSheet, View } from "react-native";

const fecha = new Date();
const listaEventos = [
  {
    id: "1",
    title: "Evento uno",
    type: 1,
    direction: "Dirección Falsa 1234",
    day: fecha.getDate().toString().padStart(2, "0"),
    month: (fecha.getMonth() + 1).toString().padStart(2, "0"),
    year: fecha.getFullYear(),
    hour: fecha.getHours().toString().padStart(2, "0"),
    minutes: fecha.getMinutes().toString().padStart(2, "0"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    id: "2",
    title: "Evento dos",
    type: 1,
    direction: "Dirección Falsa 1234",
    day: fecha.getDate().toString().padStart(2, "0"),
    month: (fecha.getMonth() + 1).toString().padStart(2, "0"),
    year: fecha.getFullYear(),
    hour: fecha.getHours().toString().padStart(2, "0"),
    minutes: fecha.getMinutes().toString().padStart(2, "0"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    id: "3",
    title: "Evento tres",
    type: 1,
    direction: "Dirección Falsa 1234",
    day: fecha.getDate().toString().padStart(2, "0"),
    month: (fecha.getMonth() + 1).toString().padStart(2, "0"),
    year: fecha.getFullYear(),
    hour: fecha.getHours().toString().padStart(2, "0"),
    minutes: fecha.getMinutes().toString().padStart(2, "0"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    id: "4",
    title: "Evento cuatro",
    type: 1,
    direction: "Dirección Falsa 1234",
    day: fecha.getDate().toString().padStart(2, "0"),
    month: (fecha.getMonth() + 1).toString().padStart(2, "0"),
    year: fecha.getFullYear(),
    hour: fecha.getHours().toString().padStart(2, "0"),
    minutes: fecha.getMinutes().toString().padStart(2, "0"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
];
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
    width: 300,
    height: 150,
  },
  button: {
    justifyContent: "center",
    width: 200,
    height: 100,
  },
});

const Eventos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Separador height={30} />
      <FlatList
        data={listaEventos}
        renderItem={({ item }) => (
          <>
            <Card
              style={styles.card}
              onPress={() => {
                navigation.push("Evento", { item });
              }}
            >
              <Card.Content>
                <Text variant="titleMedium" style={{ textAlign: "left" }}>
                  {item.title}
                </Text>
                <Separador height={80} />
                <Text variant="bodyMedium" style={{ textAlign: "right" }}>
                  Ingreso Liberado
                </Text>
              </Card.Content>
            </Card>
            <Separador height={8} />
          </>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Eventos;
