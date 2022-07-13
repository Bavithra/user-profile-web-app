import React from "react";

import WorkExperienceListItem from "../WorkExperienceListItem";

import { WorkExperience } from "../../types/WorkExperience.type";

type Props = {
  workExperiences: WorkExperience[];
};

export default function WorkExperienceList(props: Props) {
  const { workExperiences } = props;

  function getWorkExperienceList(workExperiences: WorkExperience[]) {
    return workExperiences.map((workExperience, index) => {
      return (
        <WorkExperienceListItem key={index} workExperience={workExperience} />
      );
    });
  }

  return <>{getWorkExperienceList(workExperiences)}</>;
}
