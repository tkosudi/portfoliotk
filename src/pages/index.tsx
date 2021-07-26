import Head from "next/head";
import Image from "next/image";
import tk_main from "../../public/images/tk_main.png";
import { WelcomeContainer, InfoContainer, Container } from "./stylesHome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | TK Portfólio</title>
      </Head>
      <Container>
        <WelcomeContainer>
          <p>&lt;h1&gt;</p>
          <h1>Bem Vindo Ao Meu Portfólio</h1>
          <p>&lt;&#47;h1&gt;</p>
        </WelcomeContainer>
      </Container>
      <Image src={tk_main} alt="TK Profile" layout="responsive" quality={100} />
      <Container>
        <InfoContainer>
          <p>&lt;h1&gt;</p>
          <h1>Eu sou Thiago Kosudi, </h1>
          <p>&lt;&#47;h1&gt;</p>
          <p>&lt;h4&gt;</p>
          <h3>Desenvolvedor Full Stack Jr.</h3>
          <p>&lt;&#47;h4&gt;</p>
        </InfoContainer>
      </Container>
    </>
  );
}
