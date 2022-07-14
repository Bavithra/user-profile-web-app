import { WorkExperience } from "../types/WorkExperience.type";

function getInitialWorkExperienceInput() {
  return {
    id: "",
    "start-date": "",
    "end-date": "",
    "job-title": "",
    company: "",
    "company-logo": "",
    "job-description": "",
  };
}

function shouldSaveButtonDisable(workExperience: WorkExperience) {
  return (
    workExperience["start-date"] === "" ||
    workExperience["end-date"] === "" ||
    workExperience.company === "" ||
    workExperience["job-title"] === ""
  );
}

function getBase64(file: File, setFile: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null | undefined>>) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    setFile(reader.result);
  };
  reader.onerror = function (error) {
    return;
  };
}

export default {
  getInitialWorkExperienceInput,
  shouldSaveButtonDisable,
  getBase64
};
