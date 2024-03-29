import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import DateTimeUtil from "../../utils/DateTimeUtil";

import TextInput from "../TextInput";
import { DATE_FORMAT } from "../../Constants";
import { Container } from "./DatePicker.styles";

type Props = {
  selectedDate: Date | undefined;
  placeholder: string;
  onChange: (date: Date) => void;
  isMonthPicker?: boolean;
  dateFormat?: string;
  minDate? : Date;
};

export default function DatePicker(props: Props) {
  const {
    selectedDate,
    placeholder,
    onChange,
    isMonthPicker = false,
    dateFormat = DATE_FORMAT,
    minDate
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function handleSelectedDateChange(value: string) {
    onChange(new Date(value)!);
  }

  return (
    <ReactDatePicker
      open={isOpen}
      preventOpenOnFocus={true}
      onChange={onChange}
      onClickOutside={handleClick}
      selected={selectedDate}
      onSelect={handleClick}
      dateFormat={dateFormat}
      showMonthYearPicker={isMonthPicker}
      showYearDropdown
      minDate={minDate}
      maxDate={new Date()}
      customInput={
        <Container>
          <div onClick={handleClick}>
            {selectedDate ? (
              <TextInput
                readOnly={isMonthPicker}
                label={placeholder}
                value={DateTimeUtil.getDisplayDateWithDay(
                  selectedDate,
                  dateFormat
                )}
                onChange={handleSelectedDateChange}
              />
            ) : (
              <TextInput
                readOnly={isMonthPicker}
                label={placeholder}
                onChange={handleSelectedDateChange}
              />
            )}
          </div>
        </Container>
      }
    />
  );
}
