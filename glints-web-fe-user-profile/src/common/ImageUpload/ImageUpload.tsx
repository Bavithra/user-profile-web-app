import React, { ChangeEvent, SetStateAction, useRef } from "react";

import { FileInput, Image, ImageContainer } from "./ImageUpload.styles";

import Avatar from "../../assets/avatar.png";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import WorkExperienceUtil from "../../utils/WorkExperienceUtil";

type Props = {
  fileSelected: string | ArrayBuffer | null;
  setFileSelected: React.Dispatch<SetStateAction<string | ArrayBuffer | null | undefined>>;
};

export default function ImageUpload(props: Props) {
  const { fileSelected, setFileSelected } = props;
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleButtonClick() {
    fileInputRef.current && fileInputRef.current.click();
  }


  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files === null || event.target.files.length === 0) {
      return;
    }

    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = function (e) {
      if (e === null || e.target === null) {
        return;
      }
      WorkExperienceUtil.getBase64(file, setFileSelected);
    };

    reader.readAsText(file);
  }

  return (
    <ImageContainer>
      <Image alt="" src={fileSelected ? fileSelected.toString() : Avatar} />
      <Button onClick={handleButtonClick}>
        <FontAwesomeIcon icon={faPlus} size="xs" color={"white"} /> Upload Image
      </Button>
      <FileInput
        data-testid="file-input"
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleInputChange}
      />
      <div>Please upload image less than 5MB</div>
    </ImageContainer>
  );
}
