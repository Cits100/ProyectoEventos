import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { Separador } from "../assets/Separador";

const Evento = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text variant="displayMedium"> {item.title}</Text>
      <Separador height={5} />
      <Text style={{ textAlign: "center" }} variant="headlineSmall">
        {item.direction}
      </Text>
      <Separador height={8} />
      <Text style={{ textAlign: "center" }} variant="headlineSmall">
        {item.hour}:{item.minutes} {item.day}/{item.month}/{item.year}
      </Text>
      <Separador height={15} />
      <Card>
        <Card.Content>
          <Text variant="titleMedium" style={{ textAlign: "center" }}>
            {item.description}
          </Text>
        </Card.Content>
      </Card>
      <Separador height={300} />
      <Button
        mode="contained"
        contentStyle={{
          justifyContent: "center",
          width: 200,
          height: 50,
          textAlign: "center",
        }}
        onPress={() => navigation.push("Inscripcion")}
      >
        Inscribirme
      </Button>
    </View>
  );
};

export default Evento;
