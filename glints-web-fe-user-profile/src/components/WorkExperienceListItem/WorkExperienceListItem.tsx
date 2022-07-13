import React from "react";

import { WorkExperience } from "../../types/WorkExperience.type";
import {
  Container,
  Globe,
  Line,
  WorkExperienceContainer,
  WorkExperienceDetail,
  WorkExperiencePeriod,
} from "./WorkExperienceListItem.styles";

type Props = {
  workExperience: WorkExperience;
};

export default function WorkExperienceListItem(props: Props) {
  const { workExperience } = props;

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
      </WorkExperienceContainer>
    </Container>
  );
}
