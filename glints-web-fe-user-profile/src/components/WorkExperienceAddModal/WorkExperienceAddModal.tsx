import React, { SetStateAction, useCallback } from "react";
import Button from "../../common/Button";
import DatePicker from "../../common/DatePicker";

import Modal from "../../common/Modal";
import TextInput from "../../common/TextInput";
import { MAX_TEXTAREA_INPUT } from "../../Constants";
import { Text } from "../../styles/Common.styles";
import { WorkExperience } from "../../types/WorkExperience.type";
import DateTimeUtil from "../../utils/DateTimeUtil";
import WorkExperienceUtil from "../../utils/WorkExperienceUtil";

import {
  WorkExperienceAddModalContainer,
  WorkExperienceAddModalInfo,
  Header,
  WorkExperienceAddModalFooter,
  PresentCompany,
  Company,
  CompanyLogoTitle,
  TextArea,
} from "./WorkExperienceAddModal.styles";

type Props = {
  isOpen: boolean;
  workExperience: WorkExperience;
  setWorkExperience: React.Dispatch<SetStateAction<WorkExperience>>;
  setIsWorkExperienceModalOpen: (shouldShowModal: boolean) => void;
  onSaveButtonClick: (workExperience: WorkExperience) => void;
};

export default function WorkExperienceAddModal(props: Props) {
  const {
    isOpen,
    workExperience,
    setIsWorkExperienceModalOpen,
    setWorkExperience,
    onSaveButtonClick,
  } = props;

  function onCancelClick() {
    setIsWorkExperienceModalOpen(false);
  }

  const updateWorkExperience = useCallback(
    (inputKey: keyof WorkExperience, value: string) => {
      setWorkExperience((previousInputs) => (WorkExperienceUtil.update(previousInputs, inputKey, value)));
    },
    [setWorkExperience]
  );

  function onActionButtonClick(workExperience?: WorkExperience) {
    if (workExperience !== undefined) {
      onSaveButtonClick(workExperience);
    }

    setWorkExperience(WorkExperienceUtil.getInitialWorkExperienceInput());
    onCancelClick();
  }

  function setCompanyDetails(value: string): void {
    updateWorkExperience("company", value);
    updateWorkExperience(
      "company-logo",
      WorkExperienceUtil.getCompanyLogoUrl(value)
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onCancelClick}>
      <WorkExperienceAddModalContainer>
        <WorkExperienceAddModalInfo>
          <Header>ADD WORK EXPERIENCE</Header>

          <DatePicker
            selectedDate={DateTimeUtil.getDate(workExperience["start-date"])}
            placeholder={"Start Date*"}
            isMonthPicker={true}
            onChange={(value) =>
              updateWorkExperience(
                "start-date",
                DateTimeUtil.getDisplayDateWithDay(value!)
              )
            }
          />

          <DatePicker
            selectedDate={DateTimeUtil.getDate(workExperience["end-date"])}
            placeholder={"End Date*"}
            minDate={new Date(workExperience["start-date"])}
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
              checked={
                DateTimeUtil.getDisplayDateWithDay(new Date()) ===
                workExperience["end-date"]
              }
              onChange={(event) =>
                updateWorkExperience(
                  "end-date",
                  DateTimeUtil.getEndDate(
                    event.target.checked,
                    workExperience["end-date"]
                  )
                )
              }
            />
            <Text>I'm currently working in this company</Text>
          </PresentCompany>

          <TextInput
            label="Job title*"
            value={workExperience["job-title"]}
            onChange={(value) => updateWorkExperience("job-title", value)}
          />

          <Company>
            <TextInput
              label="Company*"
              value={workExperience.company}
              onChange={(value) => setCompanyDetails(value)}
            />
            <CompanyLogoTitle>
              logo
              <img
                alt="logo"
                src={workExperience["company-logo"]}
                onError={(e) => {
                  updateWorkExperience(
                    "company-logo",
                    "https://plugins.jetbrains.com/files/19441/190795/icon/pluginIcon.svg"
                  );
                }}
              />
            </CompanyLogoTitle>
          </Company>

          <TextArea
            placeholder={"Job description(optional)"}
            maxLength={MAX_TEXTAREA_INPUT}
            value={workExperience["job-description"]}
            onChange={(value) =>
              updateWorkExperience("job-description", value.target.value)
            }
          />
        </WorkExperienceAddModalInfo>

        <WorkExperienceAddModalFooter>
          <Button onClick={() => onActionButtonClick()}>CANCEL</Button>
          <Button
            isDisable={WorkExperienceUtil.shouldSaveButtonDisable(
              workExperience
            )}
            onClick={() => onActionButtonClick(workExperience)}
          >
            SAVE
          </Button>
        </WorkExperienceAddModalFooter>
      </WorkExperienceAddModalContainer>
    </Modal>
  );
}

