import React from "react";

import { Button as StyledButton } from "./Button.styles";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button(props: Props) {
  const { children, onClick } = props;

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
