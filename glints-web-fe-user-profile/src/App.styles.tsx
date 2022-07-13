import styled, { createGlobalStyle } from "styled-components";

import { Colors } from "./styles/Colors";

const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }

  input {
    margin: 0;
    border-radius: 0;
  }

  button {
    padding: 0;
    border: none;
    cursor: pointer;
    outline: none;
    background: transparent;
  }

  body {
    height: 100vh;
    width: 100%;
    font-family: Noto Sans, sans-serif;
  }
`;

export default GlobalStyle;

export const AppContainer = styled.div`
  display: flex;
  padding: 30px 120px;
`;

export const PageContainer = styled.div`
  position: relative;
  flex-grow: 1;
  position: relative;
  margin: 0px auto;
  padding: 0px 15px;
  background-color: ${Colors.purewhite};
`;

export const ContentContainer = styled.div`
  padding: 25px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  margin: 24px 0;
  justify-content: flex-end;
  align-items: center;
`;
