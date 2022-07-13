import React from "react";

import { Button as StyledButton } from "./Button.styles";

type Props = {
  children: React.ReactNode;
  isDisable?: boolean;
  onClick?: () => void;
};

export default function Button(props: Props) {
  const { children, isDisable = false, onClick } = props;

  return (
    <StyledButton disabled={isDisable} isDisabled={isDisable} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
