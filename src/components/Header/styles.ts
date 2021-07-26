import styled from "styled-components";

export const Container = styled.header`
  background: var(--background);
  height: 5rem;
`;

export const Content = styled.div`
  max-width: 1366px;
  height: 4rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  nav {
    margin: 0 auto;
    height: 4rem;

    a {
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 4rem;
      line-height: 4rem;
      color: var(--anchor);

      transition: color 0.2s;

      & + a {
        margin-left: 4rem;
      }

      &:hover {
        color: var(--white);
      }

      &.active {
        color: var(--white);
        font-weight: bold;
      }

      &.active::after {
        content: "";
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: var(--neonGreen);
      }
    }
  }
`;
