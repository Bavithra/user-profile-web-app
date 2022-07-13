import React, { SetStateAction, useCallback } from "react";
import Button from "../../common/Button";
import DatePicker from "../../common/DatePicker";

import Modal from "../../common/Modal";
import TextInput from "../../common/TextInput";
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

    setWorkExperience(WorkExperienceUtil.getInitialWorkExperienceInput());
    onCancelClick();
  }

  function setCompanyDetails(value: string): void {
    updateWorkExperience("company", value);
    updateWorkExperience(
      "company-logo",
      `https://logo.clearbit.com/${value
        .replace(/\s/g, "")
        .toLowerCase()}.com?size=60`
    );
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
              checked={
                DateTimeUtil.getDisplayDateWithDay(new Date()) ===
                workExperience["end-date"]
              }
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

          <Company>
            <TextInput
              label="Company"
              value={workExperience.company}
              onChange={(value) => setCompanyDetails(value)}
            />
            <CompanyLogoTitle>
              logo
              <img
                alt="Click here or type the company name to upload"
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
