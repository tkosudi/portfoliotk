import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const WelcomeContainer = styled.div`
  padding: 0.938rem 0 1.6rem 0;

  p {
    font-family: 400 0.2rem "Fira Code", sans-serif;
    font-style: italic;
    color: var(--tags);
  }

  h1 {
    font-size: 2rem;
    font-weight: lighter;
    padding: 0;

    @media (max-width: 1080px) {
      html {
        font-size: 93.75%;
      }
    }

    @media (max-width: 720px) {
      html {
        font-size: 87.5%;
      }
    }
  }
`;

export const InfoContainer = styled.div`
  text-align: right;

  p {
    font-family: 400 0.1rem "Fira Code", sans-serif;
    font-style: italic;
    color: var(--tags);
  }

  h1 {
    font-size: 2rem;
    font-family: "Montserrat";
    font-weight: lighter;
    padding: 0 0 0 0.4rem;

    @media (max-width: 1080px) {
      html {
        font-size: 93.75%;
      }
    }

    @media (max-width: 720px) {
      html {
        font-size: 87.5%;
      }
    }

    ::after {
      content: "TK";
      color: var(--neonGreen);
    }
  }

  h3 {
    font-family: "Montserrat";
    font-weight: lighter;
    padding: 0 0 0 0.4rem;
    color: var(--neonPink);
  }
`;
