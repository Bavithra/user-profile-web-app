import styled, { css } from "styled-components";

import { Colors } from "../styles/Colors";
import { mediaMax } from "../styles/MediaQuery.styles";

export const buttonStyle = css`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  opacity: 1;
  transition: opacity 300ms;

  &:hover {
    opacity: 0.7;
  }
`;

export const PageContainer = styled.div`
  margin: 0 auto;
  padding: 24px 32px;
  width: 100%;
  background-color: ${Colors.purewhite};
  min-height: calc(100vh - 177px);

  ${mediaMax("md")} {
    margin: 0;
    padding: 0;
  }
`;

export const Text = styled.div`
  margin: 0 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  position: relative;
`;
