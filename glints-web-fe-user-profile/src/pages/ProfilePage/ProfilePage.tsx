import React, { useCallback, useState } from "react";

import ImageUpload from "../../common/ImageUpload";
import TextInput from "../../common/TextInput";

import WorkExperienceList from "../../components/WorkExperienceList";
import WorkExperienceAddModal from "../../components/WorkExperienceAddModal";

import { RootState } from "../../state/reducer/root-reducer";

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
import UserProfileApi from "../../api/UserProfileApi";
import ConfirmationModal from "../../components/ConfirmationModal";
import Spinner from "../../common/Spinner";
import { DEFAULT_IMAGE } from "../../Constants";
import { saveUser } from "../../state/slices/user-slice";
import { UserProfile } from "../../types/UserProfile.type";
import { useDispatch, useSelector } from "react-redux";

export default function ProfilePage() {

  const {user} = useSelector((state: RootState) => state.user);

  const [name, setName] = useState<string>(user?.name || '');
  const [email, setEmail] = useState<string>(user?.email || '');
  const [age, setAge] = useState<string>(user?.age || '');
  const [fileSelected, setFileSelected] = useState<
    string | ArrayBuffer | null
  >();

  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const [isWorkExperienceModalOpen, setIsWorkExperienceModalOpen] =
    useState(false);
  const [isUpdateConfirmationModalOpen, setIsUpdateConfirmationOpen] =
    useState(false);

  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>(user?.["work-experience"] || []);
  const [workExperience, setWorkExperience] = useState<WorkExperience>(
    WorkExperienceUtil.getInitialWorkExperienceInput()
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  function handleAddWorkExperienceClick(
    workExperience: WorkExperience,
    index: number
  ) {
    setWorkExperience(workExperience);
    setSelectedIndex(index);
    setIsWorkExperienceModalOpen(true);
  }

  function handleDeleteWorkExperienceClick(index: number) {
    const tempArray = [...workExperiences];
    tempArray.splice(index, 1);
    setSelectedIndex(index);
    setWorkExperiences(tempArray);
  }

  function handleNameChange(value: string) {
    setName(value);
  }

  function handleEmailChange(value: string) {
    setEmail(value);
  }

  async function handleEmailBlur() {
    try {
      setIsLoading(true);
      const response = await UserProfileApi.getUser(email);
      if (response.data) {
        setIsUpdateConfirmationOpen(true);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  function handleAgeChange(value: string) {
    setAge(value);
  }

  async function handleProfileSaveClick() {
    const user: UserProfile = {
      email: email,
      name: name,
      age: age || "",
      "profile-image": fileSelected?.toString(),
      "work-experience": workExperiences,
    };

    dispatch(saveUser(user));

    try {
      setIsLoading(true);

      const response = await UserProfileApi.getUser(email);
      if (response.data) {
        await UserProfileApi.updateUser(user);
      } else {
        await UserProfileApi.createUser(user);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSaveButtonClick(workExperience: WorkExperience) {
    if (selectedIndex === -1) {
      const value = {
        ...workExperience,
        id: "",
      };

      setWorkExperiences(
        workExperiences == null ? [value] : [...workExperiences, value]
      );
    } else {
      const tempArray = [...workExperiences];
      tempArray[selectedIndex] = workExperience;
      setWorkExperiences(tempArray);
    }
    setIsWorkExperienceModalOpen(false);
  }

  async function handleConfirmClick() {
    fetchUserDetails();
    setIsUpdateConfirmationOpen(false);
  }

  async function handleConfirmCancelClick() {
    setIsUpdateConfirmationOpen(false);
  }

  const fetchUserDetails = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await UserProfileApi.getUser(email);
      if (response.data) {
        setName(response.data.name);
        setAge(response.data.age);
        setFileSelected(response.data["profile-image"] === "undefined" ? DEFAULT_IMAGE : response.data["profile-image"]);
        setWorkExperiences(response.data["work-experience"]);
      }
    } catch (error) {
      //Silence error
    } finally {
      setIsLoading(false);
    }
  }, [email]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {name.length > 0 && <Title> Hello {name}</Title>}
      <ProfilePageContainer>
        <div>
          <ImageUpload
            fileSelected={fileSelected!}
            setFileSelected={setFileSelected}
          />
        </div>
        <DetailsContainer>
          <InputContainer>
            <TextInput label="Name*" value={name} onChange={handleNameChange} />
            <TextInput
              label="Email*"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
            />
            <TextInput
              label="Age*"
              type="number"
              value={age}
              onChange={handleAgeChange}
            />
          </InputContainer>
          <Text>
            Please remember to save all the changes(name, image, email, age and work experience) you have made to the profile by clicking
            the below button
          </Text>

          <Button
            isDisable={
              name === "" || email === "" || age === undefined || age === ""
            }
            onClick={handleProfileSaveClick}
          >
            SAVE CHANGES
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
        <ConfirmationModal
          action={"Update Existing Profile"}
          isOpen={isUpdateConfirmationModalOpen}
          messageTitle={"Profile Exist"}
          message={
            "Profile with the same email is already present, Do you want to load and update the existing profile?"
          }
          onActionClick={handleConfirmClick}
          setIsConfirmationModalOpen={handleConfirmCancelClick}
        />
      </ProfilePageContainer>
    </>
  );
}
