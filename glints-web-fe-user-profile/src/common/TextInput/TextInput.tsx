import React, { ChangeEvent } from "react";
import { InputContainer } from "../../styles/Common.styles";
import { Input, Label } from "./TextInput.styles";

type Props = {
  label: string;
  onChange: (value: string) => void;
  value?: string;
};

export default function TextInput(props: Props) {
  const { label, value, onChange } = props;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  function hasValue() {
    if (value) {
      return value?.length > 0;
    }

    return false;
  }

  return (
    <InputContainer>
      <Input
        type={"type"}
        value={value}
        hasValue={hasValue()}
        onChange={handleChange}
      />
      <Label hasValue={hasValue()}>{label}</Label>
    </InputContainer>
  );
}
