import JumpButton from "@/components/JumpButton";
import Track from "@/components/Track";
import { Container, Title } from "./styles";

export default function Main() {
  return (
    <Container>
      <Title>Clique para saltar!</Title>
      <JumpButton />
      <Track />
    </Container>
  );
}
