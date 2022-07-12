import React, { ChangeEvent, useRef } from "react";

import { FileInput, Image, ImageContainer } from "./ImageUpload.styles";

import Avatar from "../../assets/avatar.png";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function ImageUpload() {
  const [fileSelected, setFileSelected] = React.useState<
    string | ArrayBuffer | null
  >();

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

      setFileSelected(URL.createObjectURL(file));
    };

    reader.readAsText(file);
  }

  return (
    <ImageContainer>
      <Image alt="" src={fileSelected ? fileSelected.toString() : Avatar} />
      <Button onClick={handleButtonClick}><FontAwesomeIcon icon={faPlus} size="xs" color={'white'} /> Upload Image</Button>
      <FileInput
        data-testid="file-input"
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleInputChange}
      />
    </ImageContainer>
  );
}
