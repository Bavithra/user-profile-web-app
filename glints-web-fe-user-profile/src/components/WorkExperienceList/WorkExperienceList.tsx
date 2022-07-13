import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import WorkExperienceListItem from "../WorkExperienceListItem";

import { WorkExperience } from "../../types/WorkExperience.type";
import {
  LinkButton,
  NoDataContainer,
  Title,
} from "./WorkExperienceList.styles";

type Props = {
  workExperiences: WorkExperience[];
  onAddWorkExperienceClick: () => void;
};

export default function WorkExperienceList(props: Props) {
  const { workExperiences, onAddWorkExperienceClick } = props;

  function getWorkExperienceList(workExperiences: WorkExperience[]) {
    return workExperiences.map((workExperience, index) => {
      return (
        <WorkExperienceListItem key={index} workExperience={workExperience} />
      );
    });
  }

  return (
    <>
      <Title>
        WORK EXPERIENCE
        {workExperiences.length > 0 && (
          <LinkButton onClick={onAddWorkExperienceClick}>
            <FontAwesomeIcon icon={faCirclePlus} size={"sm"} />
            Add Work Experience
          </LinkButton>
        )}
      </Title>

      {workExperiences.length === 0 && (
        <NoDataContainer>
          77.9% of employers surveyed consider work experience to be a crucial
          data point in job applications. So be sure to fill up this section to
          raise your chances of securing an interview!
          <LinkButton onClick={onAddWorkExperienceClick}>
            <FontAwesomeIcon icon={faCirclePlus} size={"sm"} />
            Add Work Experience
          </LinkButton>
        </NoDataContainer>
      )}
      {getWorkExperienceList(workExperiences)}
    </>
  );
}
