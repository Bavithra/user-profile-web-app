import React, { useState } from "react";
import Button from "../../common/Button";
import ImageUpload from "../../common/ImageUpload";
import TextInput from "../../common/TextInput";
import WorkExperienceItem from "../../components/WorkExperience";
import WorkExperienceAddModal from "../../components/WorkExperienceAddModal";
import { WorkExperience } from "../../types/WorkExperience.type";

import {
  DetailsContainer,
  InputContainer,
  ProfilePageContainer,
} from "./ProfilePage.styles";

export default function ProfilePage() {
  const [name, setName] = useState<string>();
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([
    {
      "start-date": "23-03-2018",
      "end-date": "23-03-2018",
      "job-date": "23-03-2018",
      company: "23-03-2018",
      "company-logo": "23-03-2018",
      "job-description": "23-03-2018",
    },
  ]);


  function handleLastNameChange(value: string) {
    setName(value);
  }

  function handleSaveButtonClick() {
    setWorkExperiences((previousExperiences) => {
      const value = {
        "start-date": "23-03-2018",
        "end-date": "23-03-2018",
        "job-date": "23-03-2018",
        company: "23-03-2018",
        "company-logo": "23-03-2018",
        "job-description": "23-03-2018",
      };

      return {
        ...previousExperiences,
        value,
      };
    });
  }

  return (
    <ProfilePageContainer>
      <div>
        <ImageUpload />
      </div>
      <DetailsContainer>
        {name}

        <InputContainer>
          <TextInput
            label="Name"
            value={name}
            onChange={handleLastNameChange}
          />
          <TextInput label="Age" value={name} onChange={handleLastNameChange} />
        </InputContainer>
        {workExperiences.length > 0 &&
          workExperiences.map((workExperience, index) => {
            return (
              <WorkExperienceItem key={index} workExperience={workExperience} />
            );
          })}
       
        <Button onClick={handleSaveButtonClick}>Save</Button>
        <Button>Cancel</Button>
      </DetailsContainer>
      <WorkExperienceAddModal isOpen={true} />
    </ProfilePageContainer>
  );
}
