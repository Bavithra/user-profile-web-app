import React, { ChangeEvent } from "react";
import { MAX_TEXT_INPUT } from "../../Constants";
import { InputContainer } from "../../styles/Common.styles";
import { Input, Label } from "./TextInput.styles";

type Props = {
  label: string;
  onChange: (value: string) => void;
  type?: string;
  value?: string;
  readOnly?: boolean;
};

export default function TextInput(props: Props) {
  const { label, value, readOnly = false, type = "string", onChange } = props;

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
        readOnly={readOnly}
        type={type}
        value={value}
        hasValue={hasValue()}
        onChange={handleChange}
        maxLength={MAX_TEXT_INPUT}
        min="0"
      />
      <Label hasValue={hasValue()}>{label}</Label>
    </InputContainer>
  );
}
