import { TouchableOpacity, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Container, Title } from "./styles";

import io from "socket.io-client";

const socket = io(process.env.SOCKET_URL || "localhost:8091", {
  transports: ["websocket"],
});

export default function JumpButton() {
  return (
    <Container onPress={() => socket.emit("jump", "jump")}>
      <MaterialCommunityIcons name="run-fast" size={32} color="black" />
      <Title>Jump</Title>
    </Container>
  );
}
