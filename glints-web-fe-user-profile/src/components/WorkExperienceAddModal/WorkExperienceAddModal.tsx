import React, { useCallback, useState } from "react";
import Button from "../../common/Button";
import DatePicker from "../../common/DatePicker";

import Modal from "../../common/Modal";
import TextInput from "../../common/TextInput";
import { Text } from "../../styles/Common.styles";
import { WorkExperience } from "../../types/WorkExperience.type";
import DateTimeUtil from "../../utils/DateTimeUtil";

import {
  WorkExperienceAddModalContainer,
  WorkExperienceAddModalInfo,
  Header,
  WorkExperienceAddModalFooter,
  PresentCompany,
} from "./WorkExperienceAddModal.styles";

type Props = {
  isOpen: boolean;
  setIsWorkExperienceModalOpen: (shouldShowModal: boolean) => void;
  onSaveButtonClick: (workExperience: WorkExperience) => void;
};

const initialInput: WorkExperience = {
  "start-date": "",
  "end-date": "",
  "job-title": "",
  company: "",
  "company-logo": "",
  "job-description": "",
};

export default function WorkExperienceAddModal(props: Props) {
  const { isOpen, setIsWorkExperienceModalOpen, onSaveButtonClick } = props;

  const [workExperience, setWorkExperience] =
    useState<WorkExperience>(initialInput);

  function onCancelClick() {
    setIsWorkExperienceModalOpen(false);
  }

  const updateWorkExperience = useCallback(
    (inputKey: keyof WorkExperience, value: string) => {
      setWorkExperience((previousInputs) => ({
        ...previousInputs,
        [inputKey]: value,
      }));
    },
    [setWorkExperience]
  );

  function onActionButtonClick(workExperience?: WorkExperience) {
    if (workExperience !== undefined) {
      onSaveButtonClick(workExperience);
    }

    setWorkExperience(initialInput);
    onCancelClick();
  }

  return (
    <Modal isOpen={isOpen} onClose={onCancelClick}>
      <WorkExperienceAddModalContainer>
        <WorkExperienceAddModalInfo>
          <Header>ADD WORK EXPERIENCE</Header>

          <DatePicker
            selectedDate={
              workExperience["start-date"].length > 0
                ? new Date(workExperience["start-date"])
                : undefined
            }
            placeholder={"Start Date"}
            isMonthPicker={true}
            onChange={(value) =>
              updateWorkExperience(
                "start-date",
                DateTimeUtil.getDisplayDateWithDay(value!)
              )
            }
          />

          <DatePicker
            selectedDate={
              workExperience["end-date"].length > 0
                ? new Date(workExperience["end-date"])
                : undefined
            }
            placeholder={"End Date"}
            isMonthPicker={true}
            onChange={(value) =>
              updateWorkExperience(
                "end-date",
                DateTimeUtil.getDisplayDateWithDay(value!)
              )
            }
          />
          <PresentCompany>
            <input
              type="checkbox"
              onChange={(event) =>
                updateWorkExperience(
                  "end-date",
                  event.target.checked
                    ? DateTimeUtil.getDisplayDateWithDay(new Date())
                    : workExperience["end-date"]
                )
              }
            />
            <Text>I'm currently working in this company</Text>
          </PresentCompany>

          <TextInput
            label="Job title"
            value={workExperience["job-title"]}
            onChange={(value) => updateWorkExperience("job-title", value)}
          />
          <TextInput
            label="Company"
            value={workExperience.company}
            onChange={(value) => updateWorkExperience("company", value)}
          />

          <TextInput
            label="Company Logo"
            value={workExperience["company-logo"]}
            onChange={(value) => updateWorkExperience("company-logo", value)}
          />
          <TextInput
            label="Job description"
            value={workExperience["job-description"]}
            onChange={(value) => updateWorkExperience("job-description", value)}
          />
        </WorkExperienceAddModalInfo>

        <WorkExperienceAddModalFooter>
          <Button onClick={() => onActionButtonClick()}>CANCEL</Button>
          <Button onClick={() => onActionButtonClick(workExperience)}>
            SAVE
          </Button>
        </WorkExperienceAddModalFooter>
      </WorkExperienceAddModalContainer>
    </Modal>
  );
}
