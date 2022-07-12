import React from "react";
import { InputFields } from "../../enums/InputFields.enum";
import { InputContainer } from "../../pages/ProfilePage/ProfilePage.styles";
import { WorkExperience } from "../../types/WorkExperience.type";
import { WorkDetail } from "./WorkExperience.styles";

type Props = {
  workExperience: WorkExperience;
};

export default function WorkExperienceItem(props: Props) {
  const { workExperience } = props;

  return (
    <InputContainer>
      <WorkDetail>
        <div>{InputFields.StartDate}</div>
        <div>{workExperience["start-date"]}</div>
      </WorkDetail>
      <WorkDetail>
        <div>{InputFields.EndDate}</div>
        <div>{workExperience["end-date"]}</div>
      </WorkDetail>
      <WorkDetail>
        <div>{InputFields.Company}</div>
        <div>{workExperience.company}</div>
      </WorkDetail>
      <WorkDetail>
        <div>{InputFields.JobTitle}</div>
        <div>{workExperience["job-date"]}</div>
      </WorkDetail>
    </InputContainer>
  );
}
