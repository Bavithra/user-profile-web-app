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
import WorkExperienceUtil from "../../utils/WorkExperienceUtil";

type Props = {
  workExperiences: WorkExperience[];
  onAddWorkExperienceClick: (
    workExperience: WorkExperience,
    index: number
  ) => void;
  onDeleteWorkExperienceClick: (index: number) => void;
};

export default function WorkExperienceList(props: Props) {
  const {
    workExperiences,
    onAddWorkExperienceClick,
    onDeleteWorkExperienceClick,
  } = props;

  function sortByDate(a: WorkExperience, b: WorkExperience) {
    if (
      new Date(a["start-date"]).getTime() < new Date(b["start-date"]).getTime()
    ) {
      return 1;
    }
    if (
      new Date(a["start-date"]).getTime() > new Date(b["start-date"]).getTime()
    ) {
      return -1;
    }
    return 0;
  }

  function getWorkExperienceList(workExperiences: WorkExperience[]) {
    const sortedArray = [...workExperiences];
    sortedArray?.sort(sortByDate);

    return sortedArray.length > 0
      ? sortedArray?.map((workExperience: WorkExperience, index: number) => {
          return (
            <WorkExperienceListItem
              key={index}
              index={index}
              workExperience={workExperience}
              onEditClicked={onAddWorkExperienceClick}
              onDeleteClicked={onDeleteWorkExperienceClick}
            />
          );
        })
      : null;
  }

  return (
    <>
      <Title>
        WORK EXPERIENCE
        {workExperiences?.length > 0 && (
          <LinkButton
            onClick={() =>
              onAddWorkExperienceClick(
                WorkExperienceUtil.getInitialWorkExperienceInput(),
                -1
              )
            }
          >
            <FontAwesomeIcon icon={faCirclePlus} size={"sm"} />
            Add Work Experience
          </LinkButton>
        )}
      </Title>

      {workExperiences === null || workExperiences?.length === 0 ? (
        <NoDataContainer>
          77.9% of employers surveyed consider work experience to be a crucial
          data point in job applications. So be sure to fill up this section to
          raise your chances of securing an interview!
          <LinkButton
            onClick={() =>
              onAddWorkExperienceClick(
                WorkExperienceUtil.getInitialWorkExperienceInput(),
                -1
              )
            }
          >
            <FontAwesomeIcon icon={faCirclePlus} size={"sm"} />
            Add Work Experience
          </LinkButton>
        </NoDataContainer>
      ) : (
        getWorkExperienceList(workExperiences)
      )}
    </>
  );
}
