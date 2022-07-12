import React, { useState } from "react";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DATE_FORMAT } from "../../Constants";
import DateTimeUtil from "../../utils/DateTimeUtil";
import TextInput from "../TextInput";

import "./DatePicker.scss";

type Props = {
  selectedDate: Date | undefined;
  placeholder: string;
  onChange: (date: Date | null) => void;
};

export default function DatePicker(props: Props) {
  const { selectedDate, placeholder, onChange } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleTextInputDateChange(value: string) {
    onChange(new Date(value));
  }

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <ReactDatePicker
      open={isOpen}
      preventOpenOnFocus={true}
      selected={selectedDate}
      onChange={onChange}
      dateFormat={DATE_FORMAT}
      onClickOutside={handleClick}
      onSelect={handleClick}
      showMonthYearPicker
      showFullMonthYearPicker
      showFourColumnMonthYearPicker
      customInput={
        selectedDate ? (
          <TextInput
            label={placeholder}
            value={DateTimeUtil.getDisplayDateWithDay(selectedDate)}
            onChange={handleTextInputDateChange}
          />
        ) : (
          <TextInput label={placeholder} onChange={handleTextInputDateChange} />
        )
      }
    />
  );
}
