import styled from "styled-components";
import { Colors } from "../../styles/Colors";

type ButtonProps = {
  isDisabled: boolean;
};

export const Button = styled.button<ButtonProps>`
  color: white;
  background: ${(props) => (props.isDisabled ? Colors.grey6 : Colors.green1)};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid
    ${(props) => (props.isDisabled ? Colors.grey6 : Colors.green1)};
  border-radius: 3px;
`;
