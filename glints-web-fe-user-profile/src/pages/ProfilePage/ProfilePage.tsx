import React, { useState } from "react";

import ImageUpload from "../../common/ImageUpload";
import TextInput from "../../common/TextInput";

import WorkExperienceList from "../../components/WorkExperienceList";
import WorkExperienceAddModal from "../../components/WorkExperienceAddModal";

import { WorkExperience } from "../../types/WorkExperience.type";

import {
  DetailsContainer,
  InputContainer,
  LinkButton,
  ProfilePageContainer,
} from "./ProfilePage.styles";

export default function ProfilePage() {
  const [name, setName] = useState<string>();
  const [age, setAge] = useState<string>();

  const [isWorkExperienceModalOpen, setIsWorkExperienceModalOpen] =
    useState(false);

  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([]);

  function handleClick() {
    setIsWorkExperienceModalOpen(true);
  }

  function handleLastNameChange(value: string) {
    setName(value);
  }

  function handleAgeChange(value: string) {
    setAge(value);
  }

  function handleSaveButtonClick(workExperience: WorkExperience) {
    setWorkExperiences([...workExperiences, workExperience]);
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
          <TextInput
            label="Age"
            type="number"
            value={age}
            onChange={handleAgeChange}
          />
        </InputContainer>
        <WorkExperienceList workExperiences={workExperiences} />

        <LinkButton onClick={handleClick}>Add Work Experience</LinkButton>
      </DetailsContainer>
      <WorkExperienceAddModal
        isOpen={isWorkExperienceModalOpen}
        setIsWorkExperienceModalOpen={setIsWorkExperienceModalOpen}
        onSaveButtonClick={handleSaveButtonClick}
      />
    </ProfilePageContainer>
  );
}
