import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Colors } from "../../styles/Colors";

import { WorkExperience } from "../../types/WorkExperience.type";
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

  return (
    <Container>
      <Globe />
      <Line />
      <WorkExperienceContainer>
        <img alt="logo" src={workExperience["company-logo"]} />
        <WorkExperienceDetail>
          <h3>{workExperience["job-title"]}</h3>
          <div>{workExperience.company}</div>
          <WorkExperiencePeriod>{`${workExperience["start-date"]} - ${workExperience["end-date"]}`}</WorkExperiencePeriod>
        </WorkExperienceDetail>

        <ActionIconContainer>
          <ActionIcon icon={faEdit} size={"lg"} onClick={() => onEditClicked(workExperience, index)} />
          <ActionIcon icon={faTrash} color={Colors.red} size={"lg"} onClick={() => onDeleteClicked(index)} />
        </ActionIconContainer>
      </WorkExperienceContainer>
    </Container>
  );
}
