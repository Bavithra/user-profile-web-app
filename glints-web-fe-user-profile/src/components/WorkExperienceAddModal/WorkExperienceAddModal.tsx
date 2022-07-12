import React, { useState } from "react";
import DatePicker from "../../common/DatePicker";

import Modal from "../../common/Modal";
import TextInput from "../../common/TextInput";

import {
  WorkExperienceAddModalContainer,
  WorkExperienceAddModalInfo,
  Header,
  InputContainer,
} from "./WorkExperienceAddModal.styles";

type Props = {
  isOpen: boolean;
};

export default function WorkExperienceAddModal(props: Props) {
  const { isOpen } = props;

  const [name, setName] = useState<string>();
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>();

  function handleSelectedDateChange(date: Date | null) {
    setSelectedDateTime(date);
  }

  function handleLastNameChange(value: string) {
    setName(value);
  }

  function onCancelClick() {}

  return (
    <Modal isOpen={isOpen} onClose={onCancelClick}>
      <WorkExperienceAddModalContainer>
        <WorkExperienceAddModalInfo>
          <Header>ADD WORK EXPERIENCE</Header>
          <TextInput
              label="Start date"
              value={name}
              onChange={handleLastNameChange}
            />
          <InputContainer>
           
            <DatePicker
              selectedDate={selectedDateTime!}
              placeholder={'Start Date'}
              onChange={handleSelectedDateChange}
            />
              <DatePicker
              selectedDate={selectedDateTime!}
              placeholder={'End Date'}
              onChange={handleSelectedDateChange}
            />
          </InputContainer>

          <TextInput
              label="Company"
              value={name}
              onChange={handleLastNameChange}
            />
            <TextInput
              label="Company Logo"
              value={name}
              onChange={handleLastNameChange}
            />
            <TextInput
              label="Job description"
              value={name}
              onChange={handleLastNameChange}
            />
        </WorkExperienceAddModalInfo>
      </WorkExperienceAddModalContainer>
    </Modal>
  );
}
