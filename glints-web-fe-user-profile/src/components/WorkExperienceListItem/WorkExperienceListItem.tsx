import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useCallback, useEffect, useState } from "react";
import WorkExperienceApi from "../../api/WorkExperienceApi";
import Spinner from "../../common/Spinner";
import { Colors } from "../../styles/Colors";

import { WorkExperience } from "../../types/WorkExperience.type";
import WorkExperienceUtil from "../../utils/WorkExperienceUtil";
import ConfirmationModal from "../ConfirmationModal";
import {
  ActionIcon,
  ActionIconContainer,
  Container,
  Globe,
  Line,
  WorkExperienceContainer,
  WorkExperienceDetail,
  WorkExperiencePeriod,
} from "./WorkExperienceListItem.styles";

type Props = {
  index: number;
  workExperience: WorkExperience;
  onEditClicked: (workExperience: WorkExperience, index: number) => void;
  onDeleteClicked: (index: number) => void;
};

export default function WorkExperienceListItem(props: Props) {
  const { index, workExperience, onEditClicked, onDeleteClicked } = props;

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [logo, setLogo] = useState<string>(workExperience["company-logo"] || '');

  useEffect(() => {
    try {
      setLogo(WorkExperienceUtil.getCompanyLogoUrl(workExperience.company));
    } catch (error) {
      setLogo(
        "https://plugins.jetbrains.com/files/19441/190795/icon/pluginIcon.svg")
    }
  },[workExperience]);

  const onDeleteWorkExperience = useCallback(async () => {
    try {
      if (workExperience.id === "") {
        onDeleteClicked(index);
        return;
      }

      setIsLoading(true);
      const response = await WorkExperienceApi.deleteWorkExperience(
        workExperience.id!
      );
      if (response.data) {
        onDeleteClicked(index);
      }
    } catch (error) {
      //Silence error
    } finally {
      setIsLoading(false);
      setDeleteModalOpen(false);
    }
  }, [index, onDeleteClicked, workExperience.id]);

  async function handleDeleteClick() {
    setDeleteModalOpen(true);
  }

  async function handleConfirmClick() {
    onDeleteWorkExperience();
  }

  async function handleConfirmCancelClick() {
    setDeleteModalOpen(false);
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      <Globe />
      <Line />
      <WorkExperienceContainer>
        <img
          alt="logo"
          src={logo}
          onError={(e) => {
            setLogo(
              "https://plugins.jetbrains.com/files/19441/190795/icon/pluginIcon.svg")
          }}
        />

        <WorkExperienceDetail>
          <h3>{workExperience["job-title"]}</h3>
          <div>{workExperience.company}</div>
          <WorkExperiencePeriod>{`${workExperience["start-date"]} - ${workExperience["end-date"]}`}</WorkExperiencePeriod>
          {workExperience["job-description"]?.length > 0 && (
            <div>Job Description: {workExperience["job-description"]}</div>
          )}
        </WorkExperienceDetail>

        <ActionIconContainer>
          <ActionIcon
            icon={faEdit}
            size={"lg"}
            onClick={() => onEditClicked(workExperience, index)}
          />
          <ActionIcon
            icon={faTrash}
            color={Colors.red}
            size={"lg"}
            onClick={handleDeleteClick}
          />
        </ActionIconContainer>
      </WorkExperienceContainer>
      <ConfirmationModal
        action={"Delete"}
        isOpen={isDeleteModalOpen}
        messageTitle={"Delete Work Experience"}
        message={"Are you sure you want to delete this entry?"}
        onActionClick={handleConfirmClick}
        setIsConfirmationModalOpen={handleConfirmCancelClick}
      />
    </Container>
  );
}
