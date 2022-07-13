import React, { useState } from "react";

import ImageUpload from "../../common/ImageUpload";
import TextInput from "../../common/TextInput";

import WorkExperienceList from "../../components/WorkExperienceList";
import WorkExperienceAddModal from "../../components/WorkExperienceAddModal";

import { WorkExperience } from "../../types/WorkExperience.type";

import {
  DetailsContainer,
  InputContainer,
  ProfilePageContainer,
  Title,
} from "./ProfilePage.styles";
import WorkExperienceUtil from "../../utils/WorkExperienceUtil";
import Button from "../../common/Button";
import { Text } from "../../styles/Common.styles";

export default function ProfilePage() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>();
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const [isWorkExperienceModalOpen, setIsWorkExperienceModalOpen] =
    useState(false);

  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([]);
  const [workExperience, setWorkExperience] = useState<WorkExperience>(
    WorkExperienceUtil.getInitialWorkExperienceInput()
  );

  function handleAddWorkExperienceClick(
    workExperience: WorkExperience,
    index: number
  ) {
    setWorkExperience(workExperience);
    setSelectedIndex(index);
    setIsWorkExperienceModalOpen(true);
  }

  function handleDeleteWorkExperienceClick(index: number) {
    const tempArray = workExperiences;
    tempArray.splice(index, 1);
    setSelectedIndex(index);
    setWorkExperiences(tempArray);
  }

  function handleLastNameChange(value: string) {
    setName(value);
  }

  function handleAgeChange(value: string) {
    setAge(value);
  }

  function handleProfileSaveClick() {
    //TODO: implement call to post api
  }

  function handleSaveButtonClick(workExperience: WorkExperience) {
    if (selectedIndex === -1) {
      const value = {
        ...workExperience,
        id: `${workExperience.company}-${workExperience["start-date"]}-${workExperience["end-date"]}}`,
      };
      setWorkExperiences([...workExperiences, value]);
    } else {
      const tempArray = workExperiences;
      tempArray[selectedIndex] = workExperience;
      setWorkExperiences(tempArray);
    }
  }

  return (
    <>
      {name.length > 0 && <Title> Hello {name}</Title>}
      <ProfilePageContainer>
        <div>
          <ImageUpload />
        </div>
        <DetailsContainer>
          <InputContainer>
            <TextInput
              label="Name*"
              value={name}
              onChange={handleLastNameChange}
            />
            <TextInput
              label="Age*"
              type="number"
              value={age}
              onChange={handleAgeChange}
            />
          </InputContainer>
          <Text>
            Please save all the changes you have made to the profile by clicking
            the below button
          </Text>

          <Button
            isDisable={name === "" || age === undefined || age === ''}
            onClick={handleProfileSaveClick}
          >
            SAVE PROFILE
          </Button>
          <WorkExperienceList
            workExperiences={workExperiences}
            onAddWorkExperienceClick={handleAddWorkExperienceClick}
            onDeleteWorkExperienceClick={handleDeleteWorkExperienceClick}
          />
        </DetailsContainer>

        <WorkExperienceAddModal
          isOpen={isWorkExperienceModalOpen}
          workExperience={workExperience}
          setIsWorkExperienceModalOpen={setIsWorkExperienceModalOpen}
          setWorkExperience={setWorkExperience}
          onSaveButtonClick={handleSaveButtonClick}
        />
      </ProfilePageContainer>
    </>
  );
}
