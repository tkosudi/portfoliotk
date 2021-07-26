import Image from "next/image";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <Image src="/images/logo.svg" alt="TK Logo" width={53.25} height={45} />
        <nav>
          <a>Início</a>
          <a href="">Sobre</a>
          <a href="">Portfólio</a>
          <a href="">Contato</a>
        </nav>
      </Content>
    </Container>
  );
}
